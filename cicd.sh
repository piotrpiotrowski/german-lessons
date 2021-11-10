#!/bin/bash
set -e

docker stop `docker ps | grep "lessons-of-german" | cut -c1-4` 2> /dev/null 1> /dev/null || echo "German-lessons container was not running"
docker rm $(docker ps -a -q) || echo ""
#npm run testsSingleRun
npm run build
docker build -t german-lessons .
docker run -p80:80 -d --restart=always --name lessons-of-german german-lessons
docker ps
