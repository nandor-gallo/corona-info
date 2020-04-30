<template>
  <div id="app" class="">
    <Navbar> </Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Nav.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
@import url(https://fonts.googleapis.com/css?family=Ubuntu:700);
</style>
