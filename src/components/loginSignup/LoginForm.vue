<template>
  <div class="loginForm columns is-centered">
    <div class="column is-8 box">
      <div class="columns is-centered">
        <strong>Login with google</strong>
      </div>
      <hr class="hr-text" data-content="OR">
      <div>
        <form>
          <b-field>
            <b-input type="email" placeholder="Email"></b-input>
          </b-field>

          <b-field>
            <b-input type="password" placeholder="Password"></b-input>
          </b-field>
          <div class="columns is-vertical-center">
            <div class="column is-6">
              <b-checkbox class="remember-me">Remember me</b-checkbox>
            </div>
            <div class="column is-6">
              <button class="button is-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import "~bulma/sass/utilities/_all";
.is-vertical-center {
  display: flex;
  align-items: center;
}

.box {
  padding: 50px;
}

.loginForm {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  margin-top: 15px;
}

form {
  margin-top: 30px;
}

.button {
  width: 10rem;
  font-size: 1.1rem;
  float: right;
  border-radius: 5rem;
}

.remember-me {
  float: left;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  background-color: #ffffff;
  font-weight: bolder;
  &:before {
    content: "";
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: #dadada;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #000000;
    background-color: #ffffff;
  }
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