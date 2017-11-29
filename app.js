'use strict';

const config = require('config');
const packageContent = require('./package');
const express = require('express');
const app = express();
const middlewareConfig = require('./middleware/middlewareConfig.js');
const routeConfig = require('./routes/routeConfig');

middlewareConfig(express, app);
routeConfig(app);

config.version = packageContent.version;
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  config.startDate = new Date();  
  /* eslint-disable no-console */
  console.log(`Listening on port ${port} ${config.startDate}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    /* eslint-disable no-console */
    console.log('Closing server connections');
    process.exit(0);
  });
});

process.on('uncaughtException', (err) => {
  /* eslint-disable no-console */
  console.log(`uncaughtException: ${err}`);
  /* eslint-disable no-console */
  console.log(err.stack);
  process.exit(1);
});