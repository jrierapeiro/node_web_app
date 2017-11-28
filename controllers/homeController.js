'use strict';
const config = require('config');

const getIndexPage = (req, res, next) => {
  return res.render('index', { model: {version: config.version }});
};

module.exports = { getIndexPage };