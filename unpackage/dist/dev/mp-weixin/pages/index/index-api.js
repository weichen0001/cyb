"use strict";
const utils_http = require("../../utils/http.js");
const test = (query) => {
  return utils_http.apiResquest({
    url: "/api/index/test",
    method: "GET"
  });
};
exports.test = test;
