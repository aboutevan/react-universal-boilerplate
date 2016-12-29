const path = require('path');
const webpackConfig = require('./tools/webpack.config.js')

// overwrite and extend existing webpack config
// instead of writing duplicate below
webpackConfig.entry = {};
webpackConfig.devtool = 'inline-source-map';
webpackConfig.externals = {
  'cheerio': 'window',
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS', 'Chrome'],
    frameworks: ['jasmine'],
    preprocessors: {
      //run through webpack and sourcemap plugin
      './tools/webpack.test.js': ['webpack', 'sourcemap']
    },
    files: ['./tools/webpack.test.js'],
    reporters: ['dots'],
    webpack: webpackConfig,
    client: {
      captureConsole: true //output to console
    },
    singleRun: true,
    webpackMiddleware: {
      noInfo: true
    },
    browserNoActivityTimeout: 60000
  });
};