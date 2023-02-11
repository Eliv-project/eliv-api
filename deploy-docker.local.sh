#!/bin/bash

docker compose --env-file ./env/.env.dev -f ./docker-compose.dev.yml down
docker compose --env-file ./env/.env.dev -f ./docker-compose.dev.yml up --build -d