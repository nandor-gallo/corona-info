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
#app {
  background-color: grey;
  height: auto;
}
.body {
  color: white;
  height: 60%;
  width: 80%;
  margin-left: 20%;
  padding: 100px;
  height: auto;
}
</style>
