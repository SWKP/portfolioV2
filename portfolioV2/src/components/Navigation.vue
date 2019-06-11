<template class="mainContainer">
  <div class="mainNavigation" id="myHeader">
    <!-- MOBILE NAVIGATION -->
    <nav class="hamburgerNav" v-on:click="mobileOpen = !mobileOpen">
      <div></div>
    </nav>
    <transition name="fade" mode="out-in">
      <nav class="hamburgerNav--open" v-show="mobileOpen" v-on:click="mobileOpen = !mobileOpen">
        <ul>
          <router-link to="/">
            <li>Websites</li>
          </router-link>
          <router-link to="/code">
            <li>Code</li>
          </router-link>
          <router-link to="/3d">
            <li>3D</li>
          </router-link>
          <router-link to="/about">
            <li>About</li>
          </router-link>
          <router-link to="/contact">
            <li>Contact</li>
          </router-link>
        </ul>
      </nav>
    </transition>
    <!-- DESKTOP NAVIGATION -->
    <nav class="desktopNav">
      <ul>
        <router-link to="/">
          <li>
            <div class="button">
              <span class="button__mask"></span>
              <span class="button__text">Websites</span>
              <span class="button__text button__text--bis">Websites</span>
            </div>
          </li>
        </router-link>
        <router-link to="/code">
          <li>
            <div class="button">
              <span class="button__mask"></span>
              <span class="button__text">Code</span>
              <span class="button__text button__text--bis">Code</span>
            </div>
          </li>
        </router-link>
        <router-link to="/3d">
          <li>
            <div class="button">
              <span class="button__mask"></span>
              <span class="button__text">3D</span>
              <span class="button__text button__text--bis">3D</span>
            </div>
          </li>
        </router-link>
        <router-link to="/about">
          <li>
            <div class="button">
              <span class="button__mask"></span>
              <span class="button__text">About</span>
              <span class="button__text button__text--bis">About</span>
            </div>
          </li>
        </router-link>
        <router-link to="/contact">
          <li>
            <div class="button">
              <span class="button__mask"></span>
              <span class="button__text">Contact</span>
              <span class="button__text button__text--bis">Contact</span>
            </div>
          </li>
        </router-link>
      </ul>
      <transition name="fade" mode="out-in">
        <div v-if="['/'].includes(this.activeRout)" class="search">
          <input type="text" v-model="search" placeholder="Search..." @keyup.enter="submitSearch">
          <button class="submit" type="submit" v-on:click="this.submitSearch">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { bus } from "../main.js";

export default {
  data() {
    return {
      search: "",
      activeRout: "/",
      mobileOpen: false
    };
  },
  mounted() {
    window.onscroll = function() {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },
  methods: {
    changeComponent: component => {
      bus.$emit("componentChanged", component);
    },
    submitSearch: function() {
      bus.$emit("searchSubmitted", this.search.toLowerCase());
    }
  },
  created() {
    bus.$on("routChanged", data => {
      this.activeRout = data;
    });
  }
};
</script>

<style lang="scss">
@media (min-width: 700px) {
  nav.hamburgerNav {
    display: none;
  }
}

@media (max-width: 700px) {
  nav.desktopNav {
    display: none;
  }
}

.fa-search:hover:before {
  color: #cddc39 !important;
  cursor: pointer;
}
.mainContainer {
  width: 100vw;
}

.mainNavigation {
  height: 5rem;
  position: absolute;
  z-index: 1;
  transition: all 0.25s ease-in 0s;
  align-self: flex-end;

  .button {
    width: 13rem;
  }

  ul li {
    text-align: center;
    cursor: pointer;
    display: inline-block;
    color: #c6c6c6;
    font-size: 1.5rem;
    font-family: "brandon", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    transition: all 0.3s;
    background: #2b2b2b;
    height: 51px;

    &:hover {
      color: white;
      background-color: var(--main-highlight-color);
    }
  }
}

.search {
  position: relative;
  right: 0;
  -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 20% 100%);
  height: 6rem;
  width: 38rem;
  float: right;
  background: #2b2b2b;
  margin-bottom: -6rem;
  text-align: right;
  top: -3px;

  @media (max-width: 660px) {
    display: none;
  }

  input[type="text"] {
    margin: 1.2rem 20px 1rem 9rem;
    padding: 0.75rem 0.75rem 0.75rem 2rem;
    background: #bcbcbc;
    border: none;
    font-family: "brandon", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    outline: none;
    text-align: left;
  }

  button {
    background: transparent;
    border: none;
    transform: scale(2);
    margin-left: 15px;
    outline: none;
  }

  .fa-search:before {
    color: #838383;
    padding-right: 20px;
  }
}
.router-link-exact-active {
  position: relative;
  z-index: 99;
  background-image: linear-gradient(#86867500, #86867500 62%, #bfc239 61%);
  transition: all 0.3s ease-out;

  @media (max-width: 670px) {
    background-image: linear-gradient(#86867500, #86867500 85%, #bfc239 60%);
  }

  span.button__text {
    color: #bfc239;
  }
}

div#myHeader {
  background: #2b2b2b;
  width: fit-content;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: right;
  z-index: 99;
}

nav.hamburgerNav {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99;
  background: #2b2b2b;
  padding: 10px;
  cursor: pointer;

  &:after,
  &:before,
  div {
    width: 40px;
    height: 5px;
    background-color: #fff;
    border-radius: 3px;
    content: "";
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    transform: translateY(12px) rotate(135deg);
  }

  &:hover:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  &:hover div {
    transform: scale(0);
  }

  &--open {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 98;

    .router-link-exact-active {
      background-image: linear-gradient(
        #86867500,
        #86867500 45%,
        #bfc239 45%,
        #bfc239 55%,
        #86867500 55%
      );
    }
    ul {
      height: 100vh;
      width: 100vw;
      background-color: #2b2b2b;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    ul li {
      display: block;
      font-size: 2.5rem;
      max-width: 400px;
      margin: 5px auto;
      background: #2b2b2b;
      padding: 8px;
    }
  }
}
</style>
