import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: import("@/pages/MainPage.vue"),
    },
    {
      path: '/about',
      name: "about",
      component: import("@/pages/AboutUsPage.vue"),
    },
    {
      path: '/contact',
      name: "contact",
      component: import("@/pages/ContactPage.vue"),
    },
    {
      path: '/article',
      name: "article",
      component: import("@/pages/PostPage.vue"),
    },
    {
      path: '/sign_in',
      name: "sign_in",
      component: import("@/pages/AuthSignUp.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import("@/pages/ErrorPage.vue")
    },
  ],
});

export default router;
