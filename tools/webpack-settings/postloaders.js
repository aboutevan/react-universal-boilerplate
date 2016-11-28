'use strict';

const webpack = require('webpack');
const path = require('path');

function getPostloaders (env) {
  let postloaders
  if(env === 'development') {

  } else {

  }

  return postloaders
}

module.exports = getPostloaders