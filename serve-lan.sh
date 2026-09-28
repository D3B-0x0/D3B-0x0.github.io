#!/usr/bin/env bash
# Serve the built site on the LAN so a phone on the same Wi-Fi can load it.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/dist"
PORT="${1:-4321}"

if [ ! -f "$DIST/index.html" ]; then
  echo "no build at $DIST/index.html - run 'npm run build' first" >&2
  exit 1
fi

pkill -f "http.server $PORT" 2>/dev/null || true
sleep 0.5
cd "$DIST"
setsid python3 -m http.server "$PORT" --bind 0.0.0.0 \
  >/tmp/opencode/http.log 2>&1 </dev/null &
disown || true
sleep 1

LAN_IP="$(ip -4 -o addr show scope global | awk '$2 ~ /^w/ {split($4,a,"/"); print a[1]; exit}')"
echo "listening on 0.0.0.0:$PORT"
echo "  LAN:      http://${LAN_IP}:${PORT}"
echo "  tailscale: http://100.96.83.37:${PORT}"
