(() => {
  "use strict";

  const data = window.TRIP_DATA;
  const restaurantGuide = window.RESTAURANT_GUIDE || { meta: { dietaryRules: [] }, days: {} };
  const state = {
    dayIndex: 0,
    deferredInstallPrompt: null,
    weatherRequest: null,
    map: null
  };

  const MAP_STOP_TIMES = {
    day0: { airport: "20:50", "ys-inn": "抵達後" },
    day1: { ots: "10:20", umikaji: "12:00", gyomu: "13:40", manzamo: "15:10", kyoda: "16:30", ala: "18:00" },
    day2: { ala: "07:30", churaumi: "08:30", kouri: "14:00", "ala-return": "16:30" },
    day3: { ala: "08:40", neopark: "09:30", junglia: "10:00", "aeon-nago": "15:00", "nago-snack": "15:15", "american-village": "17:00", lagent: "20:30" },
    day4: { lagent: "07:30", "childrens-kingdom": "09:30", rycom: "12:00", minatogawa: "15:00", naminoue: "16:00", anteroom: "16:35", kokusai: "18:00" },
    day5: { anteroom: "07:30", "ots-return": "08:20", iias: "09:30", airport: "14:50" }
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  function scrollBehavior() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  }

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
      <button class="day-tab" type="button" role="tab" aria-selected="${index === state.dayIndex}" aria-controls="day-intro" aria-label="${escapeHtml(day.label)} ${escapeHtml(day.title)}" tabindex="${index === state.dayIndex ? "0" : "-1"}" data-day-index="${index}">
        <strong>${escapeHtml(day.label)}</strong>
        <span>${escapeHtml(day.dateLabel)}</span>
      </button>
    `).join("");
    $$(".day-tab").forEach((tab) => {
      tab.addEventListener("click", () => selectDay(Number(tab.dataset.dayIndex)));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const currentIndex = Number(tab.dataset.dayIndex);
        const nextIndex = event.key === "Home"
          ? 0
          : event.key === "End"
            ? data.days.length - 1
            : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + data.days.length) % data.days.length;
        selectDay(nextIndex);
        window.requestAnimationFrame(() => $(`.day-tab[data-day-index="${nextIndex}"]`)?.focus());
      });
    });
  }

  function selectDay(index) {
    if (!data.days[index]) return;
    state.dayIndex = index;
    renderDayTabs();
    renderDay();
    document.querySelector(".day-intro")?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  }

  function renderDay() {
    const day = currentDay();
    const lodging = data.lodging[day.lodgingKey];
    const modeLabel = day.transportLabel || (day.mode === "driving" ? "自駕日" : day.mode === "mixed" ? "混合交通" : "抵達日");

    $("#day-intro").setAttribute("aria-label", `${day.label} ${day.title}`);
    $("#day-intro").innerHTML = `
      <div class="day-intro-copy">
        <h3>${escapeHtml(day.title)}</h3>
        <p>${escapeHtml(day.intro)}</p>
      </div>
      <div class="day-intro-meta" aria-label="本日資訊">
        <span>${escapeHtml(formatDateLabel(day.date))}</span>
        <span>${escapeHtml(modeLabel)}</span>
        <span>${escapeHtml(lodging?.name || "住宿待補")}</span>
      </div>
    `;
    $("#schedule-kicker").textContent = "行程時間軸";
    renderTimeline(day);
    renderLodging(lodging);
    renderWeatherPlaceholder(day);
    renderRoute(day);
    renderRestaurantPlan(day);
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

  const quickBrief = (text) => `<div class="quick-brief"><strong>速查</strong><p>${escapeHtml(text)}</p></div>`;
  const foldable = (label, inner, cls) => `<details class="foldable${cls ? " " + cls : ""}"><summary>${escapeHtml(label)}</summary><div class="foldable-body">${inner}</div></details>`;
  const bodyList = (body) => {
    const lines = String(body || "").split("\n").map((line) => line.trim()).filter(Boolean);
    if (lines.length > 1) return `<ul class="ext-list">${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`;
    return extParagraphs(body);
  };

  function renderTimeline(day) {
    $("#timeline").innerHTML = day.schedule.map((item) => {
      const detail = item.detail || "";
      const folded = detail.length > 60;
      const preview = folded ? `${detail.slice(0, 48)}…` : detail;
      const detailHtml = folded
        ? `<p class="timeline-detail">${escapeHtml(preview)}</p>
           ${foldable("展開詳情", `<p>${escapeHtml(detail)}</p>`, "timeline-more")}`
        : `<p class="timeline-detail">${escapeHtml(detail)}</p>`;
      return `
      <article class="timeline-item is-${escapeHtml(item.type || "source")}">
        <div class="timeline-time">${escapeHtml(item.time)}</div>
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-body">
          <div class="timeline-title">${escapeHtml(item.title)}</div>
          ${detailHtml}
          <span class="timeline-tag">${escapeHtml(item.tag)}</span>
        </div>
      </article>`;
    }).join("");
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
    status.textContent = "已確認";
    status.className = "status-pill";
    $("#lodging-card").innerHTML = `
      <div class="lodging-card">
        <p class="lodging-name">${escapeHtml(lodging.name)}</p>
        <p class="lodging-en">${escapeHtml(lodging.english)}</p>
        <p class="lodging-address">${escapeHtml(lodging.address)}</p>
        <div class="lodging-actions">
          <a class="contact-chip" href="tel:${escapeHtml(lodging.phone)}" aria-label="撥打 ${escapeHtml(lodging.name)} 電話"><svg class="ui-icon contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.7 4.5 5.4 5.8a2 2 0 0 0-.9 2.4c1.7 5.3 5.9 9.5 11.2 11.2a2 2 0 0 0 2.4-.9l1.3-2.3-3.6-2.4-1.5 1.5a13.2 13.2 0 0 1-5.7-5.7l1.5-1.5-2.4-3.6Z" /></svg><span>電話 ${escapeHtml(lodging.phone)}</span></a>
          <a class="contact-chip" href="${escapeHtml(googlePlaceUrl(lodging.map))}" target="_blank" rel="noopener"><svg class="ui-icon contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg><span>地圖</span></a>
        </div>
        ${lodging.email ? `<a class="contact-chip" href="mailto:${escapeHtml(lodging.email)}"><svg class="ui-icon contact-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg><span>Email ${escapeHtml(lodging.email)}</span></a>` : ""}
        <p class="lodging-note">${escapeHtml(lodging.note)} · ${escapeHtml(lodging.source)}</p>
      </div>
    `;
  }

  function renderWeatherPlaceholder(day) {
    $("#weather-card").innerHTML = `
      <div class="weather-empty weather-loading" aria-live="polite" aria-busy="true">
        <div class="weather-loading-copy"><span class="loading-dot" aria-hidden="true"></span><p><strong>正在查詢 ${escapeHtml(day.weather.label)}</strong><span>${escapeHtml(day.date)} 的旅遊日預報</span></p></div>
        <span class="skeleton-line skeleton-line-wide" aria-hidden="true"></span>
        <span class="skeleton-line" aria-hidden="true"></span>
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
        <div class="weather-empty" aria-live="polite" aria-busy="false">
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
      <div class="weather-card" aria-live="polite" aria-busy="false">
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
    const refreshButton = $("#refresh-weather");
    refreshButton.disabled = true;
    refreshButton.setAttribute("aria-busy", "true");
    refreshButton.textContent = "查詢中";
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
    } finally {
      if (state.weatherRequest === requestId) {
        refreshButton.disabled = false;
        refreshButton.removeAttribute("aria-busy");
        refreshButton.textContent = "更新";
      }
    }
  }

  function parseLegMinutes(value) {
    if (typeof value === "number" && Number.isFinite(value)) return value;
    const nums = String(value || "").match(/\d+(?:\.\d+)?/g);
    if (!nums || !nums.length) return null;
    return nums.map(Number).reduce((a, b) => a + b, 0) / nums.length;
  }

  function formatTotalMinutes(total) {
    const rounded = Math.round(total);
    if (rounded < 60) return `約 ${rounded} 分`;
    const h = Math.floor(rounded / 60);
    const m = rounded % 60;
    return m ? `約 ${h} 小時 ${m} 分` : `約 ${h} 小時`;
  }

  function renderRoute(day) {
    const route = day.route;
    $("#route-title").textContent = `${day.label} 路段規劃`;
    $("#route-source").textContent = route ? route.source : "本日無自駕路線資料";
    const totalsEl = $("#route-totals");
    if (totalsEl) {
      const legs = route?.legs || [];
      let kmTotal = 0;
      let minTotal = 0;
      let hasKm = false;
      let hasMin = false;
      legs.forEach((leg) => {
        if (typeof leg.distanceKm === "number" && Number.isFinite(leg.distanceKm)) { kmTotal += leg.distanceKm; hasKm = true; }
        const m = parseLegMinutes(leg.minutes);
        if (m !== null) { minTotal += m; hasMin = true; }
      });
      const parts = [];
      if (hasKm) parts.push(`約 ${Math.round(kmTotal)} km`);
      if (hasMin) parts.push(formatTotalMinutes(minTotal));
      if (parts.length) {
        totalsEl.textContent = `本日自駕總計：${parts.join(" · ")}`;
        totalsEl.hidden = false;
      } else {
        totalsEl.hidden = true;
      }
    }
    $("#route-list").innerHTML = route ? route.legs.map((leg, index) => {
      const stops = route.stops || [];
      const stopById = new Map(stops.map((stop) => [stop.id, stop]));
      const subset = leg.stopIds
        ? leg.stopIds.map((id) => stopById.get(id)).filter(Boolean)
        : (stops[index] && stops[index + 1] ? stops.slice(index, index + 2) : stops);
      const from = leg.from || subset[0]?.label || stops[index]?.label || "起點";
      const to = leg.to || subset[subset.length - 1]?.label || stops[index + 1]?.label || "目的地";
      const distance = leg.distanceKm === null || leg.distanceKm === undefined ? "距離未提供" : `${leg.distanceKm} km`;
      const minutes = leg.minutes === null || leg.minutes === undefined
        ? "時間未提供"
        : (typeof leg.minutes === "string" && leg.minutes.trim().startsWith("約") ? `${leg.minutes.trim()} 分鐘` : `約 ${leg.minutes} 分鐘`);
      const openLabel = leg.openLabel || (route.routeType === "mixed" || route.navigationMode === "taxi" ? "開啟 Google Maps 路線參考" : "開啟此段導航");
      const routeLink = subset.length >= 2 && leg.navigation !== false
        ? `<a class="route-open" href="${escapeHtml(googleMapsUrl(subset, leg.navigationMode || leg.mode || route.navigationMode || "driving"))}" target="_blank" rel="noopener">${escapeHtml(openLabel)}</a>`
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

  function renderRestaurantOption(option, index) {
    const unavailable = option.status === "unavailable";
    const mapHref = option.mapUrl || googlePlaceUrl({ query: option.query });
    const highlights = Array.isArray(option.highlights) && option.highlights.length
      ? `<ul class="restaurant-highlights">${option.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : "";
    return `
      <details class="restaurant-option${unavailable ? " is-unavailable" : ""}"${index === 0 && !unavailable ? " open" : ""}>
        <summary class="restaurant-summary">
          <span class="restaurant-rank${unavailable ? " is-warning" : ""}">${escapeHtml(option.rank || "備選")}</span>
          <span class="restaurant-summary-copy">
            <strong>${escapeHtml(option.name)}</strong>
            <span>${escapeHtml(option.dietary || "飲食方向未註記")} · ${escapeHtml(option.rating || "—")}</span>
            ${option.phone ? `<span class="restaurant-summary-phone">☎ ${escapeHtml(option.phone)}</span>` : ""}
          </span>
          <svg class="restaurant-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
        </summary>
        <div class="restaurant-option-body">
          <div class="restaurant-facts">
            <div><span>飲食方向</span><strong>${escapeHtml(option.dietary || "未註記")}</strong></div>
            <div><span>營業／適配</span><strong>${escapeHtml(option.hours || "出發前再確認")}</strong></div>
            <div><span>地址</span><strong>${escapeHtml(option.address || "地址請見 Google Maps")}</strong></div>
          </div>
          <p class="restaurant-detail">${escapeHtml(option.detail || "")}</p>
          ${highlights}
          <p class="restaurant-caution"><strong>注意</strong>${escapeHtml(option.caution || "出發前再次確認營業與素食條件。")}</p>
          <div class="restaurant-actions">
            ${option.website ? `<a class="restaurant-link" href="${escapeHtml(option.website)}" target="_blank" rel="noopener"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5m0-5-8 8" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>${escapeHtml(option.websiteLabel || "官方網站")}</a>` : ""}
            ${option.phone ? `<a class="restaurant-link" href="tel:${escapeHtml(option.phone)}" aria-label="撥打 ${escapeHtml(option.name)} 電話"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.7 4.5 5.4 5.8a2 2 0 0 0-.9 2.4c1.7 5.3 5.9 9.5 11.2 11.2a2 2 0 0 0 2.4-.9l1.3-2.3-3.6-2.4-1.5 1.5a13.2 13.2 0 0 1-5.7-5.7l1.5-1.5-2.4-3.6Z" /></svg>電話</a>` : ""}
            ${option.instagram ? `<a class="restaurant-link" href="${escapeHtml(option.instagram)}" target="_blank" rel="noopener"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.6" cy="7.4" r="1.1" /></svg>IG</a>` : ""}
            <a class="restaurant-link restaurant-link-map" href="${escapeHtml(mapHref)}" target="_blank" rel="noopener"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>Google Maps</a>
          </div>
        </div>
      </details>
    `;
  }

  function renderRestaurantPlan(day) {
    const root = $("#restaurant-plan");
    if (!root) return;
    const guide = restaurantGuide.days?.[day.id];
    if (!guide?.meals?.length) {
      root.innerHTML = `
        <div class="restaurant-empty">
          <strong>本日沒有另外安排餐廳</strong>
          <p>請依時間軸處理抵達、早餐或交通中的用餐需求。</p>
        </div>
      `;
      return;
    }
    root.innerHTML = guide.meals.map((meal) => `
      <article class="meal-card">
        <div class="meal-card-header">
          <div>
            <span class="meal-kicker">${escapeHtml(meal.label)} · ${escapeHtml(meal.time)}</span>
            <h3>${escapeHtml(meal.location)}</h3>
          </div>
          <span class="meal-fit">${escapeHtml(meal.fit)}</span>
        </div>
        <p class="meal-strategy"><strong>安排建議</strong>${escapeHtml(meal.strategy)}</p>
        <div class="restaurant-options">${meal.options.map((option, index) => renderRestaurantOption(option, index)).join("")}</div>
      </article>
    `).join("");
  }

  function dietaryRulesText(rules = restaurantGuide.meta?.dietaryRules || []) {
    return rules.map((rule) => `${rule.title}\n${rule.japanese.join("\n")}`).join("\n\n");
  }

  async function copyText(text, successMessage, failureMessage) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMessage, 2600);
    } catch (error) {
      showToast(failureMessage, 3600);
    }
  }

  function renderDietaryRules() {
    const root = $("#dietary-rules-grid");
    const rules = restaurantGuide.meta?.dietaryRules || [];
    if (!root) return;
    root.innerHTML = rules.map((rule, index) => `
      <article class="dietary-rule-card">
        <div class="dietary-rule-top">
          <div>
            <span class="dietary-rule-number">0${index + 1}</span>
            <h3>${escapeHtml(rule.title)}</h3>
          </div>
          <button class="copy-rule-button" type="button" data-copy-rule="${escapeHtml(rule.id)}" aria-label="複製${escapeHtml(rule.title)}日文"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="12" rx="2" /><path d="M5 16V6a2 2 0 0 1 2-2h8" /></svg><span>複製</span></button>
        </div>
        <p class="dietary-rule-hint">${escapeHtml(rule.hint)}</p>
        <div class="dietary-rule-japanese">${rule.japanese.map((line) => `<p lang="ja">${escapeHtml(line)}</p>`).join("")}</div>
      </article>
    `).join("");
    $$('[data-copy-rule]').forEach((button) => {
      button.addEventListener("click", () => {
        const rule = rules.find((item) => item.id === button.dataset.copyRule);
        if (rule) copyText(rule.japanese.join("\n"), `已複製「${rule.title}」日文。`, "無法複製，請長按選取文字。");
      });
    });
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
      const approximate = Boolean(stop.coordinateNote);
      return `
        <li class="map-stop-card${located ? "" : " is-unlocated"}${approximate ? " is-approximate" : ""}" id="${escapeHtml(cardId)}" tabindex="0" data-map-stop-index="${index}">
          <span class="map-stop-number" aria-hidden="true">${index + 1}</span>
          <span class="map-stop-thumb" aria-hidden="true">${escapeHtml(mapStopBadge(stop))}</span>
          <span class="map-stop-copy">
            ${time ? `<span class="map-stop-time">${escapeHtml(time)}</span>` : ""}
            <strong>${escapeHtml(stop.label)}</strong>
            <span class="map-stop-status">${located ? (approximate ? "OSM 區域錨點" : "已標在地圖") : "無地圖座標"}</span>
          </span>
          <a class="map-stop-link" href="${escapeHtml(googlePlaceUrl(stop))}" target="_blank" rel="noopener" aria-label="在 Google Maps 開啟 ${escapeHtml(stop.label)}"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5m0-5-8 8" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg></a>
        </li>
      `;
    }).join("");
  }

  function renderInteractiveMapForDay(day) {
    const mapRoot = $("#map");
    mapRoot.setAttribute("aria-busy", "true");
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
          <p class="map-provider-note">底圖 © OpenStreetMap contributors · 實線為自駕示意、虛線為步行／轉乘示意；導航請開 Google Maps</p>
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
      mapRoot.setAttribute("aria-busy", "false");
      return;
    }
    if (!locatedStops.length) {
      leafletRoot.innerHTML = `
        <div class="map-engine-fallback">
          <strong>本日尚無可繪製的地圖座標</strong>
          <p>請使用右側景點卡片開啟 Google Maps；行程資料與路段摘要仍可查看。</p>
        </div>
      `;
      mapRoot.setAttribute("aria-busy", "false");
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
      return {
        id: leg.id || `L${index + 1}`,
        stops: segmentStops,
        mapLine: leg.mapLine !== false,
        mode: leg.mode || leg.navigationMode || route?.navigationMode || "driving"
      };
    }).filter((segment) => segment.stops.length >= 2);
    if (!segments.length && !(route?.legs || []).length && locatedStops.length >= 2) {
      segments.push({ id: "route", stops: locatedStops, mapLine: true, mode: route?.navigationMode || "driving" });
    }

    const allPoints = locatedStops.map((stop) => [Number(stop.lat), Number(stop.lng)]);
    segments.filter((segment) => segment.mapLine).forEach((segment, segmentIndex) => {
      const points = segment.stops.map((stop) => [Number(stop.lat), Number(stop.lng)]);
      const transferMode = ["walking", "transit", "rail", "bus", "taxi"].includes(segment.mode);
      window.L.polyline(points, {
        color: transferMode ? "#ffbb66" : "#79e6d4",
        weight: 5,
        opacity: 0.88,
        lineCap: "round",
        lineJoin: "round",
        dashArray: transferMode ? "8 8" : null
      }).addTo(leafletMap).bindTooltip(`${segment.id} · 行程順序示意`, { sticky: true });
    });

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
    mapRoot.setAttribute("aria-busy", "false");
  }

  function focusMapStop(cardId, marker) {
    $$(".map-stop-card.is-active").forEach((card) => card.classList.remove("is-active"));
    const card = document.getElementById(cardId);
    card?.classList.add("is-active");
    card?.scrollIntoView({ behavior: scrollBehavior(), block: "nearest" });
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

  /* ================= v16 新增：行前資訊 / 訂位 / 附錄 / 記帳 / 筆記 ================= */

  const guideExtras = window.GUIDE_EXTRAS || {};

  function extRows(rows) {
    if (!Array.isArray(rows) || !rows.length) return "";
    return `<dl class="ext-table">${rows.map((row) => `
      <div class="ext-row"><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)}</dd></div>`).join("")}</dl>`;
  }

  function extList(items) {
    if (!Array.isArray(items) || !items.length) return "";
    return `<ul class="ext-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function extParagraphs(text) {
    return String(text || "").split("\n").filter(Boolean)
      .map((line) => `<p>${escapeHtml(line)}</p>`).join("");
  }

  /* ---- 出發前核實勾選（IndexedDB settings.precheck） ---- */
  const precheckState = { checked: {} };

  // 穩定鍵：用項目文字做 slug，避免陣列增刪造成舊存檔錯位
  function precheckSlug(text) {
    const slug = String(text || "").replace(/[^\u4e00-\u9fa5\uf900-\ufa2da-zA-Z0-9]+/g, "").slice(0, 24);
    return slug || "item";
  }

  async function loadPrecheck() {
    try {
      const saved = await window.DB.getSetting("precheck");
      precheckState.checked = (saved && typeof saved === "object") ? saved : {};
    } catch (error) {
      precheckState.checked = {};
    }
    paintPrecheck();
  }

  async function savePrecheck() {
    try {
      await window.DB.setSetting("precheck", precheckState.checked);
    } catch (error) { /* 離線儲存失敗時僅本次會話有效 */ }
  }

  function paintPrecheck() {
    document.querySelectorAll("[data-precheck]").forEach((box) => {
      const checked = !!precheckState.checked[box.dataset.precheck];
      box.checked = checked;
      box.closest(".precheck-row")?.classList.toggle("is-done", checked);
    });
    updatePrecheckCounts();
  }

  function updatePrecheckCounts() {
    document.querySelectorAll("[data-precheck-count]").forEach((el) => {
      const prefix = el.dataset.precheckCount;
      const boxes = document.querySelectorAll(`[data-precheck^="${prefix}-"]`);
      const done = Array.from(boxes).filter((b) => b.checked).length;
      el.textContent = boxes.length ? `${done}／${boxes.length} 已確認` : "";
    });
  }

  async function clearPrecheckPrefix(prefix) {
    Object.keys(precheckState.checked).forEach((key) => {
      if (key.startsWith(`${prefix}-`)) delete precheckState.checked[key];
    });
    await savePrecheck();
    paintPrecheck();
  }

  function renderPrecheckCard({ title, items, prefix, resetId, footer }) {
    const rows = items.map((item) => `
      <li><label class="precheck-row">
        <input type="checkbox" data-precheck="${escapeHtml(item.key)}" aria-label="${escapeHtml(item.title)}">
        <span class="precheck-text"><strong>${escapeHtml(item.title)}</strong>${item.note ? `<span class="precheck-note">${escapeHtml(item.note)}</span>` : ""}</span>
      </label></li>`).join("");
    return `<article class="ext-panel">
      <div class="precheck-head"><h3 style="margin:0">${escapeHtml(title)}</h3><span class="precheck-count" data-precheck-count="${prefix}"></span></div>
      <ul class="precheck-list">${rows}</ul>
      <div class="precheck-head" style="margin-top:0.55rem"><span></span><button class="text-button" id="${resetId}" type="button">重設勾選</button></div>
      ${footer || ""}
    </article>`;
  }

  function renderQuickinfo() {
    const root = $("#quickinfo-content");
    if (!root) return;
    const qi = guideExtras.quickinfo || {};
    const flightCards = (qi.flights || []).map((f) => `
      <div class="ext-card">
        <h4>${escapeHtml(f.team)}</h4>
        ${extRows([{ label: "去程", value: f.go }, { label: "回程", value: f.back }])}
        ${f.note ? `<p class="ext-note">${escapeHtml(f.note)}</p>` : ""}
      </div>`).join("");
    const lodgingSummary = [
      "Day0｜Y's Inn 那覇小祿駅前",
      "Day1–2｜阿拉馬海納（朝食付）",
      "Day3｜La'gent 北谷（現場支付 ¥43,596）",
      "Day4–5｜HOTEL ANTEROOM 那霸"
    ].map((line) => {
      const [day, name] = line.split("｜");
      return { label: day, value: name };
    });
    const rentalSummary = [
      "OTS 臨空豐崎營業所（豐見城市豐崎3-37，098-856-8877）",
      "取車 Day1 11:40｜還車 Day5 08:00–09:00",
      "兩台車分別辦理（OTS1504557／OTS1501685），QR 碼截圖各自存好"
    ];
    const appendixLink = (tabId, label) =>
      `<p class="ext-note"><a href="#appendix" data-goto-appendix="${tabId}">詳細請見附錄 → ${escapeHtml(label)}</a></p>`;
    const drivingItems = (qi.drivingDocs || []).map((d) => ({ title: d.doc, note: d.note, key: `dd-${precheckSlug(d.doc)}` }));
    const checklistItems = (qi.checklist || []).map((c) => ({
      title: `${c.when}｜${c.item}${c.warn ? " ⚠" : ""}`,
      note: c.note,
      key: `cl-${precheckSlug(c.item)}`
    }));
    const budgetCards = (qi.budget || []).map((b) => `
      <div class="ext-card">
        <h4>${escapeHtml(b.item)}</h4>
        ${extRows([{ label: "價格", value: b.price }])}
        ${b.note ? `<p class="ext-note">${escapeHtml(b.note)}</p>` : ""}
      </div>`).join("");
    const cards = [
      { title: "航班", body: flightCards },
      { title: "住宿", body: `${extRows(lodgingSummary)}${appendixLink("lodging", "行前查核")}` },
      { title: "租車", body: `<ul class="ext-list">${rentalSummary.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>${appendixLink("rental", "租車")}` },
      { title: "預算", body: `${budgetCards}${qi.budgetNote ? `<p class="ext-note">${escapeHtml(qi.budgetNote)}</p>` : ""}` }
    ].filter((card) => card.body);
    root.innerHTML = `<div class="ext-cards">${cards.map((card) => `
      <article class="ext-panel"><h3>${escapeHtml(card.title)}</h3>${card.body}</article>`).join("")}
      ${renderPrecheckCard({ title: "駕駛文件", items: drivingItems, prefix: "dd", resetId: "precheck-reset-driving", footer: appendixLink("driving", "駕駛文件") })}
      ${renderPrecheckCard({ title: "出發前行李／文件清單", items: checklistItems, prefix: "cl", resetId: "precheck-reset-checklist" })}
    </div>`;
    root.querySelectorAll("[data-precheck]").forEach((box) => {
      box.addEventListener("change", async () => {
        if (box.checked) precheckState.checked[box.dataset.precheck] = true;
        else delete precheckState.checked[box.dataset.precheck];
        box.closest(".precheck-row")?.classList.toggle("is-done", box.checked);
        await savePrecheck();
        updatePrecheckCounts();
      });
    });
    armTwoStageReset($("#precheck-reset-driving"), () => clearPrecheckPrefix("dd"), "駕駛文件勾選已重設。");
    armTwoStageReset($("#precheck-reset-checklist"), () => clearPrecheckPrefix("cl"), "行李／文件清單勾選已重設。");
    loadPrecheck();
  }

  function renderBooking() {
    const root = $("#booking-content");
    if (!root) return;
    const booking = guideExtras.booking || {};
    const priorityRows = (booking.priority || []).map((text, index) => `
      <div class="ext-row"><dt><span class="priority-number">${index + 1}</span></dt><dd>${escapeHtml(text)}</dd></div>`).join("");
    root.innerHTML = `
      <article class="ext-panel">
        <h3>訂位優先清單（出發前 1–2 週）</h3>
        <dl class="ext-table">${priorityRows}</dl>
        <p class="ext-note">點餐四句日文請見「<a href="#food-safety">餐廳</a>」分頁。</p>
      </article>`;
  }

  const APPENDIX_TABS = [
    { id: "facilities", label: "設施" },
    { id: "rental", label: "租車" },
    { id: "driving", label: "駕駛文件" },
    { id: "lodging", label: "行前查核" },
    { id: "rain", label: "雨天備案" },
    { id: "lingerie", label: "內衣店" },
    { id: "plush", label: "娃娃機" }
  ];

  function renderAppendixTabContent(tabId) {
    const appendix = guideExtras.appendix || {};
    if (tabId === "facilities") {
      const facilities = appendix.facilities || [];
      const rows = facilities.map((f) => ({
        label: f.name,
        value: [f.info, f.link].filter(Boolean).join("｜")
      }));
      return `<article class="ext-panel"><h3>設施</h3>
        ${quickBrief(`景點、商場、停車場共 ${facilities.length} 處營業資訊；臨時休業請出發前再確認。`)}
        ${extRows(rows)}</article>`;
    }
    if (tabId === "rental") {
      const cards = (appendix.rentalCars || []).map((item) => `
        <div class="ext-card">
          <h4>${escapeHtml(item.car)}</h4>
          ${extRows([{ label: "預約號碼", value: item.bookingNo }, { label: "會員編號", value: item.memberNo }].filter((r) => r.value))}
          ${item.note ? `<p class="ext-note">${escapeHtml(item.note)}</p>` : ""}
        </div>`).join("");
      return `<article class="ext-panel"><h3>租車</h3>
        ${quickBrief("OTS 臨空豐崎營業所（豐見城市豐崎3-37，098-856-8877）；取車 Day1 11:40、還車 Day5 08:00–09:00；兩台車分別辦理，QR 碼截圖各自存好。")}
        ${foldable("完整預約資訊", cards)}</article>`;
    }
    if (tabId === "driving") {
      const items = (appendix.drivingDocs || []).map((d) =>
        `<li${d.warn ? ' class="is-warn"' : ""}><strong>${escapeHtml(d.doc)}</strong>：${escapeHtml(d.note)}</li>`).join("");
      return `<article class="ext-panel"><h3>駕駛文件</h3>
        ${quickBrief("護照＋台灣駕照正本＋日文譯本，每位駕駛各一套；台灣國際駕照在日本不適用；譯本規費 NT$100，建議出發前 2 週辦理。")}
        <ul class="ext-list">${items}</ul></article>`;
    }
    if (tabId === "lodging") {
      const rows = (appendix.lodgingList || []).map((l) => ({
        label: `${l.day} · ${l.name}`,
        value: [l.address, l.status].filter(Boolean).join("｜")
      }));
      return `<article class="ext-panel"><h3>住宿行前查核</h3>
        ${quickBrief("4 間住宿已訂：Day0 小祿、Day1–2 本部、Day3 北谷、Day4–5 那霸。")}
        ${extRows(rows)}</article>`;
    }
    const special = { rain: guideExtras.appendixRain, lingerie: guideExtras.appendixLingerie, plush: guideExtras.appendixPlush }[tabId];
    if (!special) return "";
    const briefs = {
      rain: "12 月那霸月雨量約 100mm，6 天行程遇到 1–2 天下雨很正常；折疊傘 8 人份先在台灣買好帶去。",
      lingerie: "PEACH JOHN、aimerfeel、AMO'S STYLE 在浦添 PARCO CITY／那霸 Main Place 有門市；AMPHI、Salute 建議官網購買。",
      plush: "全沖繩 10 處夾娃娃機／扭蛋點；國際通、美國村、RYCOM 最集中，詳見下方條列。"
    };
    let bodyHtml = "";
    if (tabId === "rain") {
      const alt = (special.sections || []).find((section) => section.heading.includes("替代"));
      bodyHtml = alt ? foldable("各日雨天替代方案", bodyList(alt.body)) : "";
    } else {
      bodyHtml = (special.sections || []).map((section) => `
        <h4 class="ext-subheading">${escapeHtml(section.heading)}</h4>${bodyList(section.body)}`).join("");
    }
    return `<article class="ext-panel"><h3>${escapeHtml(special.title || "")}</h3>
      ${quickBrief(briefs[tabId] || "")}${bodyHtml}
    </article>`;
  }

  function renderAppendix() {
    const tabsRoot = $("#appendix-tabs");
    const contentRoot = $("#appendix-content");
    if (!tabsRoot || !contentRoot) return;
    tabsRoot.innerHTML = APPENDIX_TABS.map((tab, index) => `
      <button class="appendix-tab${index === 0 ? " is-active" : ""}" type="button" role="tab"
        aria-selected="${index === 0}" data-appendix-tab="${tab.id}">${escapeHtml(tab.label)}</button>`).join("");
    const select = (tabId) => {
      tabsRoot.querySelectorAll("[data-appendix-tab]").forEach((button) => {
        const active = button.dataset.appendixTab === tabId;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });
      contentRoot.innerHTML = renderAppendixTabContent(tabId);
    };
    tabsRoot.querySelectorAll("[data-appendix-tab]").forEach((button) => {
      button.addEventListener("click", () => select(button.dataset.appendixTab));
    });
    select(APPENDIX_TABS[0].id);
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-goto-appendix]");
    if (!link) return;
    const tabButton = document.querySelector(`#appendix-tabs [data-appendix-tab="${link.dataset.gotoAppendix}"]`);
    if (tabButton) tabButton.click();
  });

  /* ---- 記帳 ---- */
  const expenseState = { rate: null, items: [], resetArmed: false, resetTimer: null };

  function fmtNum(n) {
    return Number(n).toLocaleString("zh-TW");
  }

  async function loadExpenseRate() {
    try {
      const value = await window.DB.getSetting("fxRate");
      expenseState.rate = typeof value === "number" && value > 0 ? value : null;
    } catch (error) {
      expenseState.rate = null;
    }
  }

  function expenseFxNote() {
    if (expenseState.rate) return `1 日圓 ≒ NT$${expenseState.rate}`;
    return "請先設定匯率";
  }

  function renderExpenseApp() {
    const root = $("#expense-app");
    if (!root) return;
    const totals = expenseState.items.reduce((acc, item) => acc + (Number(item.jpy) || 0), 0);
    const today = new Date().toISOString().slice(0, 10);
    const rows = [...expenseState.items].reverse().map((item) => {
      const twd = expenseState.rate ? Math.round(Number(item.jpy) * expenseState.rate) : null;
      return `<li class="expense-row">
        <div class="expense-main">
          <strong>${escapeHtml(item.item || "（未命名）")}</strong>
          <span class="expense-meta">${escapeHtml(item.date || "")}${item.payer ? ` · ${escapeHtml(item.payer)}` : ""}</span>
          ${item.note ? `<span class="expense-note">${escapeHtml(item.note)}</span>` : ""}
        </div>
        <div class="expense-amount">¥${fmtNum(item.jpy)}${twd !== null ? `<small>≒ NT$${fmtNum(twd)}</small>` : ""}</div>
        <button class="danger-link" type="button" data-delete-expense="${item.id}">刪除</button>
      </li>`;
    }).join("");
    root.innerHTML = `
      <div class="expense-rate panel">
        <label for="fx-rate-input"><strong>匯率設定</strong><span>1 日圓 = ? 新台幣（例如 0.21）</span></label>
        <div class="expense-rate-row">
          <input id="fx-rate-input" type="number" step="0.0001" min="0" inputmode="decimal" placeholder="0.21"
            value="${expenseState.rate ? escapeHtml(String(expenseState.rate)) : ""}" />
          <button class="button button-secondary" id="fx-rate-save" type="button">儲存</button>
        </div>
        <p class="ext-note">${expenseFxNote()}</p>
      </div>
      <form class="expense-form panel" id="expense-form">
        <div class="expense-grid">
          <label>日期<input type="date" name="date" value="${today}" required /></label>
          <label>項目<input type="text" name="item" placeholder="例如：晚餐" required /></label>
          <label>金額（日圓）<input type="number" name="jpy" min="0" step="1" inputmode="numeric" placeholder="0" required /></label>
          <label>付款人<input type="text" name="payer" placeholder="例如：爸爸" /></label>
        </div>
        <label class="expense-note-label">備註<input type="text" name="note" placeholder="選填" /></label>
        <button class="button button-primary" type="submit">新增支出</button>
      </form>
      <div class="expense-totals panel">
        <div><span>總計（日圓）</span><strong>¥${fmtNum(totals)}</strong></div>
        <div><span>總計（台幣）</span><strong>${expenseState.rate ? `NT$${fmtNum(Math.round(totals * expenseState.rate))}` : "請先設定匯率"}</strong></div>
      </div>
      <ul class="expense-list">${rows || `<li class="ext-empty">尚無支出紀錄</li>`}</ul>
      <button class="danger-button" id="expense-reset" type="button">${expenseState.resetArmed ? "再次點我確認清除所有記帳資料" : "清除所有記帳資料"}</button>`;
    $("#fx-rate-save").addEventListener("click", async () => {
      const value = Number($("#fx-rate-input").value);
      if (!value || value <= 0) { showToast("請輸入大於 0 的匯率。", 2600); return; }
      try {
        await window.DB.setSetting("fxRate", value);
        expenseState.rate = value;
        renderExpenseApp();
        showToast("匯率已儲存。", 2200);
      } catch (error) { showToast("匯率儲存失敗。", 2600); }
    });
    $("#expense-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const entry = {
        date: form.date.value,
        item: form.item.value.trim(),
        jpy: Number(form.jpy.value),
        payer: form.payer.value.trim(),
        note: form.note.value.trim(),
        createdAt: new Date().toISOString()
      };
      try {
        await window.DB.addExpense(entry);
        await loadExpenses();
        showToast("已新增支出。", 2200);
      } catch (error) { showToast("新增失敗。", 2600); }
    });
    root.querySelectorAll("[data-delete-expense]").forEach((button) => {
      button.addEventListener("click", async () => {
        try {
          await window.DB.deleteExpense(Number(button.dataset.deleteExpense));
          await loadExpenses();
        } catch (error) { showToast("刪除失敗。", 2600); }
      });
    });
    armTwoStageReset($("#expense-reset"), () => window.DB.clearExpenses().then(loadExpenses), "記帳資料已清除。");
  }

  async function loadExpenses() {
    try {
      expenseState.items = await window.DB.getExpenses();
    } catch (error) {
      expenseState.items = [];
    }
    renderExpenseApp();
  }

  /* 兩段式重設：第一次警告，8 秒內第二次才清除 */
  function armTwoStageReset(button, clearFn, doneMessage) {
    if (!button) return;
    const disarm = () => {
      expenseState.resetArmed = false;
      memoState.resetArmed = false;
      window.clearTimeout(button._resetTimer);
      if (button.isConnected) {
        button.textContent = button.dataset.label || "清除";
        button.classList.remove("is-armed");
      }
    };
    button.dataset.label = button.textContent;
    button.addEventListener("click", () => {
      const armed = button.classList.contains("is-armed");
      if (!armed) {
        button.classList.add("is-armed");
        button.textContent = "確定清除？8 秒內再點一次才會刪除";
        button._resetTimer = window.setTimeout(disarm, 8000);
        showToast("再次點擊才會清除，此操作無法復原。", 3200);
        return;
      }
      window.clearTimeout(button._resetTimer);
      clearFn().then(() => {
        disarm();
        showToast(doneMessage, 2600);
      }).catch(() => showToast("清除失敗。", 2600));
    });
  }

  /* ---- 隨手筆記 ---- */
  const memoState = { items: [], resetArmed: false, editingId: null };

  function renderMemoApp() {
    const root = $("#memo-app");
    if (!root) return;
    const cards = [...memoState.items].reverse().map((memo) => {
      const editing = memoState.editingId === memo.id;
      const updated = memo.updatedAt ? new Date(memo.updatedAt) : null;
      return `<li class="memo-card">
        ${editing ? `
          <textarea id="memo-edit-${memo.id}" rows="4">${escapeHtml(memo.text)}</textarea>
          <div class="memo-actions">
            <button class="button button-primary" type="button" data-memo-save="${memo.id}">儲存</button>
            <button class="button button-secondary" type="button" data-memo-cancel="${memo.id}">取消</button>
          </div>` : `
          <p class="memo-text">${escapeHtml(memo.text)}</p>
          <span class="memo-meta">${updated ? `更新於 ${updated.toLocaleString("zh-TW", { timeZone: data.meta.timezone })}` : ""}</span>
          <div class="memo-actions">
            <button class="text-button" type="button" data-memo-edit="${memo.id}">修改</button>
            <button class="danger-link" type="button" data-memo-delete="${memo.id}">刪除</button>
          </div>`}
      </li>`;
    }).join("");
    root.innerHTML = `
      <form class="memo-form panel" id="memo-form">
        <label for="memo-input"><strong>新增筆記</strong></label>
        <textarea id="memo-input" rows="3" placeholder="例如：明天要先去藥局買暈車藥…"></textarea>
        <button class="button button-primary" type="submit">新增</button>
      </form>
      <ul class="memo-list">${cards || `<li class="ext-empty">尚無筆記</li>`}</ul>
      <button class="danger-button" id="memo-reset" type="button">清除所有筆記</button>`;
    $("#memo-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const text = $("#memo-input").value.trim();
      if (!text) { showToast("請先輸入筆記內容。", 2200); return; }
      try {
        await window.DB.addNote({ text, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        await loadMemos();
        showToast("已新增筆記。", 2200);
      } catch (error) { showToast("新增失敗。", 2600); }
    });
    root.querySelectorAll("[data-memo-edit]").forEach((button) => {
      button.addEventListener("click", () => { memoState.editingId = Number(button.dataset.memoEdit); renderMemoApp(); });
    });
    root.querySelectorAll("[data-memo-cancel]").forEach((button) => {
      button.addEventListener("click", () => { memoState.editingId = null; renderMemoApp(); });
    });
    root.querySelectorAll("[data-memo-save]").forEach((button) => {
      button.addEventListener("click", async () => {
        const id = Number(button.dataset.memoSave);
        const text = document.getElementById(`memo-edit-${id}`).value.trim();
        if (!text) { showToast("筆記內容不可空白。", 2200); return; }
        try {
          await window.DB.updateNote(id, { text, updatedAt: new Date().toISOString() });
          memoState.editingId = null;
          await loadMemos();
        } catch (error) { showToast("儲存失敗。", 2600); }
      });
    });
    root.querySelectorAll("[data-memo-delete]").forEach((button) => {
      button.addEventListener("click", async () => {
        try {
          await window.DB.deleteNote(Number(button.dataset.memoDelete));
          await loadMemos();
        } catch (error) { showToast("刪除失敗。", 2600); }
      });
    });
    armTwoStageReset($("#memo-reset"), () => window.DB.clearNotes().then(async () => {
      precheckState.checked = {};
      await savePrecheck();
      paintPrecheck();
      await loadMemos();
    }), "筆記與出發前勾選已清除。");
  }

  async function loadMemos() {
    try {
      memoState.items = await window.DB.getNotes();
    } catch (error) {
      memoState.items = [];
    }
    renderMemoApp();
  }

  async function initV16Features() {
    renderQuickinfo();
    renderBooking();
    renderAppendix();
    try {
      await window.DB.init();
      await loadExpenseRate();
      await loadExpenses();
      await loadMemos();
    } catch (error) {
      showToast("本機資料庫無法使用，記帳與筆記將無法儲存。", 3600);
    }
  }

  function setupFloatingNav() {
    const links = $$(".nav-item");
    const sections = links
      .map((link) => document.getElementById(link.dataset.navTarget))
      .filter(Boolean);
    // #lodging 是 #trip 內的住宿面板，不納入 observer（它永遠被行程包住、用比例比不出「在看住宿」）；
    // 點住宿導覽時改用短暫鎖定來保持高亮。
    const observedSections = sections.filter((section) => section.id !== "lodging");
    let lodgingLockUntil = 0;
    // 使用者手動捲動（滾輪／觸控）就解除住宿高亮鎖定，回到 observer 正常判斷
    ["wheel", "touchmove"].forEach((evt) =>
      window.addEventListener(evt, () => { lodgingLockUntil = 0; }, { passive: true })
    );
    const setActive = (targetId) => {
      links.forEach((link) => {
        const active = link.dataset.navTarget === targetId;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    };
    setActive("trip");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.getElementById(link.dataset.navTarget);
        if (!target) return;
        event.preventDefault();
        const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
        const tabsHeight = document.querySelector(".day-tabs")?.getBoundingClientRect().height || 0;
        const offset = topbarHeight + tabsHeight + 12;
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
        window.scrollTo({ top, behavior: scrollBehavior() });
        history.replaceState(null, "", `#${target.id}`);
        setActive(target.id);
        // 點「住宿」後 3 秒內 observer 不搶高亮，讓使用者停在今晚住這裡面板時維持住宿高亮
        lodgingLockUntil = target.id === "lodging" ? Date.now() + 3000 : 0;
      });
    });
    if (!("IntersectionObserver" in window)) return;
    // 注意：callback 的 entries 只包含「有變化」的項目；用 seen 累積所有已觀察區塊的最新狀態，
    // 否則上一個高亮區塊退出 band、而新區塊沒有跨越 threshold 時，高亮會卡在舊區塊。
    // threshold 含 0，讓很高的區塊（如加了核實勾選後變很高的行前）在 band 內也算可見。
    const seen = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => seen.set(entry.target, entry));
      if (Date.now() < lodgingLockUntil) {
        setActive("lodging");
        return;
      }
      const visible = [...seen.values()]
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.05, 0.25, 0.5] });
    observedSections.forEach((section) => observer.observe(section));
  }

  function init() {
    renderDayTabs();
    renderDay();
    renderDietaryRules();
    registerPwa();
    initV16Features();
    $("#share-button").addEventListener("click", shareTrip);
    $("#install-button").addEventListener("click", installPwa);
    $("#install-footer-button").addEventListener("click", showInstallDialog);
    $("#current-day-button").addEventListener("click", selectToday);
    $("#refresh-weather").addEventListener("click", () => { loadWeather(currentDay()); showToast("正在更新天氣資料…", 1800); });
    $("#show-sources-button").addEventListener("click", () => $("#sources").scrollIntoView({ behavior: "smooth", block: "start" }));
    $("#copy-contacts").addEventListener("click", copyContacts);
    $("#copy-dietary-rules")?.addEventListener("click", () => {
      copyText(dietaryRulesText(), "已複製四句點餐日文。", "無法複製，請長按選取文字。");
    });
    setupFloatingNav();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
