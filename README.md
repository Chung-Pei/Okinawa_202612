# 沖繩家族旅遊 2026｜領隊 PWA

GitHub Pages deployable PWA for the Okinawa family trip. The published static site lives in [`site/`](site/), with Android/iOS installation notes in [`site/README.md`](site/README.md).

The Pages workflow is configured in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). Daily maps use an in-page Leaflet + public OpenStreetMap renderer with no Google Maps API key; each stop and route can hand off to Google Maps externally.

The itinerary is synchronized to the 14-page `沖繩家族旅遊_領隊版_v4.pdf` received on 2026-08-27 (PDF integrated date 2026-08-24; SHA-256 `BE75EECA26EB08CE9F89679C032C100F9788FF521F51C57AF459DB080A2AA2BB`). Day 0 lodging is Y's Inn Naha Oroku Ekimae; Day 4-5 lodging is HOTEL ANTEROOM NAHA; Day 5 returns the rental car at OTS before walking to adjacent iias/DMM. See `site/data/import-findings.json` and `site/data/claim-ledger.json` for the audit record.
