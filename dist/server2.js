'use strict';

var path = require('path');
var express = require('express');

module.exports = {
  app: function app() {
    var app = express();
    var indexPath = path.join(__dirname, 'index.html');
    var publicPath = express.static(path.join(__dirname, 'public'));

    app.use('/public', publicPath);
    app.get('/', function (_, res) {
      res.sendFile(indexPath);
    });

    return app;
  }
};