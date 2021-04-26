#!/bin/bash
set -e

export DB_USER=thaimy DB_PASSWORD=qwe456 DB_NAME=test DB_HOST=localhost DB_PORT=5432

echo "Installing dependencies"
npm install

echo "Running migrations and seeders"
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:all

echo "Running all tests"
jest --testTimeout=10000 --detectOpenHandles --coverage --verbose


