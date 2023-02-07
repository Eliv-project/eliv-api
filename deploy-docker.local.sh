#!/bin/bash

docker compose --env-file ./api/.env.docker -f ./docker-compose.dev.yml down
docker compose --env-file ./api/.env.docker -f ./docker-compose.dev.yml up --build