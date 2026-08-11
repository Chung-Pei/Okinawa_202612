(() => {
  "use strict";

  const data = window.TRIP_DATA;
  const state = {
    dayIndex: 0,
    deferredInstallPrompt: null,
    weatherRequest: null,
    map: null
  };

  const MAP_STOP_TIMES = {
    day0: { day0: "20:50" },
    day1: { ots: "10:20", umikaji: "12:00", gyomu: "13:40", manzamo: "15:10", kyoda: "16:30", "starbucks-nago": "17:45", ala: "18:50" },
    day2: { ala: "07:30", churaumi: "08:30", kouri: "14:00", "ala-return": "16:30" },
    day3: { ala: "08:40", neopark: "09:30", junglia: "10:00", "aeon-nago": "13:30", "nago-snack": "15:15", "american-village": "17:00", lagent: "20:30" },
    day4: { lagent: "07:30", "childrens-kingdom": "09:30", rycom: "12:00", minatogawa: "15:00", "ys-inn": "16:10", "ots-return": "17:30" },
    day5: { "ys-inn": "07:00", naminoue: "08:05", "ys-inn-return": "09:00", iias: "10:00", airport: "17:00" }
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
    const point = (stop) => stop.query || `${stop.lat},${stop.lng}`;
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
    document.querySelector(".day-intro")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderDay() {
    const day = currentDay();
    const lodging = data.lodging[day.lodgingKey];
    const modeLabel = day.transportLabel || (day.mode === "driving" ? "自駕日" : day.mode === "mixed" ? "混合交通" : "抵達日");

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
    renderInteractiveMapForDay(day);
    const googleRoute = $("#open-google-route");
    const overviewStops = day.route?.overviewStops
      ? day.route.overviewStops.map((id) => day.route.stops.find((stop) => stop.id === id)).filter(Boolean)
      : day.route?.stops;
    const hasGoogleRoute = Boolean(!day.route?.hideOverviewNavigation && overviewStops?.length >= 2);
    googleRoute.hidden = !hasGoogleRoute;
    googleRoute.href = hasGoogleRoute ? googleMapsUrl(overviewStops, day.route.navigationMode || "driving") : "#";
    googleRoute.textContent = day.route?.overviewNavigationLabel || "在 Google Maps 導航";
    googleRoute.setAttribute("aria-label", `${day.label} 在 Google Maps 開啟導航`);
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
      const stops = route.stops || [];
      const stopById = new Map(stops.map((stop) => [stop.id, stop]));
      const subset = leg.stopIds
        ? leg.stopIds.map((id) => stopById.get(id)).filter(Boolean)
        : (stops[index] && stops[index + 1] ? stops.slice(index, index + 2) : stops);
      const from = leg.from || subset[0]?.label || stops[index]?.label || "起點";
      const to = leg.to || subset[subset.length - 1]?.label || stops[index + 1]?.label || "目的地";
      const distance = leg.distanceKm === null || leg.distanceKm === undefined ? "分段距離待確認" : `${leg.distanceKm} km`;
      const minutes = leg.minutes === null || leg.minutes === undefined
        ? "時間待確認"
        : (typeof leg.minutes === "string" && leg.minutes.trim().startsWith("約") ? `${leg.minutes.trim()} 分鐘` : `約 ${leg.minutes} 分鐘`);
      const openLabel = leg.openLabel || (route.routeType === "mixed" || route.navigationMode === "taxi" ? "開啟 Google Maps 路線參考" : "開啟此段導航");
      const routeLink = subset.length >= 2 && leg.navigation !== false
        ? `<a class="route-open" href="${escapeHtml(googleMapsUrl(subset, leg.navigationMode || route.navigationMode || "driving"))}" target="_blank" rel="noopener">${escapeHtml(openLabel)}</a>`
        : `<span class="route-open route-open-disabled">${escapeHtml(openLabel === "開啟此段導航" ? "PDF 路線摘要" : openLabel)}</span>`;
      return `
        <article class="route-item">
          <div class="route-item-top"><span class="route-id">${escapeHtml(leg.id)}</span><span class="route-name">${escapeHtml(leg.name || `${from} → ${to}`)}</span></div>
          <p class="route-metrics">${escapeHtml(distance)} · ${escapeHtml(minutes)}</p>
          <p class="route-roads">道路摘要：${escapeHtml(leg.roads)}</p>
          <p class="route-roads">${escapeHtml(leg.note)}</p>
          ${routeLink}
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

  function hasCoordinates(stop) {
    return Number.isFinite(Number(stop?.lat)) && Number.isFinite(Number(stop?.lng));
  }

  function getMapStops(day) {
    if (day.route?.stops?.length) return day.route.stops;
    const lodging = data.lodging[day.lodgingKey];
    return [{
      id: day.id,
      label: lodging?.name || day.weather.label,
      query: lodging?.map?.query || day.weather.label,
      lat: day.weather.lat,
      lng: day.weather.lng
    }];
  }

  function mapStopTime(day, stop) {
    return stop.time || MAP_STOP_TIMES[day.id]?.[stop.id] || "";
  }

  function mapStopBadge(stop) {
    const text = String(stop.short || stop.label || "OKI").replace(/[^A-Za-z0-9ぁ-んァ-ヶ一-龯]/g, "");
    return text.slice(0, 3) || "OKI";
  }

  function renderMapStopCards(day, stops) {
    return stops.map((stop, index) => {
      const cardId = `map-stop-card-${day.id}-${index}`;
      const time = mapStopTime(day, stop);
      const located = hasCoordinates(stop);
      return `
        <li class="map-stop-card${located ? "" : " is-unlocated"}" id="${escapeHtml(cardId)}" tabindex="0" data-map-stop-index="${index}">
          <span class="map-stop-number" aria-hidden="true">${index + 1}</span>
          <span class="map-stop-thumb" aria-hidden="true">${escapeHtml(mapStopBadge(stop))}</span>
          <span class="map-stop-copy">
            ${time ? `<span class="map-stop-time">${escapeHtml(time)}</span>` : ""}
            <strong>${escapeHtml(stop.label)}</strong>
            <span class="map-stop-status">${located ? "已標在地圖" : "地圖座標待補"}</span>
          </span>
          <a class="map-stop-link" href="${escapeHtml(googlePlaceUrl(stop))}" target="_blank" rel="noopener" aria-label="在 Google Maps 開啟 ${escapeHtml(stop.label)}">↗</a>
        </li>
      `;
    }).join("");
  }

  function renderInteractiveMapForDay(day) {
    const mapRoot = $("#map");
    state.map?.remove();
    state.map = null;
    const stops = getMapStops(day);
    const locatedStops = stops.filter(hasCoordinates);
    const route = day.route;
    const sourceNote = route?.source || "本日無自駕路線；地圖顯示住宿位置與行程起點。";
    mapRoot.innerHTML = `
      <div class="map-workbench${locatedStops.length ? "" : " is-fallback"}">
        <div class="map-visual-pane">
          <div id="leaflet-map" class="leaflet-map" role="application" aria-label="${escapeHtml(day.label)} Leaflet 互動地圖"></div>
          <p class="map-provider-note">底圖 © OpenStreetMap contributors · 路線為 PDF 景點順序示意，導航請開 Google Maps</p>
        </div>
        <aside class="map-stop-sequence" aria-label="${escapeHtml(day.label)} 景點順序">
          <div class="map-sequence-header">
            <span class="map-sequence-kicker">${escapeHtml(day.label)}</span>
            <h3>${escapeHtml(day.title)}</h3>
            <p>${escapeHtml(sourceNote)}</p>
          </div>
          <ol class="map-stop-list">${renderMapStopCards(day, stops)}</ol>
        </aside>
      </div>
    `;

    const leafletRoot = $("#leaflet-map");
    if (!window.L) {
      leafletRoot.innerHTML = `
        <div class="map-engine-fallback">
          <strong>地圖底圖目前無法載入</strong>
          <p>景點順序與 Google Maps 外部連結仍可使用；請確認網路後重新整理。</p>
        </div>
      `;
      return;
    }
    if (!locatedStops.length) {
      leafletRoot.innerHTML = `
        <div class="map-engine-fallback">
          <strong>本日尚無可繪製的地圖座標</strong>
          <p>請使用右側景點卡片開啟 Google Maps；行程資料與路段摘要仍可查看。</p>
        </div>
      `;
      return;
    }

    const leafletMap = window.L.map(leafletRoot, {
      zoomControl: false,
      scrollWheelZoom: false,
      preferCanvas: true,
      attributionControl: true
    });
    state.map = leafletMap;
    window.L.control.zoom({ position: "bottomright" }).addTo(leafletMap);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
    }).addTo(leafletMap);

    const stopById = new Map(stops.map((stop) => [stop.id, stop]));
    const segments = (route?.legs || []).map((leg, index) => {
      const segmentStops = leg.stopIds
        ? leg.stopIds.map((id) => stopById.get(id)).filter(hasCoordinates)
        : (locatedStops[index] && locatedStops[index + 1] ? locatedStops.slice(index, index + 2) : []);
      return { id: leg.id || `L${index + 1}`, stops: segmentStops };
    }).filter((segment) => segment.stops.length >= 2);
    if (!segments.length && locatedStops.length >= 2) segments.push({ id: "route", stops: locatedStops });

    const allPoints = [];
    segments.forEach((segment, segmentIndex) => {
      const points = segment.stops.map((stop) => [Number(stop.lat), Number(stop.lng)]);
      allPoints.push(...points);
      window.L.polyline(points, {
        color: segmentIndex % 2 ? "#ffbb66" : "#79e6d4",
        weight: 5,
        opacity: 0.88,
        lineCap: "round",
        lineJoin: "round",
        dashArray: route?.hideOverviewNavigation && segmentIndex > 1 ? "8 8" : null
      }).addTo(leafletMap).bindTooltip(`${segment.id} · 行程順序示意`, { sticky: true });
    });
    if (!allPoints.length) allPoints.push(...locatedStops.map((stop) => [Number(stop.lat), Number(stop.lng)]));

    const markers = new Map();
    locatedStops.forEach((stop) => {
      const index = stops.indexOf(stop);
      const cardId = `map-stop-card-${day.id}-${index}`;
      const marker = window.L.marker([Number(stop.lat), Number(stop.lng)], {
        title: `${index + 1}. ${stop.label}`,
        icon: window.L.divIcon({
          className: "map-stop-marker-shell",
          html: `<span class="map-stop-marker" aria-hidden="true">${index + 1}</span>`,
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        })
      }).addTo(leafletMap);
      marker.bindTooltip(`${index + 1}. ${escapeHtml(stop.label)}`, { direction: "top", offset: [0, -14] });
      marker.on("click", () => focusMapStop(cardId, marker));
      markers.set(index, marker);
    });

    const bounds = window.L.latLngBounds(allPoints);
    const fitOptions = { maxZoom: locatedStops.length === 1 ? 14 : 11, animate: false };
    leafletMap.fitBounds(bounds.pad(0.16), fitOptions);
    window.setTimeout(() => {
      if (state.map !== leafletMap) return;
      leafletMap.invalidateSize();
      leafletMap.fitBounds(bounds.pad(0.16), fitOptions);
    }, 80);

    $$(".map-stop-card").forEach((card) => {
      const index = Number(card.dataset.mapStopIndex);
      const marker = markers.get(index);
      card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;
        focusMapStop(card.id, marker);
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          focusMapStop(card.id, marker);
        }
      });
    });
  }

  function focusMapStop(cardId, marker) {
    $$(".map-stop-card.is-active").forEach((card) => card.classList.remove("is-active"));
    const card = document.getElementById(cardId);
    card?.classList.add("is-active");
    card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (marker && state.map) {
      marker.openTooltip();
      state.map.panTo(marker.getLatLng(), { animate: true, duration: 0.35 });
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
    registerPwa();
    $("#share-button").addEventListener("click", shareTrip);
    $("#install-button").addEventListener("click", installPwa);
    $("#install-footer-button").addEventListener("click", showInstallDialog);
    $("#current-day-button").addEventListener("click", selectToday);
    $("#refresh-weather").addEventListener("click", () => { loadWeather(currentDay()); showToast("正在更新天氣資料…", 1800); });
    $("#show-sources-button").addEventListener("click", () => $("#sources").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#copy-contacts").addEventListener("click", copyContacts);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
