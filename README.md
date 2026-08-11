# 沖繩家族旅遊 2026｜領隊 PWA

GitHub Pages deployable PWA for the Okinawa family trip. The published static site lives in [`site/`](site/), with Android/iOS installation notes in [`site/README.md`](site/README.md).

The Pages workflow is configured in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). Daily maps use an in-page Leaflet + public OpenStreetMap renderer with no Google Maps API key; each stop and route can hand off to Google Maps externally.

The itinerary is synchronized to the latest 13-page PDF uploaded on 2026-08-11 (SHA-256 `74CAB3CE4E49B266748FBC0F3F01AE88E71F2C40F8B8C982EB9680A8C114E662`). Day 4-5 lodging is Y's Inn Naha Oroku Ekimae, and Day 5 uses taxi from the hotel to iias/DMM; see `site/data/import-findings.json` for the audit record.
