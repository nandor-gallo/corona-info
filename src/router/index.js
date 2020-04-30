import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stat from "../views/Statistics.vue";
import Test from "../components/Nav.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stats",
    name: "Statistics",
    component: Stat,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
