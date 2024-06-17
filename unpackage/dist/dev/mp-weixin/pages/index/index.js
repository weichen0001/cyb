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
      focusFlag: false,
      inverted: false,
      tags: [
        {
          id: 1,
          name: "不限",
          inverted: true
        },
        {
          id: 2,
          name: "医疗健康",
          inverted: true
        },
        {
          id: 3,
          name: "旅游",
          inverted: true
        },
        {
          id: 2,
          name: "医疗健康",
          inverted: true
        },
        {
          id: 3,
          name: "旅游",
          inverted: true
        },
        {
          id: 2,
          name: "医疗健康",
          inverted: true
        },
        {
          id: 3,
          name: "旅游",
          inverted: true
        },
        {
          id: 2,
          name: "医疗健康",
          inverted: true
        },
        {
          id: 3,
          name: "旅游",
          inverted: true
        },
        {
          id: 2,
          name: "医疗健康",
          inverted: true
        },
        {
          id: 3,
          name: "旅游",
          inverted: true
        },
        {
          id: 2,
          name: "医疗健康",
          inverted: true
        },
        {
          id: 3,
          name: "旅游",
          inverted: true
        }
      ],
      tagRows: [
        [
          {
            id: 1,
            name: "不限",
            inverted: true
          },
          {
            id: 2,
            name: "医疗健康",
            inverted: true
          },
          {
            id: 3,
            name: "旅游",
            inverted: true
          }
        ],
        [
          {
            id: 4,
            name: "音乐/视频/阅读",
            inverted: true
          },
          {
            id: 5,
            name: "在线教育",
            inverted: true
          },
          {
            id: 6,
            name: "社交网络",
            inverted: true
          }
        ],
        [
          {
            id: 7,
            name: "人力资源服务",
            inverted: true
          },
          {
            id: 8,
            name: "企业服务",
            inverted: true
          },
          {
            id: 9,
            name: "计算机软件",
            inverted: true
          }
        ]
      ],
      selectedTags: []
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
  },
  methods: {
    toggle(type) {
      this.$refs.popup.open(type);
    },
    search(res) {
      console.log("搜索");
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
    },
    sxClick(res) {
      console.log("筛选:");
      common_vendor.index.navigateTo({
        url: "/pages/sx/sx"
        // 跳转到搜筛选页
      });
    },
    setInverted(tag) {
      this.tags.forEach((item, index) => {
        if (item.id === tag.id) {
          if (item.inverted) {
            item.inverted = false;
          } else {
            item.inverted = true;
          }
        }
      });
      if (tag.id === 1 && !tag.inverted) {
        this.tags.forEach((item, index) => {
          if (item.id !== 1) {
            item.inverted = true;
          }
        });
      }
      if (tag.id !== 1 && !tag.inverted) {
        this.tags.forEach((item, index) => {
          if (item.id === 1) {
            item.inverted = true;
          }
        });
      }
      this.selectedTags = [];
      this.tags.forEach((item, index) => {
        if (!item.inverted) {
          this.selectedTags.push(item.id);
        }
      });
      console.log("选择行业：" + this.selectedTags);
    },
    setInverted2(tag) {
      this.tagRows.forEach((tags, index) => {
        tags.forEach((item, index2) => {
          if (item.id === tag.id) {
            if (item.inverted) {
              item.inverted = false;
            } else {
              item.inverted = true;
            }
          }
        });
      });
      if (tag.id === 1 && !tag.inverted) {
        this.tagRows.forEach((tags, index) => {
          tags.forEach((item, index2) => {
            if (item.id !== 1) {
              item.inverted = true;
            }
          });
        });
      }
      if (tag.id !== 1 && !tag.inverted) {
        this.tagRows.forEach((tags, index) => {
          tags.forEach((item, index2) => {
            if (item.id === 1) {
              item.inverted = true;
            }
          });
        });
      }
      this.selectedTags = [];
      this.tagRows.forEach((tags, index) => {
        tags.forEach((item, index2) => {
          if (!item.inverted) {
            this.selectedTags.push(item.id);
          }
        });
      });
      console.log("选择行业：" + this.selectedTags);
    }
  },
  onBackPress() {
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_card2 + _easycom_uni_tag2 + _easycom_uni_section2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_card + _easycom_uni_tag + _easycom_uni_section + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "8"
    }),
    b: common_vendor.o(($event) => $options.toggle("top")),
    c: common_vendor.o($options.search),
    d: common_vendor.o($options.blur),
    e: common_vendor.o($options.focus),
    f: common_vendor.o($options.input),
    g: common_vendor.o($options.cancel),
    h: common_vendor.o($options.clear),
    i: common_vendor.o(($event) => $data.searchValue = $event),
    j: common_vendor.p({
      focus: false,
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    k: common_vendor.f($data.array, (elem, k0, i0) => {
      return {
        a: common_vendor.o(_ctx.onClick, elem.id),
        b: "fac62536-2-" + i0,
        c: common_vendor.p({
          title: elem.title,
          ["sub-title"]: elem.name,
          extra: "额外信息",
          thumbnail: $data.avatar
        }),
        d: elem.id
      };
    }),
    l: common_vendor.f($data.tagRows, (row, index, i0) => {
      return {
        a: common_vendor.f(row, (tag, k1, i1) => {
          return {
            a: tag.id,
            b: common_vendor.o(($event) => $options.setInverted2(tag), tag.id),
            c: "fac62536-5-" + i0 + "-" + i1 + ",fac62536-4",
            d: common_vendor.p({
              text: tag.name,
              inverted: tag.inverted
            })
          };
        }),
        b: index
      };
    }),
    m: common_vendor.p({
      title: "行业",
      type: "line",
      padding: true
    }),
    n: _ctx.type === "left" || _ctx.type === "right" ? 1 : "",
    o: common_vendor.sr("popup", "fac62536-3"),
    p: common_vendor.o(_ctx.change),
    q: common_vendor.p({
      ["background-color"]: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/wechat-project/cyb/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
