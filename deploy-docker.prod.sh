#!/bin/bash

docker-compose --env-file ./api/.env.docker -f ./docker-compose.prod.yml down
docker-compose --env-file ./api/.env.docker -f ./docker-compose.prod.yml up --build -d
docker image prune -f