import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: import("@/pages/MainPage.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import("@/pages/ErrorPage.vue")
    },
  ],
});

export default router;
