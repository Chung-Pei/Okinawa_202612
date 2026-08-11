# 沖繩家族旅遊 2026｜領隊 PWA

GitHub Pages deployable PWA for the Okinawa family trip. The published static site lives in [`site/`](site/), with Android/iOS installation notes in [`site/README.md`](site/README.md).

The Pages workflow is configured in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). Before publishing, add a referrer-restricted Google Maps API key to `site/config.js`; the app still provides route details and a fallback diagram when the key is blank.
