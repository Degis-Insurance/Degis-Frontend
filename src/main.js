import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GlobalComponents from "./plugins/globalComponents";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "element-plus/lib/theme-chalk/display.css";
import store from "./store";

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(store);
appInstance.use(GlobalComponents);
appInstance.use(ElementPlus);
appInstance.mount("#app");
