import { createRouter, createWebHashHistory } from "vue-router";

import FunctionLayout from "@/layout/FunctionLayout";

import Homepage from "../views/Homepage.vue";
import Insurance from "../views/Insurance.vue";
import Mining from "../views/Mining.vue";
import Luckybox from "../views/Luckybox.vue";
import Marketplace from "../views/Marketplace.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    components: { default: Homepage },
  },
  {
    path: "/",
    component: FunctionLayout,
    children: [
      {
        path: "/insurance",
        name: "insurance",
        components: { default: Insurance },
      },
      {
        path: "/mining",
        name: "mining",
        components: { default: Mining },
      },
      {
        path: "/luckybox",
        name: "luckybox",
        components: { default: Luckybox },
      },
      {
        path: "/marketplace",
        name: "marketplace",
        components: { default: Marketplace },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
