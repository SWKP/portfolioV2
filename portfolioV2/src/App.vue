<template>
  <div class="container">
    <app-header></app-header>
    <app-mainBody></app-mainBody>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appMainBody: MainBody,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
