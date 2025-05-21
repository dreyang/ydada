import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
