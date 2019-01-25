<template>
  <div class="footer">
    <div class="socialIcons">
      <a href="#">
        <img src="../assets/svg/facebook.svg" alt>
      </a>
      <a href="#">
        <img src="../assets/svg/linkedIn.svg" alt>
      </a>
      <a href="#">
        <img src="../assets/svg/dribble.svg" alt>
      </a>
      <a href="#">
        <img src="../assets/svg/github.svg" alt>
      </a>
      <a href="#">
        <img src="../assets/svg/steam.svg" alt>
      </a>
    </div>
    <div class="otherSites">
      <h4>My Other Sites</h4>
      <h5>Codedefrag.com</h5>
    </div>
    <div class="copyright">
      <h3>© Copright {{ new Date().getFullYear() }}.</h3>
      <h3>All rights reserved. Powered by the internet.</h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.footer {
  margin-top: 2rem;
  height: 80rem;
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.socialIcons {
  flex-grow: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 33rem;
  margin: 0 auto;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
}
.otherSites {
  clip-path: polygon(85% 0, 100% 75%, 85% 100%, 15% 100%, 0 75%, 15% 0);
  height: 60px;
  margin: 0px auto 5rem;
  padding: 5rem 7rem 5rem 7rem;
  background: #424242;
  flex-grow: 3;
  text-align: center;
  font-family: "adam", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    flex: 1;
    font-size: 1.75rem;
    color: #2b2b2b;
    padding-top: 1rem;
  }
  h5 {
    flex: 2;
    margin-top: 1rem;
    font-size: 2.25rem;
    font-weight: 900;
    color: #c1d034;
    letter-spacing: 0.75rem;
  }
}
.copyright {
  flex-grow: 2;
  background-color: #252525;
  text-align: center;
  font-family: "adam", Helvetica, Arial, sans-serif;
  padding: 15rem 0 20rem;
  z-index: 1;
  h3 {
    color: #424242;
    font-size: 1.5rem;
    letter-spacing: 1rem;
    line-height: 5rem;
  }
}

.socialIcons a img {
  transition: all 0.3s;
  position: relative;
}

.socialIcons a img:hover {
  filter: brightness(3);
  transform: scale(1.2);
}
</style>
