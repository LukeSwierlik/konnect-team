<template>
  <header class="nav">
    <router-link
      to="/"
      class="nav-item nav-item-wide logo"
    >
      <img
        class="logoImg"
        :src="images.logo"
      >
    </router-link>
    <img
      class="nav-item"
      :src="images.notifications"
    >
    <img
      class="nav-item"
      :src="images.help"
    >
    <img
      class="user nav-item"
      :src="images.avatar"
    >
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  data () {
    return {
      images: {
        logo: require('../assets/Konnect.svg'),
        notifications: require('../assets/Notifications.svg'),
        help: require('../assets/Help.svg'),
        avatar: require('../assets/avatar.png'),
      }
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  &-item {
    display: block;
    width: 20px;
    height: 20px;

    &-wide {
      margin-right: auto;
    }
  }

  .logo {
    display: block;
    height: 15px;
    width: auto;

    .logoImg {
      width: 100%;
    }
  }

  .user {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
}
</style>
