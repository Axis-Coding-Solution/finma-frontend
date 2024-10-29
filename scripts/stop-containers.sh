#!/bin/bash
echo "Stopping running containers..."
docker-compose -f /var/www/finma/client/docker-compose.yml down
