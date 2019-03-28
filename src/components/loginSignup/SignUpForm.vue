<template>
  <div class="loginForm columns is-centered">
    <div class="column is-8 is-5-fullhd box">
      <h3 class="is-size-3">Sign up with email</h3>
      <div>
        <form v-on:submit.prevent="validateBeforeSubmit">
          <div class="field">
            <div class="control">
              <input
                class="input"
                placeholder="Name"
                v-model="name"
                name="name"
                v-validate="'required|alpha_spaces|min:2|max:32'"
                v-bind:class="{'is-danger': errors.has('name')}"
                :message="errors.first('name')"
              >
            </div>
            <p class="help is-danger" v-if="errors.has('name')">{{errors.first('name')}}</p>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input"
                placeholder="Email"
                v-model="email"
                name="email"
                v-validate="'email|required'"
                v-bind:class="{'is-danger': errors.has('email')}"
                :message="errors.first('email')"
              >
            </div>
            <p class="help is-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input"
                placeholder="Password"
                v-model="password"
                name="password"
                v-validate="'min:6|required'"
                v-bind:class="{'is-danger': errors.has('password')}"
                :message="errors.first('password')"
              >
            </div>
            <p class="help is-danger" v-if="errors.has('password')">{{errors.first('password')}}</p>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="input"
                placeholder="Password confirmation"
                v-model="password2"
                name="password2"
                data-vv-as="Password Confirmation "
                v-validate="'required|confirmed:password'"
                v-bind:class="{'is-danger': errors.has('password2')}"
                :message="errors.first('password2')"
              >
            </div>
            <p class="help is-danger" v-if="errors.has('password2')">{{errors.first('password2')}}</p>
          </div>

          <div class="columns is-vertical-center">
            <div class="column is-12">
              <button class="button is-primary btn-login">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
      <hr class="hr-text">
      <div>
        <div>
          <h2 class="is-size-4 header-sign-up">
            <strong>Already have an account?</strong>
          </h2>
        </div>
        <div>
          <router-link to="/login">
            <button class="button is-primary is-outlined is-large btn-sign-up">Login</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUpForm",
  data() {
    return {
      isActive: true,
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert("Form Submitted!");
          return;
        }

        alert("Correct them errors!");
      });
    }
  }
};
</script>

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
</style>