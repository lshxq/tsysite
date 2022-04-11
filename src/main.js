import Vue from "vue";

import App from "./App.vue";
import "./assets/main.sass";
import tsy from "tsyvue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import _ from 'lodash';

import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import utils from '@/utils.js'

import PanoViewer from "./components/pano-viewer/pano-viewer.vue";

Vue.component('mavon-editor', mavonEditor)
Vue.use(element);
Vue.use(tsy);
Vue.config.productionTip = false;

Vue.component("pano-viewer", PanoViewer);



Vue.mixin({
  methods: {
    goback() {
      this.$router.go(-1)
    },
    getCurrentUser() {
      return utils.getCurrentUser()
    },
    $axios(params) {
      const that = this
      const prom = utils.axios(params)
      prom.catch(ex => {
        const status = _.get(ex, 'response.status')
        if ('401' === `${status}`) {
          that.goto("login", {})
        }
      })
      return prom
    },
    goto(name, args = {}) {
      const { params, query } = args;
      this.$router.push({
        name,
        params,
        query,
      });
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
