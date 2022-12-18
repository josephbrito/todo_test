import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { datas } from "./db";

createApp(App).provide("items", datas).mount("#app");
