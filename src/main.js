import Vue from "vue";
import App from "./App.vue";
import "./assets/main.sass";
import tsy from "tsyvue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";

import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import PanoViewer from "./components/pano-viewer/pano-viewer.vue";

Vue.use(mavonEditor);
Vue.use(element);
Vue.use(tsy);
Vue.config.productionTip = false;

Vue.component("pano-viewer", PanoViewer);
Vue.mixin({
  methods: {
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
