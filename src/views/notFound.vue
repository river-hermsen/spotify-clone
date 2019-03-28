<template>
  <div>
    <Topper/>
    <img src="../assets/page-not-found-illustration-.svg">
    <h3 class="is-size-3">This page was not found.</h3>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
img {
  margin-top: 30px;
  width: 40rem;
}
h3 {
  margin-top: 30px;
}
</style>

<script>
import Topper from "@/components/loginSignup/Topper.vue";
export default {
  name: "notFound",
  components: {
    Topper
  }
};
</script>
