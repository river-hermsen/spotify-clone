<template>
  <div class="loginForm columns is-centered">
    <div class="column is-8 is-5-fullhd box">
      <div class="is-centered">
        <button type="button" class="button btn-google" @click="socialLogin">
          <span class="google-button__icon">
            <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                id="Shape"
                fill="#EA4335"
              ></path>
              <path
                d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                id="Shape"
                fill="#FBBC05"
              ></path>
              <path
                d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                id="Shape"
                fill="#4285F4"
              ></path>
              <path
                d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                fill="#34A853"
              ></path>
            </svg>
          </span>
          <span class="google-button__text">Sign in with Google</span>
        </button>
      </div>
      <hr class="hr-text" data-content="OR">
      <div>
        <form v-on:submit.prevent="validateBeforeSubmit">
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input"
                placeholder="Email"
                v-model="email"
                name="email"
                v-validate="'email|required'"
                :class="{'is-danger':errors.has('email') ||wrongCredentials.isEmail}"
                :message="errors.first('email')"
              >
            </div>
            <p class="help is-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
          </div>
          <div class="field">
            <div class="control">
              <input
                type="password"
                class="input"
                placeholder="Password"
                v-model="password"
                name="password"
                v-validate="'required'"
                v-bind:class="{'is-danger': errors.has('password') || wrongCredentials.isEmail || wrongCredentials.isPwd}"
                :message="errors.first('password')"
              >
            </div>
            <p class="help is-danger" v-if="errors.has('password')">{{errors.first('password')}}</p>
          </div>
          <p
            class="help is-danger"
            v-if="wrongCredentials.isPwd || wrongCredentials.isEmail"
          >{{wrongCredentials.error}}</p>
          <div class="columns is-vertical-center is-multiline">
            <div class="column is-6">
              <b-checkbox class="remember-me">Remember me</b-checkbox>
            </div>
            <div class="column is-6">
              <button
                class="button is-primary btn-login"
                :class="{'is-loading': isLoggingInEmail}"
              >Login</button>
            </div>
            <div class="column is-12">
              <router-link to="/forgotpassword" class="forgot-password">Forgot your password?</router-link>
            </div>
          </div>
        </form>
      </div>
      <hr class="hr-text">
      <div>
        <div>
          <h2 class="is-size-4 header-sign-up">
            <strong>Don't have an account yet?</strong>
          </h2>
        </div>
        <div>
          <router-link to="/sign-up">
            <button class="button is-primary is-outlined is-large btn-sign-up">Sign Up</button>
          </router-link>
        </div>
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
.help {
  font-size: 1rem;
}
.btn-login {
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

.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}

.google-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}

.btn-google {
  height: 3rem;
}

.header-sign-up {
  margin-bottom: 20px;
}

.btn-sign-up {
  width: 300px;
}

.forgot-password {
  float: right;
}
</style>

<script>
import firebase from "firebase";
export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      isLoggingInEmail: false,
      isLoggingInGoogle: false,
      wrongCredentials: {
        isPwd: false,
        isEmail: false,
        error: ""
      }
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace("home");
          },
          err => {
            this.isLoggingInEmail = false;
            if (err.code === "auth/wrong-password") {
              this.wrongCredentials.isEmail = false;
              this.wrongCredentials.isPwd = true;
              this.wrongCredentials.error = "The password is invalid";
            } else if (err.code === "auth/user-not-found") {
              this.wrongCredentials.isPwd = false;
              this.wrongCredentials.isEmail = true;
              this.wrongCredentials.error = "The user has not been found";
            }
            console.log(err);
          }
        );
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.isLoggingInEmail = true;
          // eslint-disable-next-line
          this.login();
        }
      });
    },
    socialLogin: function() {
      this.isLoggingInGoogle = true;
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