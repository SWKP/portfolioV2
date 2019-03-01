<template>
  <div class="code">
    <div class="code__list">
      <ul>
        <li v-for="(project, index) in codeProjects" :key="index" @click="changeProject(index)">
          <h4>{{ project.codeTitle }}</h4>
        </li>
      </ul>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div class="code__overview" :key="codeProjects[activeProject].codeTitle">
        <div class="overview__title">
          <img class="arrow" src="../assets/svg/arrow_001.svg" alt="github icon">
          <div class="overview__buttons">
            <a v-bind:href="codeProjects[activeProject].codeGithub" target="_blank">
              <img src="../assets/svg/github.svg" alt="github icon">
            </a>
          </div>
          <h2>{{ codeProjects[activeProject].codeTitle }}</h2>
        </div>
        <div class="overview__description">
          <p>{{ codeProjects[activeProject].codeDescription }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeProject: 0,
      codeProjects: [
        {
          codeTitle: "Portfolio",
          codeDescription:
            "The website you're currently on is primarily build with Vue.js - a web framework. I needed a place where I could store everything and gauge my progress... and a reason for me to learn a new toolset in the process. If you're interested in the internal working of this website check out it's code over at Github.",
          codeGithub: "https://www.google.com"
        },
        {
          codeTitle: "Zombie Painter",
          codeDescription: "A small zombie driving game developed in phaser.js",
          codeGithub: "https://www.google.com"
        },
        {
          codeTitle: "Space Platformer",
          codeDescription:
            "A 2D shoot em up where you're trying to survive against space mutants.",
          codeGithub: "#"
        },
        {
          codeTitle: "More coming soon",
          codeDescription:
            "More random code projects as I work on new things and/or get around to posting the things I've worked on in the past.",
          codeGithub: "#"
        }
      ]
    };
  },
  methods: {
    changeProject: function(number) {
      console.log(number);
      this.activeProject = number;
      this.animateDiv();
    },
    animateDiv: function() {
      console.log("Animation!");
    }
  }
};
</script>

<style lang="scss" scoped>
.code {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;

  &__list {
    margin-right: 50px;
    flex: 1;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ul li {
      position: relative;
      top: 0;
      background: #2b2b2b;
      height: 22%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        position: relative;
        top: -5px;
        background: var(--main-highlight-color);
      }

      &:hover h4 {
        color: #fff;
      }

      h4 {
        color: #a3a3a3;
        font-family: "adam", Helvetica, Arial, sans-serif;
        font-weight: 100;
        font-size: 16px;
        text-transform: uppercase;
      }
    }
  }

  &__overview {
    flex: 2;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .overview__title {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #2b2b2b;
      margin-bottom: 1.5rem;
    }

    h2,
    .overview__description {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .overview__description {
      padding: 0 35px;
      flex: 3;
      background: #2b2b2b;
    }

    .overview__buttons {
      align-self: center;
      flex: 0.5;
    }

    h2 {
      font-size: 3rem;
      flex: 1;
      height: 100%;
      align-self: center;
      left: -20%;
      position: relative;
    }
  }
}

h1,
h2,
h4 {
  font-family: "adam", Helvetica, Arial, sans-serif;
  font-weight: 100;
  text-align: center;
}
h1 {
  padding: 20rem 0;
  background: #2b2b2b;
  font-size: 3rem;
}

.overview__buttons a img {
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
}

.overview__buttons a img:hover {
  filter: brightness(3);
  transform: scale(1.2);
}
.arrow {
  height: 85px;
  margin: 0rem 1rem 0rem 0.9rem;
  transform: scale(0.5, 0.75);
}

//Animations

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
