import { createRouter, createWebHistory } from "vue-router";
import intro from "../components/intro.vue";
import repos from "../components/repos.vue";

const routes = [
  { path: "/", name: "home", component: intro },
  { path: "/repositorio", name: "repositorio", component: repos },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
