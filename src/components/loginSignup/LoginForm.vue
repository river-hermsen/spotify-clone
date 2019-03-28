<template>
  <div class="loginForm">
    <h1 class="is-size-2">Login</h1>
    <div class="columns is-centered">
      <form class="column is-6">
        <b-field>
          <b-input type="email" placeholder="Email"></b-input>
        </b-field>

        <b-field>
          <b-input type="password" placeholder="Password"></b-input>
        </b-field>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.loginForm {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  margin-top: 15px;
}
</style>

<script>
import firebase from "firebase";
export default {
  name: "loginForm",
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