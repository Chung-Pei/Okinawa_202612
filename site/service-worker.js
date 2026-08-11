const CACHE_NAME = "okinawa-leader-pwa-v9";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./config.js",
  "./data/trip-data.js",
  "./data/claim-ledger.json",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // Weather, Leaflet CDN, OSM tiles, and Google Maps are intentionally external.
  // The app marks locally stored weather as cached so it is never presented as live.
  if (
    url.hostname.includes("open-meteo.com") ||
    url.hostname.includes("unpkg.com") ||
    url.hostname.includes("openstreetmap.org") ||
    url.hostname.includes("googleapis.com") ||
    url.hostname.includes("google.com")
  ) return;

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      return response;
    }).catch(() => caches.match("./index.html")))
  );
});
