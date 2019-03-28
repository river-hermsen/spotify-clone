<template>
  <div class="sign-up">
    <Topper/>
    <SignUpForm/>
  </div>
</template>

 <script>
import firebase from "firebase";
import Topper from "@/components/loginSignup/Topper.vue";
import SignUpForm from "@/components/loginSignup/SignUpForm.vue";
export default {
  name: "signUp",
  components: {
    Topper,
    SignUpForm
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            const currenntUser = firebase.auth().currentUser;

            currenntUser
              .sendEmailVerification()
              .then(() => {
                console.log("please verify yout email");
              })
              .catch(err => {
                console.log("Error sending email" + err);
                // alert("Could not send email" + err);
              });
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

