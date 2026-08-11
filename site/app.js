(() => {
  "use strict";

  const data = window.TRIP_DATA;
  const config = window.TRIP_CONFIG || { googleMapsApiKey: "" };
  const state = {
    dayIndex: 0,
    mapsReady: false,
    map: null,
    markers: [],
    routePolyline: null,
    deferredInstallPrompt: null,
    weatherRequest: null
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function currentDay() {
    return data.days[state.dayIndex];
  }

  function formatDateLabel(dateString) {
    return new Intl.DateTimeFormat("zh-TW", {
      timeZone: data.meta.timezone,
      month: "long",
      day: "numeric",
      weekday: "short"
    }).format(new Date(`${dateString}T12:00:00+09:00`));
  }

  function googleMapsUrl(stops, mode = "driving") {
    if (!stops || stops.length < 2) return "#";
    const point = (stop) => `${stop.lat},${stop.lng}`;
    const params = new URLSearchParams({
      api: "1",
      origin: point(stops[0]),
      destination: point(stops[stops.length - 1]),
      travelmode: mode
    });
    if (stops.length > 2) params.set("waypoints", stops.slice(1, -1).map(point).join("|"));
    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }

  function googlePlaceUrl(stop) {
    const query = stop.query || `${stop.lat},${stop.lng}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function renderDayTabs() {
    const tabs = $("#day-tabs");
    tabs.setAttribute("role", "tablist");
    tabs.innerHTML = data.days.map((day, index) => `
      <button class="day-tab" type="button" role="tab" aria-selected="${index === state.dayIndex}" aria-controls="day-intro" data-day-index="${index}">
        <strong>${escapeHtml(day.label)}</strong>
        <span>${escapeHtml(day.dateLabel)}</span>
      </button>
    `).join("");
    $$(".day-tab").forEach((tab) => {
      tab.addEventListener("click", () => selectDay(Number(tab.dataset.dayIndex)));
    });
  }

  function selectDay(index) {
    if (!data.days[index]) return;
    state.dayIndex = index;
    renderDayTabs();
    renderDay();
    renderMapForDay(currentDay());
    document.querySelector(".day-intro")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderDay() {
    const day = currentDay();
    const lodging = data.lodging[day.lodgingKey];
    const modeLabel = day.mode === "driving" ? "自駕日" : day.mode === "mixed" ? "自駕＋輕軌" : "抵達日";

    $("#day-intro").innerHTML = `
      <div>
        <h3>${escapeHtml(day.title)}</h3>
        <p>${escapeHtml(day.intro)}</p>
      </div>
      <div class="day-intro-meta" aria-label="本日資訊">
        <span>${escapeHtml(formatDateLabel(day.date))}</span>
        <span>${escapeHtml(modeLabel)}</span>
        <span>${escapeHtml(lodging?.name || "住宿待補")}</span>
      </div>
    `;
    $("#schedule-kicker").textContent = day.mode === "driving" ? "SOURCE + ROUTE" : "SOURCE ITINERARY";
    renderTimeline(day);
    renderLodging(lodging);
    renderWeatherPlaceholder(day);
    renderRoute(day);
    renderNotes(day);
    $("#open-google-route").href = googleMapsUrl(day.route?.stops, day.mode === "driving" ? "driving" : "driving");
    $("#open-google-route").setAttribute("aria-label", `${day.label} 在 Google Maps 開啟導航`);
    loadWeather(day);
  }

  function renderTimeline(day) {
    $("#timeline").innerHTML = day.schedule.map((item) => `
      <article class="timeline-item is-${escapeHtml(item.type || "source")}">
        <div class="timeline-time">${escapeHtml(item.time)}</div>
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-body">
          <div class="timeline-title">${escapeHtml(item.title)}</div>
          <p class="timeline-detail">${escapeHtml(item.detail)}</p>
          <span class="timeline-tag">${escapeHtml(item.tag)}</span>
        </div>
      </article>
    `).join("");
  }

  function renderLodging(lodging) {
    const status = $("#lodging-status");
    if (!lodging || lodging.missing) {
      status.textContent = "資料待補";
      status.className = "status-pill status-missing";
      $("#lodging-card").innerHTML = `
        <div class="lodging-card">
          <p class="lodging-name">${escapeHtml(lodging?.name || "住宿資料待補")}</p>
          <p class="lodging-en">${escapeHtml(lodging?.english || "")}</p>
          <p class="lodging-address">${escapeHtml(lodging?.address || "請補入訂房確認資料")}</p>
          <p class="lodging-note">${escapeHtml(lodging?.note || "")}</p>
        </div>
      `;
      return;
    }
    status.textContent = "官方資料";
    status.className = "status-pill";
    $("#lodging-card").innerHTML = `
      <div class="lodging-card">
        <p class="lodging-name">${escapeHtml(lodging.name)}</p>
        <p class="lodging-en">${escapeHtml(lodging.english)}</p>
        <p class="lodging-address">${escapeHtml(lodging.address)}</p>
        <div class="lodging-actions">
          <a class="contact-chip" href="tel:${escapeHtml(lodging.phone)}" aria-label="撥打 ${escapeHtml(lodging.name)} 電話">電話 ${escapeHtml(lodging.phone)}</a>
          <a class="contact-chip" href="${escapeHtml(googlePlaceUrl(lodging.map))}" target="_blank" rel="noopener">地圖</a>
        </div>
        ${lodging.email ? `<a class="contact-chip" href="mailto:${escapeHtml(lodging.email)}">Email ${escapeHtml(lodging.email)}</a>` : ""}
        <p class="lodging-note">${escapeHtml(lodging.note)} · ${escapeHtml(lodging.source)}</p>
      </div>
    `;
  }

  function renderWeatherPlaceholder(day) {
    $("#weather-card").innerHTML = `
      <div class="weather-empty" aria-live="polite">
        <strong>${escapeHtml(day.weather.label)}</strong><br />正在查詢 ${escapeHtml(day.date)} 的預報範圍…
      </div>
    `;
  }

  const WEATHER_CODES = {
    0: ["晴朗", "sun"],
    1: ["大致晴朗", "partly"],
    2: ["局部多雲", "partly"],
    3: ["多雲", "cloud"],
    45: ["霧", "fog"],
    48: ["霧淞", "fog"],
    51: ["小毛雨", "rain"],
    53: ["毛毛雨", "rain"],
    55: ["較強毛毛雨", "rain"],
    61: ["小雨", "rain"],
    63: ["中雨", "rain"],
    65: ["大雨", "rain"],
    71: ["小雪", "snow"],
    73: ["中雪", "snow"],
    75: ["大雪", "snow"],
    80: ["陣雨", "rain"],
    81: ["陣雨", "rain"],
    82: ["強陣雨", "rain"],
    95: ["雷雨", "storm"],
    96: ["雷雨伴冰雹", "storm"],
    99: ["雷雨伴冰雹", "storm"]
  };

  function weatherIcon(kind) {
    const sun = `<circle cx="24" cy="20" r="8"/><path d="M24 5v4m0 22v4M9 20h4m22 0h4M13.4 9.4l2.8 2.8m15.6 15.6 2.8 2.8M34.6 9.4l-2.8 2.8m-15.6 15.6-2.8 2.8"/>`;
    const cloud = `<path d="M11 33h24a7 7 0 0 0 .8-13.95A12 12 0 0 0 13 21.6 6 6 0 0 0 11 33Z"/>`;
    if (kind === "sun") return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true">${sun}</svg>`;
    if (kind === "partly") return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true"><g class="weather-sun">${sun}</g><g class="weather-cloud">${cloud}</g></svg>`;
    if (kind === "cloud") return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true"><g class="weather-cloud">${cloud}</g></svg>`;
    if (kind === "fog") return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M9 19h30M6 25h36M10 31h28"/></svg>`;
    if (kind === "snow") return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true"><g class="weather-cloud">${cloud}</g><path d="M17 37v-5m0 0-3 3m3-3 3 3m10-3v5m0-5-3 3m3-3 3 3"/></svg>`;
    if (kind === "storm") return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true"><g class="weather-cloud">${cloud}</g><path d="m25 30-4 7h5l-3 7 8-10h-5l4-4"/></svg>`;
    return `<svg class="weather-icon" viewBox="0 0 48 48" aria-hidden="true"><g class="weather-cloud">${cloud}</g><path d="M17 37v4m10-4v4m10-4v4"/></svg>`;
  }

  function renderWeather(day, payload, cached = false) {
    const index = payload.daily?.time?.indexOf(day.date) ?? -1;
    if (index < 0) {
      $("#weather-card").innerHTML = `
        <div class="weather-empty" aria-live="polite">
          <strong>${escapeHtml(day.weather.label)}</strong>
          <p class="weather-note">目前尚未進入 16 日預報範圍。出發前約兩週回到本頁更新；不要以長期氣候平均當作當日預報。</p>
        </div>
      `;
      return;
    }
    const code = payload.daily.weather_code[index];
    const weather = WEATHER_CODES[code] || ["天氣資料", "•"];
    const fetchedAt = payload.fetchedAt || new Date().toISOString();
    const fetchedLabel = new Intl.DateTimeFormat("zh-TW", { dateStyle: "short", timeStyle: "short" }).format(new Date(fetchedAt));
    const stateLabel = cached ? "離線快取" : "即時查詢";
    $("#weather-card").innerHTML = `
      <div class="weather-card" aria-live="polite">
        <div class="weather-main">
          <div class="weather-symbol">${weatherIcon(weather[1])}</div>
          <div>
            <div class="weather-temp"><strong>${Math.round(payload.daily.temperature_2m_min[index])}°</strong><span>至 ${Math.round(payload.daily.temperature_2m_max[index])}°C</span></div>
            <p class="weather-caption">${escapeHtml(day.weather.label)} · ${escapeHtml(weather[0])}</p>
          </div>
        </div>
        <div class="weather-stats">
          <div class="weather-stat"><small>降雨機率</small><strong>${payload.daily.precipitation_probability_max[index] ?? "—"}%</strong></div>
          <div class="weather-stat"><small>最大風速</small><strong>${Math.round(payload.daily.wind_speed_10m_max[index] ?? 0)} km/h</strong></div>
          <div class="weather-stat"><small>資料狀態</small><strong>${stateLabel}</strong></div>
        </div>
        <div class="weather-meta"><span>Open-Meteo</span><span>更新 ${escapeHtml(fetchedLabel)}</span></div>
      </div>
    `;
  }

  async function loadWeather(day) {
    const key = `okinawa-weather-${day.id}`;
    const cachedRaw = localStorage.getItem(key);
    let cached = null;
    try { cached = cachedRaw ? JSON.parse(cachedRaw) : null; } catch (error) { localStorage.removeItem(key); }
    const query = new URLSearchParams({
      latitude: day.weather.lat,
      longitude: day.weather.lng,
      daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
      timezone: data.meta.timezone,
      forecast_days: "16"
    });
    const requestId = `${day.id}-${Date.now()}`;
    state.weatherRequest = requestId;
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query.toString()}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Weather HTTP ${response.status}`);
      const payload = await response.json();
      payload.fetchedAt = new Date().toISOString();
      localStorage.setItem(key, JSON.stringify(payload));
      if (state.weatherRequest === requestId && currentDay().id === day.id) renderWeather(day, payload, false);
    } catch (error) {
      if (cached) {
        if (state.weatherRequest === requestId && currentDay().id === day.id) renderWeather(day, cached, true);
      } else if (state.weatherRequest === requestId && currentDay().id === day.id) {
        $("#weather-card").innerHTML = `<div class="weather-empty"><strong>目前無法取得天氣</strong><p class="weather-note">請確認網路後按「更新」。行程與住宿資料仍可離線查看。</p></div>`;
      }
    }
  }

  function renderRoute(day) {
    const route = day.route;
    $("#route-title").textContent = `${day.label} 路段規劃`;
    $("#route-source").textContent = route ? route.source : "本日無自駕路線資料";
    $("#route-list").innerHTML = route ? route.legs.map((leg, index) => {
      const stops = route.stops;
      const from = stops[index]?.label || "起點";
      const to = stops[index + 1]?.label || "目的地";
      const subset = stops[index] && stops[index + 1] ? stops.slice(index, index + 2) : stops;
      return `
        <article class="route-item">
          <div class="route-item-top"><span class="route-id">${escapeHtml(leg.id)}</span><span class="route-name">${escapeHtml(leg.name || `${from} → ${to}`)}</span></div>
          <p class="route-metrics">${escapeHtml(leg.distanceKm)} km · 約 ${escapeHtml(leg.minutes)} 分鐘</p>
          <p class="route-roads">道路摘要：${escapeHtml(leg.roads)}</p>
          <p class="route-roads">${escapeHtml(leg.note)}</p>
          <a class="route-open" href="${escapeHtml(googleMapsUrl(subset))}" target="_blank" rel="noopener">開啟此段導航</a>
        </article>
      `;
    }).join("") : `<div class="weather-empty">本日以步行、輕軌與計程車為主，請查看時間軸。</div>`;
  }

  function renderNotes(day) {
    const notes = day.notes || [
      { title: "集合與通訊", detail: "出發前指定集合點、最後集合時間與 A/B 隊聯絡人；長距離轉場請先確認所有人已上車。" },
      { title: "先看官方公告", detail: "景點營業、節目、預約、停車與臨時休館屬變動資訊，請從本頁來源連結再確認。" },
      { title: "導航以現場為準", detail: "路段估算只協助預排；出發時請用 Google Maps 看即時交通、施工、天氣與替代路線。" }
    ];
    $("#notes-grid").innerHTML = notes.map((note) => `
      <article class="note-card"><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.detail)}</p></article>
    `).join("");
  }

  function showMapOverlay(message, description, fallback = false) {
    const overlay = $("#map-overlay");
    overlay.classList.toggle("is-fallback", fallback);
    overlay.classList.remove("is-hidden");
    overlay.querySelector("strong").textContent = message;
    overlay.querySelector("p").innerHTML = description;
  }

  function hideMapOverlay() {
    $("#map-overlay").classList.add("is-hidden");
  }

  function renderFallbackMap(day) {
    const map = $("#map");
    const stops = day.route?.stops || [];
    if (stops.length < 2) {
      map.innerHTML = `<div class="fallback-empty">本日沒有自駕路線；請使用時間軸。</div>`;
      showMapOverlay("本日無自駕底圖", "此日以抵達、輕軌或計程車為主。", true);
      return;
    }
    const lats = stops.map((stop) => stop.lat);
    const lngs = stops.map((stop) => stop.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    const pad = 12;
    const x = (lng) => pad + ((lng - minLng) / Math.max(maxLng - minLng, 0.001)) * (100 - pad * 2);
    const y = (lat) => 88 - ((lat - minLat) / Math.max(maxLat - minLat, 0.001)) * 68;
    const points = stops.map((stop) => `${x(stop.lng).toFixed(2)},${y(stop.lat).toFixed(2)}`).join(" ");
    const circles = stops.map((stop, index) => `
      <g class="fallback-stop"><circle cx="${x(stop.lng).toFixed(2)}" cy="${y(stop.lat).toFixed(2)}" r="3.4"/><text x="${x(stop.lng).toFixed(2)}" y="${(y(stop.lat) - 5).toFixed(2)}">${index + 1}</text></g>
    `).join("");
    map.innerHTML = `
      <svg class="fallback-map" viewBox="0 0 100 100" role="img" aria-label="${escapeHtml(day.label)} 路線示意圖">
        <rect width="100" height="100" fill="#dcefe9"/>
        <path d="M0 20 C21 12 28 28 48 18 S72 7 100 20 V0H0Z" fill="#c3e2dd"/>
        <path d="M0 76 C24 66 36 90 61 73 S84 62 100 72 V100H0Z" fill="#c3e2dd"/>
        <path d="M4 46 C23 39 32 51 48 43 S75 30 97 39" fill="none" stroke="#b9d3cf" stroke-width="1.4"/>
        <path d="M10 87 C26 66 37 69 49 51 S73 35 88 9" fill="none" stroke="#fff" stroke-width="4" opacity=".92"/>
        <polyline points="${points}" fill="none" stroke="#e76f32" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        ${circles}
        <text x="7" y="95" fill="#496a68" font-size="3.1" font-weight="700">示意線 · 設定 Google Maps key 後載入道路底圖</text>
      </svg>
    `;
    showMapOverlay("Google Maps 底圖尚未載入", "目前顯示的是路線示意。請在 <code>site/config.js</code> 填入受網域限制的 API key，再按「載入互動地圖」。", true);
  }

  function clearMapLayers() {
    state.markers.forEach((marker) => {
      if (typeof marker.setMap === "function") marker.setMap(null);
      else marker.map = null;
    });
    state.markers = [];
    if (state.routePolyline) {
      state.routePolyline.setMap(null);
      state.routePolyline = null;
    }
  }

  async function loadGoogleMapsScript() {
    if (!config.googleMapsApiKey) throw new Error("Google Maps API key is empty");
    if (state.mapsReady && window.google?.maps) return;
    if (window.__tripGoogleMapsPromise) return window.__tripGoogleMapsPromise;
    window.__tripGoogleMapsPromise = new Promise((resolve, reject) => {
      const callbackName = "__tripGoogleMapsCallback";
      window[callbackName] = () => {
        state.mapsReady = true;
        resolve();
        delete window[callbackName];
      };
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(config.googleMapsApiKey)}&loading=async&callback=${callbackName}&v=weekly&language=zh-TW&region=JP`;
      script.onerror = () => reject(new Error("Google Maps script failed to load"));
      document.head.appendChild(script);
    });
    return window.__tripGoogleMapsPromise;
  }

  function loc(stop) { return { lat: stop.lat, lng: stop.lng }; }

  async function renderGoogleMap(day) {
    await loadGoogleMapsScript();
    $("#map").innerHTML = "";
    const mapsLib = await google.maps.importLibrary("maps");
    const map = new mapsLib.Map($("#map"), {
      center: day.weather,
      zoom: 10,
      mapTypeId: "roadmap",
      gestureHandling: "greedy",
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
      clickableIcons: true,
      zoomControl: true
    });
    state.map = map;
    clearMapLayers();
    const stops = day.route?.stops || [];
    const bounds = new google.maps.LatLngBounds();
    const hasLegacyMarker = typeof google.maps.Marker === "function";
    let AdvancedMarkerElement;
    if (!hasLegacyMarker) {
      const markerLib = await google.maps.importLibrary("marker");
      AdvancedMarkerElement = markerLib.AdvancedMarkerElement;
    }
    stops.forEach((stop, index) => {
      const position = loc(stop);
      bounds.extend(position);
      if (hasLegacyMarker) {
        const marker = new google.maps.Marker({
          map,
          position,
          title: `${index + 1}. ${stop.label}`,
          label: { text: String(index + 1), color: "#ffffff", fontWeight: "800" }
        });
        state.markers.push(marker);
      } else if (AdvancedMarkerElement) {
        const pin = document.createElement("div");
        pin.className = "advanced-stop-pin";
        pin.textContent = String(index + 1);
        const marker = new AdvancedMarkerElement({ map, position, title: `${index + 1}. ${stop.label}`, content: pin });
        state.markers.push(marker);
      }
    });
    if (stops.length) map.fitBounds(bounds, 64);
    hideMapOverlay();
    try {
      const { Route } = await google.maps.importLibrary("routes");
      const result = await Route.computeRoutes({
        origin: loc(stops[0]),
        destination: loc(stops[stops.length - 1]),
        intermediates: stops.slice(1, -1).map((stop) => ({ location: loc(stop), vehicleStopover: true })),
        travelMode: "DRIVING",
        language: "zh-TW",
        units: "METRIC",
        routingPreference: "TRAFFIC_UNAWARE",
        fields: ["path", "viewport", "localizedValues", "legs", "routeLabels"]
      });
      const route = result.routes?.[0];
      if (!route?.path?.length) throw new Error("Google route returned no path");
      state.routePolyline = new mapsLib.Polyline({
        map,
        path: route.path,
        strokeColor: "#e76f32",
        strokeOpacity: 0.95,
        strokeWeight: 5,
        zIndex: 10
      });
      if (route.viewport) map.fitBounds(route.viewport, 56);
      $("#route-source").textContent = `${day.route.source} · Google Routes 已載入道路線形`;
    } catch (error) {
      const fallbackPolyline = new mapsLib.Polyline({
        map,
        path: stops.map(loc),
        strokeColor: "#e76f32",
        strokeOpacity: 0.85,
        strokeWeight: 4,
        geodesic: false,
        zIndex: 10
      });
      state.routePolyline = fallbackPolyline;
      showToast("Google 路線計算未完成，已顯示路段示意；仍可用 Google Maps 導航連結。", 4200);
    }
  }

  function renderMapForDay(day) {
    if (!config.googleMapsApiKey) {
      clearMapLayers();
      state.map = null;
      renderFallbackMap(day);
      return;
    }
    if (!state.mapsReady) renderFallbackMap(day);
    else renderGoogleMap(day).catch(() => renderFallbackMap(day));
  }

  async function loadInteractiveMap() {
    const day = currentDay();
    if (!config.googleMapsApiKey) {
      showToast("尚未設定 Google Maps API key；請先編輯 site/config.js。", 4200);
      return;
    }
    const button = $("#load-map-button");
    button.disabled = true;
    button.textContent = "載入中…";
    try {
      await renderGoogleMap(day);
      button.textContent = "重新整理地圖";
      showToast("Google Maps 底圖與路線已載入。", 2600);
    } catch (error) {
      renderFallbackMap(day);
      showToast("Google Maps 載入失敗，請檢查 API key、網域限制與 Maps/Routes API 是否啟用。", 5200);
    } finally {
      button.disabled = false;
    }
  }

  function showToast(message, duration = 3000) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), duration);
  }

  async function shareTrip() {
    const shareData = { title: data.meta.title, text: "沖繩家族旅遊領隊 PWA：行程、地圖、住宿與天氣", url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (error) { if (error.name !== "AbortError") showToast("分享沒有完成。", 2600); }
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("已複製網站連結。", 2600);
    } catch (error) {
      showToast("請從瀏覽器選單複製目前網址。", 3200);
    }
  }

  function showInstallDialog() {
    const dialog = $("#install-dialog");
    if (typeof dialog.showModal === "function") dialog.showModal();
    else showToast("請從瀏覽器選單選擇「加到主畫面」。", 3600);
  }

  async function installPwa() {
    if (state.deferredInstallPrompt) {
      state.deferredInstallPrompt.prompt();
      await state.deferredInstallPrompt.userChoice;
      state.deferredInstallPrompt = null;
      return;
    }
    showInstallDialog();
  }

  function currentDateInTripTimezone() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: data.meta.timezone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  }

  function selectToday() {
    const today = currentDateInTripTimezone();
    const index = data.days.findIndex((day) => day.date === today);
    if (index < 0) {
      showToast(`今天（${today}）不在這趟行程日期內，先顯示 Day 0。`, 3400);
      selectDay(0);
      return;
    }
    selectDay(index);
  }

  async function copyContacts() {
    const contacts = Object.values(data.lodging).filter((item) => item.phone).map((item) => `${item.name}：${item.phone}`).join("\n");
    try {
      await navigator.clipboard.writeText(contacts);
      showToast("已複製住宿電話清單。", 2600);
    } catch (error) {
      showToast("無法存取剪貼簿，請長按住宿電話複製。", 3600);
    }
  }

  function registerPwa() {
    if ("serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)) {
      navigator.serviceWorker.register("./service-worker.js").catch(() => showToast("離線快取註冊未完成，但網站仍可使用。", 3200));
    }
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      state.deferredInstallPrompt = event;
    });
    window.addEventListener("appinstalled", () => {
      state.deferredInstallPrompt = null;
      showToast("已安裝到主畫面。", 2600);
    });
  }

  function init() {
    renderDayTabs();
    renderDay();
    renderMapForDay(currentDay());
    registerPwa();
    $("#share-button").addEventListener("click", shareTrip);
    $("#install-button").addEventListener("click", installPwa);
    $("#install-footer-button").addEventListener("click", showInstallDialog);
    $("#current-day-button").addEventListener("click", selectToday);
    $("#load-map-button").addEventListener("click", loadInteractiveMap);
    $("#refresh-weather").addEventListener("click", () => { loadWeather(currentDay()); showToast("正在更新天氣資料…", 1800); });
    $("#show-sources-button").addEventListener("click", () => $("#sources").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#copy-contacts").addEventListener("click", copyContacts);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
