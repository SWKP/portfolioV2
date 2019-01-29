<template>
  <div class="mainBody">
    <div class="projectsTitle">
      <h1>My Projects</h1>
    </div>
    <app-Navigation></app-Navigation>
    <div class="mainBody__inner">
      <div class="mainBody__projects">
        <transition name="fade" mode="out-in">
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
      activeComponent: "app-contact"
    };
  },
  watch: {
    //watch for route changes
    $route(to, from) {
      //this.activeRout = this.$route.fullPath;
      this.currentRout(this.$route.fullPath);
    }
  },
  methods: {
    currentRout: function(data) {
      bus.$emit("routChanged", data);
    }
  },
  created() {
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

  .projectsTitle {
    display: inline-block;
    position: absolute;
    width: 45vw;
    left: 0px;
    background: #bcbcbc;
    margin: 10rem 0;
    -webkit-clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);

    @media (max-width: 450px) {
      width: 70vw;
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
        padding: 4rem 2rem 4rem 16px;
        font-size: 2.5rem;
        letter-spacing: 0.3rem;
        text-align: left;
      }
    }
  }
  &__inner {
    top: 20rem;
    margin: 0px 15px;
  }

  &__projects {
    margin: 10rem 0px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transform: rotateX(0deg);
  transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
  transition: all 0.5s ease-out;
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
</style>
