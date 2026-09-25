import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/module",
    name: "module",
    component: () => import("@/views/module/Modules.vue"),
  },
  {
    path: "/note",
    name: "note",
    component: () => import("@/views/note/Notes.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact/Contact.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;