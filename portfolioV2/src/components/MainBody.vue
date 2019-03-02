<template>
  <div class="mainBody">
    <app-Navigation></app-Navigation>
    <div class="projectsTitle">
      <h1>{{ tagLine }}</h1>
    </div>
    <div class="mainBody__inner">
      <div class="mainBody__projects">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
          <!--<component v-bind:is="activeComponent"></component>-->
        </transition>
        <!--
      <app-website></app-website>
      <app-code></app-code>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main.js";

import Navigation from "./Navigation";

/*
import Website from './Website';
import Code from './Code';
import ThreeD from './ThreeD';
import About from "./About";
import Contact from './Contact';
*/

export default {
  components: {
    appNavigation: Navigation
    /*
        appWebsite: Website,
        appCode: Code,
        appThreeD: ThreeD,
        appAbout: About,
        appContact: Contact
        */
  },
  data() {
    return {
      tagLine: "Websites",
      activeComponent: "app-contact"
    };
  },
  watch: {
    //watch for route changes
    $route(to, from) {
      this.currentRout(this.$route.fullPath);
      this.changeTagline();
    }
  },
  methods: {
    currentRout: function(data) {
      bus.$emit("routChanged", data);
      console.log("routeChanged");
    },
    changeTagline: function() {
      switch (this.$route.fullPath) {
        case "/":
          this.tagLine = "Websites";
          break;
        case "/code":
          this.tagLine = "My Code";
          break;
        case "/3d":
          this.tagLine = "3D Models";
          break;
        case "/about":
          this.tagLine = "About Me";
          break;
        case "/contact":
          this.tagLine = "Contact Me";
          break;
        default:
        // code block
      }
    }
  },
  created() {
    this.changeTagline();
    bus.$on("componentChanged", data => {
      this.activeComponent = data;
    });
  },
  mounted() {}
};
</script>

<style lang="scss">
.mainBody {
  display: flex;
  flex-direction: column;
  //background: #494949;
  max-width: 120rem;
  margin: 0 auto;
  z-index: 1;

  .projectsTitle {
    display: inline-block;
    position: absolute;
    width: 45vw;
    min-width: 35rem;
    left: 0px;
    background: #bcbcbc;
    margin-top: 25rem;
    -webkit-clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);

    @media (max-width: 450px) {
      width: 70vw;
    }

    @media (max-width: 660px) {
      margin-top: 55rem;
    }

    h1 {
      padding: 4rem 5vw 5rem 0;
      text-align: right;
      font-family: "adam", Helvetica, Arial, sans-serif;
      color: #777777;
      font-weight: 100;
      font-size: 3rem;
      letter-spacing: 2rem;

      @media (max-width: 1155px) {
        font-size: 2.8rem;
        letter-spacing: 1rem;
      }
      @media (max-width: 755px) {
        padding: 4rem;
        font-size: 2.5rem;
        letter-spacing: 0.3rem;
        text-align: left;
      }
    }
  }
  &__inner {
    position: relative;
    z-index: 1;
    top: 20rem;
    margin: 0px 15px;
  }
}

$anim-text-offset: 1em;

.button {
  font-family: "brandon", Helvetica, Arial, sans-serif;
  user-select: none;
  display: inline-block;

  position: relative;
  cursor: pointer;
  overflow: hidden;
  opacity: 0.6;
  color: #fff;
  &__text {
    display: block;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: bold;
    &:before {
      content: attr(title);
    }
    &--bis {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateX(-1 * $anim-text-offset);
      opacity: 0;
    }
  }
  &__mask {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }
}

.button:hover {
  opacity: 1;
  .button__text {
    animation: fx-text 0.3s ease-out;
    &--bis {
      animation: fx-text-bis 0.3s ease-out;
    }
  }
  .button__mask {
    animation: fx-mask 0.3s ease-out;
  }
}

.button:active {
  opacity: 1;
  background: white;
  color: inherit;
}

@keyframes fx-mask {
  0% {
    transform: translateX(-100%) rotate(45deg);
    filter: blur(5px);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
    filter: blur(5px);
  }
}

@keyframes fx-text {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX($anim-text-offset);
    opacity: 0;
  }
}
@keyframes fx-text-bis {
  0% {
    transform: translateX(-1 * $anim-text-offset);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
