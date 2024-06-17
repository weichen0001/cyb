"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_index_indexApi = require("./index-api.js");
const _sfc_main = {
  data() {
    return {
      searchValue: "",
      avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      array: [
        {
          id: 1,
          name: "小明",
          age: 16
        },
        {
          id: 2,
          name: "大明",
          age: 18
        }
      ],
      focusFlag: false
    };
  },
  onLoad() {
    console.log("页面加载");
    pages_index_indexApi.test().then((res) => {
      console.log(111);
      console.log(res);
      this.array = res.data;
    }).catch((err) => {
    });
  },
  onShow() {
    console.log("页面显示");
    this.focusFlag = false;
  },
  methods: {
    search(res) {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
        icon: "none"
      });
    },
    input(res) {
      console.log("----input:", res);
    },
    clear(res) {
      common_vendor.index.showToast({
        title: "clear事件，清除值为：" + res.value,
        icon: "none"
      });
    },
    blur(res) {
      common_vendor.index.showToast({
        title: "blur事件，输入值为：" + res.value,
        icon: "none"
      });
    },
    focus(e) {
      console.log("跳转:");
    },
    cancel(res) {
      common_vendor.index.showToast({
        title: "点击取消，输入值为：" + res.value,
        icon: "none"
      });
    }
  },
  onBackPress() {
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _component_uni_section + _easycom_uni_card2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "8"
    }),
    b: common_vendor.o($options.search),
    c: common_vendor.o($options.blur),
    d: common_vendor.o($options.focus),
    e: common_vendor.o($options.input),
    f: common_vendor.o($options.cancel),
    g: common_vendor.o($options.clear),
    h: common_vendor.o(($event) => $data.searchValue = $event),
    i: common_vendor.p({
      focus: $data.focusFlag,
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    j: common_vendor.p({
      title: "基本用法",
      type: "line"
    }),
    k: common_vendor.p({
      color: "#999999",
      size: "18",
      type: "home"
    }),
    l: common_vendor.o($options.search),
    m: common_vendor.o($options.cancel),
    n: common_vendor.p({
      placeholder: "自定义searchIcon",
      ["cancel-text"]: "cancel"
    }),
    o: common_vendor.p({
      title: "自定义icon",
      type: "line"
    }),
    p: common_vendor.f($data.array, (elem, k0, i0) => {
      return {
        a: common_vendor.o(_ctx.onClick, elem.id),
        b: "fac62536-7-" + i0 + "," + ("fac62536-6-" + i0),
        c: common_vendor.p({
          title: elem.title,
          ["sub-title"]: elem.name,
          extra: "额外信息",
          thumbnail: $data.avatar
        }),
        d: elem.id,
        e: "fac62536-6-" + i0
      };
    }),
    q: common_vendor.p({
      title: "双标题卡",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/wechat-project/cyb/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
