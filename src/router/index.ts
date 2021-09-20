import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from "../views/home.vue";
import resources from "../views/resources.vue";
import works from "../views/works.vue"
import about from "../views/about.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/resources",
    name: "resources",
    component: resources,
  },
  {
    path: "/works",
    name: "works",
    component: works,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
