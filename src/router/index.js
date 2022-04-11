import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import _ from 'lodash'
import utils from '@/utils.js'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loginNeeded = _.get(to, 'meta.loginNeeded')
  if (loginNeeded) {
    const user = utils.getCurrentUser()
    if (user) {
      next()
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
