'use strict';

const config = require('config');
const httpStatus = require('http-status');
const util = require('util');
const homeController = require('../controllers/homeController');

module.exports = function (app) {
  app.use('/healthcheck', (req, res) => {
    res.status(httpStatus.OK).send('I am healthy!');
  });

  app.use('/index', homeController.getIndexPage);
  app.use('/error', homeController.forceError);
};
