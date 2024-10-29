#!/bin/bash
echo "Starting containers..."
docker-compose -f /var/www/finma/client/docker-compose.yml up -d --build
