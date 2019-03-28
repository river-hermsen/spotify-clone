import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import Buefy from "buefy";

Vue.config.productionTip = false;
Vue.use(Buefy);
let app = "";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCzSv4e4KeJb-80YJU0NOpWVsBT17T_7tQ",
  authDomain: "vue-firebase-c0e1a.firebaseapp.com",
  databaseURL: "https://vue-firebase-c0e1a.firebaseio.com",
  projectId: "vue-firebase-c0e1a",
  storageBucket: "vue-firebase-c0e1a.appspot.com",
  messagingSenderId: "681037920537"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
