import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//import "./assets/main.css"; //removed due to sidebar

const app = createApp(App);

app.use(createPinia());
app.use(router);

//Root Dom Node
app.mount("#app");
