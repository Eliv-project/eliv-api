#!/bin/bash

docker-compose --env-file ./api/.env.prod -f ./docker-compose.yml down
docker-compose --env-file ./api/.env.prod up --build