#!/bin/bash

docker compose --env-file ./env/.env.prod -f ./docker-compose.prod.yml down
docker compose --env-file ./env/.env.prod -f ./docker-compose.prod.yml up --build -d 
