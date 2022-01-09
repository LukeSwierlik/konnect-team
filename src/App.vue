<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style lang="scss">
@import './assets/reset';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

  @media (max-width: 320px) {
    width: 320px;
  }
}
</style>
