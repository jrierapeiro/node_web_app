'use strict';
const config = require('config');

const getIndexPage = (req, res, next) => {
  return res.render('index', { model: { startDate: config.startDate } });
};

const forceError = (req, res, next) => {
  // Force exit with error to restart with pm2
  process.exit(1);  
};

module.exports = { getIndexPage, forceError };