<template>
  <div class="home columns">
    <div class="column is-2">
      <AsideNav/>
    </div>
    <div class="view column">
      <router-view></router-view>
    </div>
    <Player/>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #141319;
}

.view {
}
</style>

<script>
import AsideNav from "@/components/home/AsideNav.vue";
import Player from "@/components/home/Player.vue";
export default {
  name: "home",
  components: {
    AsideNav,
    Player
  }
};
</script>
