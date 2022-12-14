#!/bin/bash

docker-compose -f ./docker-compose.yml down
docker-compose --env-file ./api/.env.prod up --build 