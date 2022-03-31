export default [
  {
    path: "/",
    name: "index",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: {},
    component: () => import("../views/home/home-index.vue"),
  },
  {
    path: "/pano",
    name: "pano",
    meta: {},
    component: () => import("../views/pano/pano-index.vue"),
  },
];
