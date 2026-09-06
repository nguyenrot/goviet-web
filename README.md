# GõViệt — product website

End-user site for the macOS Vietnamese input utility.

- Live: [goviet.kynguyen.cc](https://goviet.kynguyen.cc)
- App source: [nguyenrot/goviet](https://github.com/nguyenrot/goviet)

This repo is the product page, not the app. Vietnamese is the default language (`/`); English lives at `/en`.

```bash
TMPDIR=/tmp npm run dev      # :3021
npm run typecheck
npm run build
```

Latest `.dmg` is resolved server-side from GitHub Releases (`GET /api/release`, 10 minute cache). If GitHub is unreachable, download buttons fall back to `/releases/latest`.
