'use strict';

const config = require('config');
const packageContent = require('./package');
config.version = process.env.VERSION;
const express = require('express');
const app = express();
const middlewareConfig = require('./middleware/middlewareConfig.js');
const routeConfig = require('./routes/routeConfig');

middlewareConfig(express, app);
routeConfig(app);

const server = app.listen(config.port, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port ${config.port} ${Date()}`);
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