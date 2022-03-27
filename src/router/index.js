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
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    name: "dashboard",
    component: dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { requiresGuest: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let loggedIn = store.getters.loggedIn;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullpath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (loggedIn) {
      next({
        path: "/users",
        query: { redirect: to.fullpath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
