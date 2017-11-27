'use strict';

const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');
const swig = require('swig');
const morgan = require('morgan');


module.exports = function (express, app) {
  app.set('views', path.join(__dirname, '../views'));
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  swig.setDefaults({
    varControls: ['[[', ']]']
  });

  app.use(morgan('dev'));    
  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());  
};
