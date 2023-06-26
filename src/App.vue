<template>
  <HeaderComponent />
  <div class="container min-vh-100">
    <router-view></router-view>
  </div>
  <FooterComponent />
</template>

<script>

import HeaderComponent from './components/Misc/HeaderComponent.vue';
import FooterComponent from './components/Misc/FooterComponent.vue';

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
