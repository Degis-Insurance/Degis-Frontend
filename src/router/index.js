import { createRouter, createWebHashHistory } from "vue-router";

import FunctionLayout from "@/layout/FunctionLayout";

import Homepage from "../views/Homepage/Homepage";
import Account from "../views/Account/Account";
import Protection from "../views/Protection/Protection";
import Flight from "../views/Flight/Flight";
import Price from "../views/Price/Price";
import Mining from "../views/Mining/Mining";
import Luckybox from "../views/LuckyBox/Luckybox";
import Bazaar from "../views/Bazaar/Bazaar";
import Test from "../views/Test";

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
        path: "/account",
        name: "account",
        components: { default: Account },
      },
      {
        path: "/protection",
        name: "protection",
        components: { default: Protection },
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
        path: "/bazaar",
        name: "bazaar",
        components: { default: Bazaar },
      },
      {
        path: "/test",
        name: "test",
        components: { default: Test },
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
