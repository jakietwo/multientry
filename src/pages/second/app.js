import Vue from "vue";
import App from "./app.vue";
import "../../common/setDocumentRem";
import "../../common/reset.css";

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
