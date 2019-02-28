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
        <h2>{{ codeProjects[activeProject].codeTitle }}</h2>
        <div class="overview__description">
          <p>{{ codeProjects[activeProject].codeDescription }}</p>
          <div class="overview__buttons">
            <button>X</button>
            <button>X</button>
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
      codeProjects: [
        {
          codeTitle: "Portfolio V2 - Frontend vue.js",
          codeDescription:
            "1This website is mainly powered by vue.js - a web framework. Currently the website is running on the frontend, In the near future I’m planning on implementing a nosql backend. If you’re curious how I built this site check out the github link below."
        },
        {
          codeTitle: "Zombie Painter - phaser.js",
          codeDescription:
            "2This website is mainly powered by vue.js - a web framework. Currently the website is running on the frontend, In the near future I’m planning on implementing a nosql backend. If you’re curious how I built this site check out the github link below."
        },
        {
          codeTitle: "Space Platformer - phaser.js",
          codeDescription:
            "3This website is mainly powered by vue.js - a web framework. Currently the website is running on the frontend, In the near future I’m planning on implementing a nosql backend. If you’re curious how I built this site check out the github link below."
        },
        {
          codeTitle: "Another project in development",
          codeDescription:
            "4This website is mainly powered by vue.js - a web framework. Currently the website is running on the frontend, In the near future I’m planning on implementing a nosql backend. If you’re curious how I built this site check out the github link below."
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

    h2,
    .overview__description {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #2b2b2b;
    }
    h2 {
      font-size: 4rem;
      flex: 1;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
    .overview__description {
      padding: 0 35px;
      flex: 3;
    }
    .overview__buttons {
      align-self: flex-start;

      button {
        width: 50px;
        height: 50px;
        background: orangered;
        border-radius: 50%;
        border: none;
        margin: 2rem 2rem 0 0;
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
