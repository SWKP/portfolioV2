<template>
  <div class="container">
    <!-- Render default page unless it's a 404 than change components -->
    <div v-if="['/404'].includes(this.$route.fullPath)">
      <app-NotFound></app-NotFound>
      <app-footer></app-footer>
    </div>
    <div v-else>
      <app-header></app-header>
      <app-mainBody></app-mainBody>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appMainBody: MainBody,
    appFooter: Footer,
    appNotFound: NotFound
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
