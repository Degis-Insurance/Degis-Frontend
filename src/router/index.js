import { createRouter, createWebHashHistory } from "vue-router";

import FunctionLayout from "@/layout/FunctionLayout";
// import Layout from "@/layout/Layout";

import Homepage from "../views/Homepage/Homepage";
import Account from "../views/Account/Account";
import Protection from "../views/Protection/Protection";
import Flight from "../views/Flight/Flight";
import FlightBuy from "../views/Flight/FlightBuy";
import FlightProvide from "../views/Flight/FlightProvide";
import Price from "../views/Price/Price";
import PriceCreate from "../views/Price/PriceCreate";
import PriceBuySell from "../views/Price/PriceBuySell";
import PriceProvide from "../views/Price/PriceProvide";
import Mining from "../views/Mining/Mining";
import Luckybox from "../views/LuckyBox/Luckybox";
import MetaMarket from "../views/MetaMarket/MetaMarket";
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
        path: "/flight-buy",
        name: "flight-buy",
        components: { default: FlightBuy },
      },
      {
        path: "/flight-provide",
        name: "flight-provide",
        components: { default: FlightProvide },
      },
      {
        path: "/price",
        name: "price",
        components: { default: Price },
      },
      {
        path: "/price-create",
        name: "price-create",
        components: { default: PriceCreate },
      },
      {
        path: "/price-buy-sell",
        name: "price-buy-sell",
        components: { default: PriceBuySell },
      },
      {
        path: "/price-provide",
        name: "price-provide",
        components: { default: PriceProvide },
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
        path: "/metamarket",
        name: "metamarket",
        components: { default: MetaMarket },
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
