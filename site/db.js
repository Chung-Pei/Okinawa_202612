/* okinawa-pwa db.js — IndexedDB layer (v16)
   DB: okinawa-pwa
   Stores: expenses (autoIncrement), notes (autoIncrement), settings (keyPath "key")
   Exposed as window.DB; every API returns a Promise. */

(function () {
  "use strict";

  var DB_NAME = "okinawa-pwa";
  var DB_VERSION = 1;

  var dbPromise = null;

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      if (!("indexedDB" in window)) {
        reject(new Error("此瀏覽器不支援 IndexedDB"));
        return;
      }
      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains("expenses")) {
          db.createObjectStore("expenses", { autoIncrement: true });
        }
        if (!db.objectStoreNames.contains("notes")) {
          db.createObjectStore("notes", { autoIncrement: true });
        }
        if (!db.objectStoreNames.contains("settings")) {
          db.createObjectStore("settings", { keyPath: "key" });
        }
      };
      req.onsuccess = function (e) { resolve(e.target.result); };
      req.onerror = function (e) {
        dbPromise = null;
        reject(e.target.error || new Error("IndexedDB 開啟失敗"));
      };
    });
    return dbPromise;
  }

  function withStore(storeName, mode, fn) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeName, mode);
        var store = tx.objectStore(storeName);
        var done = fn(store, tx);
        tx.oncomplete = function () { resolve(done && done.result); };
        tx.onerror = function (e) { reject(e.target.error || new Error("IndexedDB 交易失敗")); };
        tx.onabort = function (e) { reject(e.target.error || new Error("IndexedDB 交易中斷")); };
      });
    });
  }

  function all(storeName) {
    return withStore(storeName, "readonly", function (store) {
      var req = store.getAll();
      var out = {};
      req.onsuccess = function () { out.result = req.result || []; };
      return out;
    });
  }

  function add(storeName, value) {
    return withStore(storeName, "readwrite", function (store) {
      var req = store.add(value);
      var out = {};
      req.onsuccess = function () { out.result = req.result; };
      return out;
    });
  }

  function put(storeName, value) {
    return withStore(storeName, "readwrite", function (store) {
      var req = store.put(value);
      var out = {};
      req.onsuccess = function () { out.result = req.result; };
      return out;
    });
  }

  function del(storeName, key) {
    return withStore(storeName, "readwrite", function (store) {
      var req = store.delete(key);
      var out = {};
      req.onsuccess = function () { out.result = true; };
      return out;
    });
  }

  function clear(storeName) {
    return withStore(storeName, "readwrite", function (store) {
      var req = store.clear();
      var out = {};
      req.onsuccess = function () { out.result = true; };
      return out;
    });
  }

  function get(storeName, key) {
    return withStore(storeName, "readonly", function (store) {
      var req = store.get(key);
      var out = {};
      req.onsuccess = function () { out.result = req.result; };
      return out;
    });
  }

  /* 帶 key 的全量讀取（autoIncrement store 刪除單筆用） */
  function allWithKeys(storeName) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeName, "readonly");
        var store = tx.objectStore(storeName);
        var items = [];
        var req = store.openCursor();
        req.onsuccess = function (e) {
          var c = e.target.result;
          if (c) {
            var rec = { id: c.key };
            if (c.value && typeof c.value === "object") Object.assign(rec, c.value);
            else rec.value = c.value;
            items.push(rec);
            c.continue();
          } else {
            resolve(items);
          }
        };
        req.onerror = function (e) { reject(e.target.error || new Error("IndexedDB 讀取失敗")); };
      });
    });
  }

  var API = {
    init: function () { return openDb().then(function () { return true; }); },

    /* ---- expenses ---- */
    addExpense: function (entry) { return add("expenses", entry); },
    getExpenses: function () { return allWithKeys("expenses"); },
    deleteExpense: function (id) { return del("expenses", id); },
    clearExpenses: function () { return clear("expenses"); },

    /* ---- notes ---- */
    addNote: function (entry) { return add("notes", entry); },
    getNotes: function () { return allWithKeys("notes"); },
    updateNote: function (id, patch) {
      return get("notes", id).then(function (cur) {
        if (!cur) throw new Error("找不到這筆筆記");
        var next = Object.assign({}, cur, patch);
        return put("notes", next);
      });
    },
    deleteNote: function (id) { return del("notes", id); },
    clearNotes: function () { return clear("notes"); },

    /* ---- settings ---- */
    getSetting: function (key) {
      return get("settings", key).then(function (rec) {
        return rec ? rec.value : undefined;
      });
    },
    setSetting: function (key, value) {
      return put("settings", { key: key, value: value }).then(function () { return value; });
    }
  };

  window.DB = API;
})();
