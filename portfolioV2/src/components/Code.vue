<template>
  <div class="code">
    <div class="code__list">
      <ul>
        <li
          v-for="(project, index) in codeProjects"
          :key="index"
          @click="changeProject(index), activeTab = index"
          :class="{ 'active': index === activeTab }"
        >
          <h4>{{ project.codeTitle }}</h4>
        </li>
      </ul>
    </div>
    <transition name="slide-fade" mode="out-in">
      <div class="code__overview" :key="codeProjects[activeProject].codeTitle">
        <div class="overview__title">
          <img class="arrow" src="../assets/svg/arrow_001.svg" alt="github icon">
          <div class="overview__buttons">
            <a
              v-if="codeProjects[activeProject].codeGithub"
              v-bind:href="codeProjects[activeProject].codeGithub"
              target="_blank"
            >
              <img src="../assets/svg/github.svg" alt="github icon">
            </a>
          </div>
          <h2>{{ codeProjects[activeProject].codeTitle }}</h2>
        </div>

        <div v-if="codeProjects[activeProject].codeImage" class="code__image">
          <img v-bind:src="codeProjects[activeProject].codeImage">
          <a
            v-if="codeProjects[activeProject].iframe"
            v-bind:href="codeProjects[activeProject].iframe"
            target="_blank"
          >
            <button>Play Game</button>
          </a>
        </div>

        <div class="overview__description">
          <div class="description">
            <p>{{ codeProjects[activeProject].codeDescription }}</p>
          </div>
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
      activeTab: 0,
      iframePreview: false,
      codeProjects: [
        {
          codeTitle: "Portfolio",
          codeDescription:
            "The website you're currently on is primarily build with Vue.js - a web framework. I needed a place where I could store everything and gauge my progress... and a reason for me to learn a new toolset in the process. If you're interested in the internal working of this website check out it's code over at Github.",
          codeGithub: "https://github.com/SWKP/portfolioV2"
        },
        {
          codeTitle: "Zombie Painter",
          codeDescription:
            "A small zombie driving game developed in phaser.js as a test project. Drive around the map (arrow keys) and run over zombies and paint everything red. Killing zombies increases your maximum speed.",
          codeGithub: "https://github.com/SWKP/zombie_painter",
          iframe:
            "https://preview.c9users.io/karolpsw/gamedev/zombiePainter/index.html?_c9_id=livepreview3&_c9_host=https://ide.c9.io",
          codeImage:
            "https://karolponiatowski.com/projects/images/portfolio/code/zombie_painter001.png"
        },
        {
          codeTitle: "Asteroid Hunter",
          codeDescription:
            "A 2D shoot em up where you're trying to survive against space mutants. Mouse to aim, arrow keys to move. Collect health and speed power ups and try to survive as long as you can. All art assets custom drawn in Photoshop. If the game stops loading refresh your browser window.",
          codeGithub: "https://github.com/SWKP/asteroid_hunter",
          iframe:
            "https://preview.c9users.io/karolpsw/gamedev/asteroidHunter-beginning/index.html?_c9_id=livepreview2&_c9_host=https://ide.c9.io",
          codeImage:
            "https://karolponiatowski.com/projects/images/portfolio/code/asteroid_hunter001.png"
        },
        {
          codeTitle: "Social Network Platform",
          codeDescription:
            "A prototype for a social media platform project I built using Vue.js.",
          codeGithub: "https://github.com/SWKP/vue-testing",
          codeImage:
            "https://karolponiatowski.com/projects/images/portfolio/code/dear_divine001.png"
        },
        {
          codeTitle: "More coming soon",
          codeDescription:
            "More random code projects as I work on new things and/or get around to posting the things I've worked on in the past."
        }
      ]
    };
  },
  methods: {
    changeProject: function(number) {
      console.log(number);
      this.activeProject = number;
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
  min-height: 40rem;

  &__list {
    margin-right: 5rem;
    flex: 1;
    max-height: 400px;

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
      height: 6.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        position: relative;
        top: -5px;
        background: var(--main-highlight-color) !important;
        transition: all 0.5s;
      }

      &:hover h4 {
        color: #fff !important;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .overview__title {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #2b2b2b;
      margin-bottom: 1.5rem;
      min-height: 100px;
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
      padding: 45px 35px;
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

@media (max-width: 663px) {
  .code {
    flex-direction: column;

    &__list {
      margin: 0;
    }
    &__list ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 200px;
      margin: 0 auto;

      & li {
        padding: 15px 8px;
        margin-bottom: 15px;
      }
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
  height: 60px;
  margin: 2rem 1rem 0rem 0.9rem;
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

.active {
  background: #777777 !important;
  h4 {
    color: #3a3a3a !important;
  }
}

.code__image {
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  overflow: hidden;
}
button {
  position: absolute;
  bottom: 25px;
  right: 30px;
  text-transform: uppercase;
  border: none;
  margin: 30px 0 0;
  padding: 10px 20px;
  font-size: 2rem;
  background: #bcbcbc;
  color: #2b2b2b;
  font-family: "Brandon";
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-out;
}

button:hover {
  background: var(--main-highlight-color);
}
.code__image img {
  width: 140%;
  max-height: 465px;
  -o-object-fit: cover;
  object-fit: cover;
  margin-left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%) scale(1);
  filter: grayscale(0.75) blur(2px);
  transition: all 0.3s ease-out;
}

.code__image img:hover {
  filter: grayscale(0) blur(0);
  transform: translateX(-50%) scale(1.05);
}
</style>
