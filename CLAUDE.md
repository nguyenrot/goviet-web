# CLAUDE.md

GõViệt product website — `goviet.kynguyen.cc`. Nuxt 4 + Vue 3 + Tailwind v4, SSR, port **3021**, PM2 `goviet-pkn`, VPS `/var/www/goviet`, repo `nguyenrot/goviet-web`.

The macOS app lives in `nguyenrot/goviet`. This site is the end-user product page, not a restyled README.

```bash
TMPDIR=/tmp npm run dev   # :3021
npm run build
npm run typecheck
```

Copy is Vietnamese-first (`/` = vi, `/en` = English). Latest DMG comes from `GET /api/release` (GitHub Releases, 10 min cache, fallback to `/releases/latest`). Do not invent features or security claims; the app is not notarized — keep the Open Anyway step visible.
