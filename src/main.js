//main.js - initialise this root component into a element on your page.
//plugins and third-party components for my app.

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue"; //  App.vue <div class="app">
import router from "./router";

//import "./assets/main.css"; //removed due to sidebar
//items you want exported out of the module
const app = createApp(App);

/*
//app.component method - make components avail globally
app.component(
  'MyComponent', // the registered name
                // the implementation
  {
                //insert here
  }
)
*/

app.use(createPinia());
app.use(router);

//render application instance - Root Dom Node
//We can use actual DOM element or a selector string
app.mount("#app");
