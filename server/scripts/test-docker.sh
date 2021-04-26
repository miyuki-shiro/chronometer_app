#!/bin/bash
set -e

sudo docker-compose -f ../docker-compose.yml --env-file ../.env.test up -d postgres

WAIT_FOR_PG_ISREADY="while ! pg_isready --quiet; do sleep 1; done;"
sudo docker-compose exec postgres bash -c "$WAIT_FOR_PG_ISREADY"

echo "Installing dependencies"
npm install

echo "Running migrations and seeders"
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:all

echo "Running all tests"
jest --testTimeout=10000 --detectOpenHandles --coverage --verbose

echo "Tearing down all containers"
sudo docker-compose down