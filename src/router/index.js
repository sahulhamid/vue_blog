import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthorDetail from "../views/AuthorDetail.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/authordetail/:id",
    name: "AuthorDetail",
    component: AuthorDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
