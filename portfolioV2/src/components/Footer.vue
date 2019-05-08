<template>
  <div class="footer">
    <div class="socialIcons">
      <a href="#">
        <img src="../assets/svg/facebook.svg" alt="facebook icon">
      </a>
      <a href="https://www.linkedin.com/in/karol-poniatowski-a13610117/" target="_blank">
        <img src="../assets/svg/linkedIn.svg" alt="linkedin icon">
      </a>
      <a href="#">
        <img src="../assets/svg/dribble.svg" alt="dribble icon">
      </a>
      <a href="https://github.com/SWKP" target="_blank">
        <img src="../assets/svg/github.svg" alt="github icon">
      </a>
    </div>
    <div class="otherSites">
      <h4>My Other Sites</h4>
      <a href="http://codedefrag.com" target="_blank"><h5>Codedefrag.com</h5></a>
    </div>
    <div class="copyright">
      <h3>© Copright {{ new Date().getFullYear() }} Karol Poniatowski.</h3>
      <h3>All rights reserved.</h3>
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
  position: relative;
  z-index: 0;
  margin-top: 10rem;
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
  clip-path: polygon(85% 0, 100% 64%, 85% 100%, 15% 100%, 0 64%, 15% 0);
  height: 60px;
  margin: 0 auto -7rem;
  padding: 5rem 7rem 5rem 7rem;
  background: #252525;
  flex-grow: 3;
  text-align: center;
  font-family: "adam", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 400px) {
    padding: 5rem 3rem 5rem 3rem;
    margin-top: -25px;
  }

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
  padding: 15rem 4rem 0;
  z-index: 1;
  h3 {
    color: #424242;
    font-size: 1.5rem;
    letter-spacing: 0.7rem;
    line-height: 5rem;

    @media (max-width: 750px) {
      letter-spacing: 0.5rem;
    }
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
