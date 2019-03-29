<template>
  <div>
    <aside class="menu">
      <ul class="menu-list">
        <input class="input is-rounded search-aside" type="text" placeholder="Search Music">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/search">Search</router-link>
        </li>
      </ul>
      <p class="menu-label">Recently Played</p>
      <ul class="menu-list">
        <li>
          <router-link to="/">Playlist</router-link>
        </li>
        <li>
          <router-link to="/">Playlist</router-link>
        </li>
        <li>
          <router-link to="/">Playlist</router-link>
        </li>
        <li>
          <router-link to="/">Playlist</router-link>
        </li>
      </ul>
      <div class="account-list">
        <p class="menu-label">Account</p>
        <ul class="menu-list">
          <li>
            <router-link to="/myaccount">My Account</router-link>
          </li>
          <li @click="logout">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.menu-list {
  a:hover {
    background-color: transparent;
    color: #f2f2f2;
  }
  input {
    margin-bottom: 10px;
  }
}

.account-list {
  position: absolute;
  bottom: 110px;
}
.browse {
  height: 100vh;
  background-color: #141319;
}

aside {
  padding: 10px;
  height: 100vh;
  background-color: #08080a;
}
</style>

<script>
import firebase from "firebase";

export default {
  name: "AsideNav",
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>