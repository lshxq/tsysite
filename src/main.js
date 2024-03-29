import Vue from "vue";

import App from "./App.vue";
import "./assets/main.sass";
import tsy from "tsyvue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import _ from "lodash";
import VueCropper from "vue-cropper";
Vue.use(VueCropper);
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import utils from "@/utils.js";
import Editor from "./components/mavon-editor-wrapper.vue";
import PanoViewer from "./components/pano-viewer/pano-viewer.vue";
import Link from "./components/link.vue";
import ImageCropper from "./components/image-cropper.vue";
Vue.component("image-cropper", ImageCropper);
Vue.component("mavon-editor", mavonEditor);
Vue.component("editor", Editor);

Vue.use(element);
Vue.use(tsy);
Vue.config.productionTip = false;

Vue.component("pano-viewer", PanoViewer);
Vue.component("ll", Link);

import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "HLMbUFR3t3Hu082LfMnf9ZLFR723i99w",
});

Vue.mixin({
  methods: {
    long2datetime(long, pattern = "yyyy-MM-dd hh:mm:ss") {
      return new Date(long).format(pattern);
    },
    upload(file, func = "default", filename, onProgress) {
      const that = this;
      const formData = new FormData();

      formData.append("file", file);
      if (func) {
        formData.append("func", func);
      }
      if (filename || filename === 0) {
        formData.append("id", filename);
      }

      return new Promise((res, rej) => {
        that
          .$axios({
            url: "system/upload",
            method: "POST",
            data: formData,
            onUploadProgress: (e) => {
              if (onProgress) {
                onProgress(e);
              }
            },
          })
          .then((resp) => {
            res(resp);
          })
          .catch((ex) => {
            that.$message.error(`文件 ${func}/${filename} 上传失败`);
            rej(ex);
          });
      });
    },
    getUploadedResource(file) {
      return `/site-upload/${file}`;
    },
    getPublicPath() {
      return '/site'
    },
    getPanoUrl(filename) {
      return `${this.getUploadedResource(`img/pano/${filename}`)}`;
    },
    goback() {
      this.$router.go(-1);
    },
    getCurrentUser() {
      return utils.getCurrentUser();
    },
    $axios(params) {
      const that = this;
      const prom = utils.axios(params);
      prom.catch((ex) => {
        const status = _.get(ex, "response.status");
        if ("401" === `${status}`) {
          that.goto("login", {});
        }
      });
      return prom;
    },
    goto(name, args = {}) {
      const { params, query, winTarget } = args;
      if (!winTarget) {
        this.$router.push({
          name,
          params,
          query,
        });
      } else {
        const route = this.$router.resolve({
          name,
          params,
          query,
        });
        window.open(route.href, winTarget);
      }
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Date.prototype.format = function (fmt = "yyyy-MM-dd hh:mm:ss") {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
