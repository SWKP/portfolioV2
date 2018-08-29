<template>
    <div class="container">

      <app-header></app-header>
      <app-mainBody></app-mainBody>
      <app-footer></app-footer>

  </div>
</template>

<script>
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appMainBody: MainBody,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
@import "./sass/main.scss";
/*Load custom fonts */
@font-face {
  font-family: 'adam';
  src: url('fonts/ADAM.CGPRO.woff') format('woff'),
       url('fonts/ADAM.CGPRO.woff2') format('woff'),
       url('fonts/ADAM.CGPRO.otf') format('otf');
}

@font-face {
  font-family: 'brandon';
  src: url('fonts/Brandon_bld.woff') format('woff'),
       url('fonts/Brandon_bld.otf') format('otf');
}

/*Global resets*/
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

/* Set html box sizing to border-box so when containers are given widths and than margins/padding
they will still stay at their original given widths! */
html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px; */
}

h1,h2,h3,h4,h5,h6,p {
  color: white;
}

h1 {font-size: 6rem;}
h2 {font-size: 5rem;}
h3 {font-size: 4rem;}
h4 {font-size: 2rem;}
h5 {font-size: 1rem;}
p {font-size: 1.7rem;}

//Variables
:root {
  //colors
  --main-highlight-color: #E91E63;
}

.container {
  background: #3a3a3a;
  overflow: hidden;
}

</style>
