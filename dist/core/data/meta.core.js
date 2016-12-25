"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (path) {

  var data = [{
    path: '/',
    title: "title from index",
    description: "this description is coming from the index page"
  }, {
    path: '/about',
    title: "title from about",
    description: "this description is coming from the about page"
  }, {
    path: '/about',
    title: "title from about",
    description: "this description is coming from the about page"
  }, {
    path: '/about',
    title: "title from about",
    description: "this description is coming from the about page"
  }];

  var pageData = data.filter(function (obj) {
    if (path === obj.path) {
      return obj;
    }
  });

  return pageData;
};