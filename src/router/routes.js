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
    component: () => import("@/views/home/home-index.vue"),
  },
  {
    path: '/login',
    name: 'login',
    meta: {},
    component: () => import("@/views/login/login-index.vue")
  },
  {
    path: '/blog/creation',
    name: 'blog-creation',
    meta: {},
    component: () => import("@/views/blog/creation-index.vue")
  }
];
