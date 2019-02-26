<template class="mainContainer" sticky-container>
  <!-- NEEDS v-sticky to work -->
  <div class="mainNavigation" sticky-side="top" sticky-z-index="99">
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
  </div>
</template>

<script>
import { bus } from "../main.js";

export default {
  data() {
    return {
      search: "",
      activeRout: "/"
    };
  },
  methods: {
    changeComponent: function(component) {
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
.fa-search:hover:before {
  color: #cddc39 !important;
  cursor: pointer;
}
.mainContainer {
  width: 100vw;
}

.mainNavigation {
  transition: all 0.25s ease-in 0s;
  align-self: flex-end;

  .button {
    width: 13rem;
  }

  @media (max-width: 660px) {
    width: 100vw;
    .button {
      width: 20rem;
    }

    ul {
      width: 20rem;
      margin: 0 auto;
      ul a {
        display: block;
        margin-bottom: 6px;
        max-width: 20rem;
      }
    }
  }

  ul li {
    height: 54px;
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
  right: -37rem;
  -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 20% 100%);
  height: 6rem;
  width: 29rem;
  background: #2b2b2b;
  top: 0.05rem;
  border-bottom: 3px solid #3a3a3a;

  @media (max-width: 660px) {
    display: none;
  }

  input[type="text"] {
    margin: 1.2rem 0 1rem 9rem;
    padding: 0.75rem;
    background: #bcbcbc;
    border: none;
    font-family: "brandon", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
  }

  button {
    background: transparent;
    border: none;
    transform: scale(2);
    margin-left: 15px;
  }

  .fa-search:before {
    color: #838383;
  }
}
.router-link-exact-active {
  position: relative;
  z-index: 99;
  background-image: linear-gradient(#86867500, #86867500 62%, #bfc239 61%);

  @media (max-width: 670px) {
    background-image: linear-gradient(#86867500, #86867500 85%, #bfc239 60%);
  }

  span.button__text {
    color: #bfc239;
  }
}
.mainNavigation.vue-sticky-el.top-sticky {
  transform: translateX(-50%);
  left: 50% !important;
  width: 660px !important;
  transition: all 0.25s ease-in 0s;
}
</style>
