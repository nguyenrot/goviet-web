#!/usr/bin/env bash
# Manual fallback: extract /tmp/goviet-deploy.tar.gz built by GitHub Actions,
# then recreate the PM2 process. Production deploys go through Actions
# (.github/workflows/deploy.yml).
set -euo pipefail

APP_DIR="/var/www/goviet"
PM2_NAME="goviet-pkn"
PORT="3021"
ARCHIVE="${1:-/tmp/goviet-deploy.tar.gz}"

[ -f "$ARCHIVE" ] || { echo "no archive at $ARCHIVE"; exit 1; }

cd "$APP_DIR"
tar xzf "$ARCHIVE"

set -a; [ -f "$APP_DIR/.env" ] && . "$APP_DIR/.env"; set +a

pm2 delete "$PM2_NAME" >/dev/null 2>&1 || true
PORT="$PORT" NITRO_HOST=127.0.0.1 NODE_ENV=production pm2 start .output/server/index.mjs --name "$PM2_NAME" --update-env
pm2 save --force >/dev/null
echo "[goviet] manual deploy done"
