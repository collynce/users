import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/components/auth/login";
import dashboard from "@/components/dashboard";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: dashboard,
    meta: { requireAuth: true },
  },
  {
    path: "/users",
    name: "dashboard",
    component: dashboard,
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { requireAuth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let loggedIn = store.getters.loggedIn;

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!loggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
