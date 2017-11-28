'use strict';
const config = require('config');

const getIndexPage = (req, res, next) => {
  return res.render('index', { model: config.version });
};

module.exports = { getIndexPage };