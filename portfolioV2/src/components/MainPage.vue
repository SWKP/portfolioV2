<template>
<div class="container">

  <app-header></app-header>
  <app-mainBody></app-mainBody>

  <app-footer></app-footer>

</div>
</template>

<script>
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

export default {
  name: "MainPage",
  components: {
    appHeader: Header,
    appMainBody: MainBody,
    appFooter: Footer
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #3a3a3a;
  overflow: hidden;
}
</style>
