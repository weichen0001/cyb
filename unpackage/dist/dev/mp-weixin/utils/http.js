"use strict";
const common_vendor = require("../common/vendor.js");
const config = require("../config.js");
const apiResquest = (prams) => {
  let headerData = {
    "content-type": "application/json"
  };
  let dataObj = null;
  if (prams.method === "GET") {
    headerData = {
      "content-type": "application/json",
      "token": common_vendor.index.getStorageSync("token")
    };
  } else {
    dataObj = {
      "data": prams.query,
      "token": common_vendor.index.getStorageSync("token")
    };
  }
  return new Promise((resolve, reject) => {
    let url = config.config.base_url + prams.url;
    common_vendor.index.showLoading({
      title: "加载中",
      mask: true
    });
    return common_vendor.index.request({
      url,
      data: dataObj,
      method: prams.method,
      header: headerData,
      success: (res) => {
        console.log(res.data);
        common_vendor.index.hideLoading();
        if (res.data.code !== 200) {
          common_vendor.index.showToast({
            title: "获取数据失败:" + res.data.msg,
            duration: 1e3,
            icon: "none"
          });
          return;
        }
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
        console.log(err);
        common_vendor.index.hideLoading();
      },
      complete: () => {
        console.log("请求完成");
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.apiResquest = apiResquest;
