#!/usr/bin/env bash
# Serve the built site (dist/) detached, so the calling shell never waits.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/dist"

if [ ! -f "$DIST/index.html" ]; then
  echo "no build found at $DIST/index.html - run 'npm run build' first" >&2
  exit 1
fi

pkill -f "http.server 4321" 2>/dev/null || true
sleep 0.5
cd "$DIST"
setsid python3 -m http.server 4321 --bind 127.0.0.1 \
  >/tmp/opencode/http.log 2>&1 </dev/null &
disown || true
sleep 1
echo "serving $DIST on http://127.0.0.1:4321"
