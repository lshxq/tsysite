import Vue from "vue";
import axios from 'axios';
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

axios.defaults.baseURL='/site-api';

let currentUser = null
Vue.mixin({
  methods: {
    saveUser(user) {
      currentUser = user
    },
    getUser() {
      return currentUser
    },
    $axios(params) {
      return new Promise((res, rej) => {
        axios(params).then(res).catch(ex => {
          const {
            mock
          } = params
          if (mock) {
            const buildResponse = data => {
              return { // 模拟axios返回的数据结构
                data
              }
            }
            
            let mockData = null
            if( typeof mock === 'function') {
              mockData=buildResponse(mock(params))
            } else {
              mockData = buildResponse(mock)
            }
            console.log('调用接口失败，采用mock数据', mockData)
            res(mockData)
          } else {
            rej(ex)
          }
        })
      })
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
