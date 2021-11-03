import { createRouter, createWebHashHistory } from "vue-router";

import FunctionLayout from "@/layout/FunctionLayout";

import Homepage from "../views/Homepage/Homepage";
import Products from "../views/Products/Products";
import Flight from "../views/Flight/Flight";
import Price from "../views/Price/Price";
import Mining from "../views/Mining/Mining";
import Luckybox from "../views/LuckyBox/Luckybox";
import Marketplace from "../views/MarketPlace/Marketplace";

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
        path: "/products",
        name: "products",
        components: { default: Products },
      },
      {
        path: "/flight",
        name: "flight",
        components: { default: Flight },
      },
      {
        path: "/price",
        name: "price",
        components: { default: Price },
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
