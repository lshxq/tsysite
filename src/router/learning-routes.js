export default [
  {
    path: "/learning/001",
    name: "learning-001",
    component: () => import("@/views/learning/a001.vue"),
  },
  {
    path: "/learning/002",
    name: "learning-002",
    component: () => import("@/views/learning/a002.vue"),
  },
  {
    path: "/learning/003",
    name: "learning-003",
    component: () => import("@/views/learning/a003.vue"),
  },
  {
    path: "/learning/004",
    name: "learning-004",
    component: () => import("@/views/learning/a004.vue"),
  },
];
