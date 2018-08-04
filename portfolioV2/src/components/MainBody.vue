<template>
<div class="mainBody">
    <div class="projectsTitle">
      <h1>My Projects</h1>
    </div>
      <app-Navigation></app-Navigation>
      <div class="mainBody__inner">
      <div class="mainBody__projects">

      <transition name="fade" mode="out-in">
      <component v-bind:is="activeComponent"></component>   
      </transition>   
      <!--
      <app-website></app-website>
      <app-code></app-code>
      -->

        <div class="loadMore">
            <h4>Load More Websites</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main.js';

import Navigation from './Navigation';
import Website from './Website';
import Code from './Code';
import ThreeD from './ThreeD';
import About from "./About";
import Contact from './Contact';

    
export default {
    components: {
        appNavigation: Navigation,
        appWebsite: Website,
        appCode: Code,
        appThreeD: ThreeD,
        appAbout: About,
        appContact: Contact
        
    },
    data() {
        return {
            activeComponent: 'app-about'
        }
    },
    created(){
        bus.$on('componentChanged', (data) => {
            this.activeComponent = data;
        });
    }
}
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
            width: 195%;
            position: relative;
            right: 150%;
            background: #BCBCBC;
            margin: 10rem 0;
            -webkit-clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
            

            h1 {
                padding: 4rem 10rem 5rem;
                text-align: right;
                font-family: "adam", Helvetica, Arial, sans-serif;
                color: #777777;
                font-weight: 100;
                font-size: 3rem;
                letter-spacing: 2rem;
            }
        }
        &__inner {
            top: 20rem;
        }

        &__projects {

        }
    }

    .loadMore {
        position:relative;
        z-index: 0;
        text-align: center;
        margin: 5rem 0 20rem 0;
        background-color: #BCBCBC;
        padding: 5rem 0 8rem 0;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);
        clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);

        & h4 {
            color: #565656;
            font-family: "adam", Helvetica, Arial, sans-serif;
            letter-spacing: 2rem;
        }
        
    }

    .fade-enter-active, .fade-leave-active {
            transform: rotateX(0deg);
  transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1);;
}

.fade-enter, .fade-leave-to {
  filter: blur(1rem);
  opacity: 0;
  transform: rotateX(90deg);
}
</style>
