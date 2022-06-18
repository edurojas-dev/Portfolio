import { createRouter, createWebHistory } from "vue-router";
const intro = () => import("../components/intro.vue"),
  repos = () => import("../components/repos.vue"),
  routes = [
    { path: "/", name: "home", component: intro },
    { path: "/repositorio", name: "repositorio", component: repos },
  ],
  router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
  });
export default router;
