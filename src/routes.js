import { createRouter, createWebHistory } from "vue-router";
import intro from "./components/intro.vue"
import repos from "./components/repos.vue"

const routes = [
  { path: '/', component: intro},
  { path: '/repositorio', component: repos}
]

const router = createRouter({
  history: createWebHistory(), routes
})

export default router