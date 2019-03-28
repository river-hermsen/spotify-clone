<template>
  <div class="login">
    <Topper/>
    <LoginForm/>
  </div>
</template>

<script>
import firebase from "firebase";
import Topper from "@/components/loginSignup/Topper.vue";
import LoginForm from "@/components/loginSignup/LoginForm.vue";
export default {
  name: "login",
  components: {
    Topper,
    LoginForm
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user);
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    },
    socialLogin: function() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  }
};
</script>
