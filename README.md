# Chronometer App âï¸ð¥â²

This project was built with [ReactJS](https://github.com/facebook/create-react-app), [NodeJS](https://nodejs.org/es/), [PostgreSQL](https://www.postgresql.org) and [Docker](https://www.docker.com)

### âï¸ Settings

This project uses the following settings for the database setup:

ð¹ **Name:** development
ð¹ **User:** miyuki
ð¹ **Password:** qwe456
ð¹ **Host:** localhost
ð¹ **Port:** 2345 ð¹

### ð Available Scripts

In the project directory, you can:

1. Run the app, the server and the database in development mode: `sudo docker-compose up`
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
2. Run the tests of the server inside docker: `cd server && npm run test:docker`
3. Run the tests of the server on the local database: `cd server && npm run test:local`
4. Run the tests of the application: `cd app && npm test`
5. Tears down the docker containers: `sudo docker-compose down`


### â¨ Main Viewâ¨
![main view](./mainview.png)