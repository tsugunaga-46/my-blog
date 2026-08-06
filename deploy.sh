#!/bin/bash
set -e
cd /home/kato/my-blog
echo "== git pull =="
git pull
echo "== docker compose build =="
docker compose build
echo "== migrate =="
docker compose run --rm migrate
echo "== restart app =="
docker compose up -d app
echo "== cleanup old images/build cache =="
docker image prune -af
docker builder prune -af --filter "until=24h"
echo "== done =="
docker compose ps
df -h /
