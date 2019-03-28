<template>
  <div class="top">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="../../assets/Spotify-logo-big-black.png" alt="Spotify Logo">
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Topper",
  props: {
    msg: String
  }
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #d9dadc;
}

.navbar-item img {
  max-height: 3.25rem;
  margin: 0.5rem;
}
</style>
