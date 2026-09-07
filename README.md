# 沖繩家族旅遊 2026｜領隊 PWA

GitHub Pages deployable PWA for the Okinawa family trip. The published static site lives in [`site/`](site/), with Android/iOS installation notes in [`site/README.md`](site/README.md).

The Pages workflow is configured in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). Daily maps use an in-page Leaflet + public OpenStreetMap renderer with no Google Maps API key; each stop and route can hand off to Google Maps externally.

The itinerary is synchronized to the 16-page user-provided `沖繩家族旅遊_領隊版_v7.pdf` checked on 2026-09-07 (SHA-256 `639AA148A50258B8A9CB98437FDE1AAA5BBD0BB3F1C39E5AA1B8CFDAB2E9A12D`). The v7 PDF controls itinerary timing, opening-hour fit and reservation state; `沖繩家族旅行_每日蔬食餐廳完整推薦指南_v3.1_地址官網GoogleMap版.md` supplements restaurant descriptions, addresses, official links and the four Japanese dietary-ordering rules. Known-closed restaurants in a planned meal window are removed from the PWA cards. Day 0 lodging is Y's Inn Naha Oroku Ekimae; Day 4-5 lodging is HOTEL ANTEROOM NAHA; Day 5 returns the rental car at OTS before walking to adjacent iias/DMM. See `site/data/import-findings.json` and `site/data/claim-ledger.json` for the audit record.
