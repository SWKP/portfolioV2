<template>
  <div>
    <ul>
      <li v-for="website in filteredSites">
        <div class="project">
          <div class="project__info">
            <div class="project__date">
              <h4>
                {{ website.date }}
                <span>{{ website.number }}</span>
              </h4>
            </div>
            <div class="project__data">
              <div class="urlTitle">
                <h2>{{ website.url }}</h2>
              </div>
              <div class="detailsTitle">
                <h4>Project Details</h4>
              </div>
              <div class="detailsList">
                <ul>
                  <li v-for="detail in website.details">{{ detail.feature }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- On click multiple things happen -->
          <div
            v-on:click="modalUrl=website.full, modal = true, topScroll()"
            class="project__image"
            :style="{ backgroundImage: 'url(' + website.image + ')' }"
          >
            <h3>{{ website.name }}</h3>
          </div>
        </div>
      </li>
    </ul>
    <div class="noResults">
      <h1 v-if="!filteredSites.length">No results.</h1>
    </div>
    <div class="loadMore">
      <h4>Load More Websites</h4>
    </div>
    <!-- MODALPOPUP STARTS HERE -->
    <transition name="fade">
      <div
        class="modal"
        v-show="modal"
        v-on:click="botScroll(), modalUrl=' ', modal = false"
        transition="fadeIn"
      >
        <div class="modalInner">
          <img v-bind:src="modalUrl">
        </div>
      </div>
    </transition>
    <!--MODAL END-->
  </div>
</template>

<script>
import { bus } from "../main.js";

export default {
  data() {
    return {
      search: "",
      websites: [
        {
          number: "1",
          date: "Sep 2017",
          name: "napa valley film festival",
          url: "nvff.org",
          image:
            "http://karolponiatowski.com/projects/images/portfolio/nvff-project.png",
          full:
            "http://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots/screencapture-nvff-org-2018-05-30-01_35_05.png",
          details: [
            { feature: "Wordpress" },
            { feature: "High traffic Ecommerce" },
            { feature: "Custom navigation" },
            { feature: "Events implementation" }
          ]
        },
        {
          number: "2",
          date: "Feb 2018",
          name: "dixicoin",
          url: "dixicoin.net",
          image:
            "http://karolponiatowski.com/projects/images/portfolio/dixicoin-project.png",
          full:
            "http://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots/screencapture-dixicoin-net-2018-05-30-01_47_37.png",
          details: [{ feature: "Bootstrap" }, { feature: "Custom SVG" }]
        },
        {
          number: "3",
          date: "May 2018",
          name: "petaluma museum",
          url: "petalumamuseum.com",
          image:
            "http://karolponiatowski.com/projects/images/portfolio/petalumaMuseum-project.png",
          full:
            "http://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots/screencapture-petalumamuseum-2018-05-30-01_40_48.png",
          details: [
            { feature: "Wordpress" },
            { feature: "Agile development" },
            { feature: "Events implementation" }
          ]
        },
        {
          number: "4",
          date: "Mar 2018",
          name: "roundone",
          url: "roundone.win",
          image:
            "http://karolponiatowski.com/projects/images/portfolio/roundOne-project.png",
          full:
            "http://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots/screencapture-roundone-win-2018-05-30-01_43_35.png",
          details: [
            { feature: "Bootstrap" },
            { feature: "Custom SVG" },
            { feature: "Brand development" }
          ]
        }
      ],
      modal: false,
      modalUrl: "empty",
      gallery: [
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-sonicDistruptor.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-explosiveGel.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-revolver.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-pig.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-head.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-grapeCrusher.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-fordShoebox.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-explosiveGel.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-dog01.png"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-airStream.png"
        },
        {
          source: "Empty element to reset src",
          model: ""
        }
      ]
    };
  },
  created() {
    bus.$on("searchSubmitted", data => {
      this.search = data;
    });
  },
  methods: {
    topScroll() {
      window.scrollBy({
        top: -4000, // could be negative value
        left: 0,
        behavior: "smooth"
      });
    },
    botScroll() {
      document.querySelector(".mainBody__inner").scrollIntoView({
        behavior: "smooth"
      });
      window.scrollBy({
        top: 1500, // could be negative value
        left: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    filteredSites: function() {
      return this.websites.filter(website => {
        return website.name.match(this.search);
      });
    }
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
ul {
  list-style-type: none;
}
.project {
  margin-top: 2rem;
  width: 100%;
  height: 25rem;
  background-color: rgb(71, 71, 71);
  display: flex;
  overflow: hidden;

  &__info {
    background-color: #2b2b2b;
    flex: 1;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    z-index: 10;
    display: flex;
  }

  &__date {
    border-right: 4px solid #3a3a3a;
    width: 20%;

    h4 {
      position: relative;
      font-family: "adam", Helvetica, Arial, sans-serif;
      transform: rotate(-90deg);
      position: relative;
      top: 13rem;
      margin-left: -3rem;
      margin-right: -3rem;
      font-size: 0.75rem;
      font-weight: 100;
      letter-spacing: 1rem;
      text-align: center;
      color: #a3a3a3;
      line-height: 1.5rem;

      span {
        position: absolute;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        color: #3a3a3a;
        font-size: 4rem;
        top: 0.5rem;
        height: 100%;
        right: -5rem;
      }
    }
  }

  &__data {
    display: flex;
    flex-direction: column;
    width: 100%;

    .urlTitle {
      flex: 0.75;
      width: 100%;
      text-align: center;
      border-bottom: 4px solid #3a3a3a;
      transition: all 0.3s;

      &:hover {
        background: var(--main-highlight-color);
      }
      &:hover h2 {
        color: white;
      }

      h2 {
        color: #a3a3a3;
        font-family: "adam", Helvetica, Arial, sans-serif;
        font-size: 2.5rem;
        font-weight: 100;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .detailsTitle {
      width: 50%;
      text-align: center;
      flex: 0.4;
      border-right: 4px solid #3a3a3a;
      border-bottom: 4px solid #3a3a3a;

      h4 {
        color: #a3a3a3;
        font-family: "adam", Helvetica, Arial, sans-serif;
        font-weight: 100;
        font-size: 1.5rem;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .detailsList {
      flex: 1;
      ul {
        margin-top: 1.25rem;
        margin-left: 2rem;
        list-style-type: none;

        li {
          color: #a3a3a3;
          font-size: 1.5rem;
          font-family: "brandon", Helvetica, Arial, sans-serif;
          font-weight: 100;
        }
      }
    }
  }

  &__image {
    position: relative;
    margin-left: -10rem;
    background-color: #838383;
    background-size: cover;
    flex: 2;
    z-index: 9;
    filter: blur(2px);

    &::before {
      content: "";
      background: #e91e6369;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: all 0.3s;
      cursor: pointer;
    }

    &:hover::before {
      background: none;
    }
    &:hover {
      filter: blur(0px);
    }

    h3 {
      position: absolute;
      top: 2rem;
      right: 5rem;
      font-family: "adam", Helvetica, Arial, sans-serif;
      font-size: 3rem;
      font-weight: 100;
    }
  }
}

.loadMore {
  position: relative;
  z-index: 0;
  text-align: center;
  margin: 2rem 0 20rem 0;
  background-color: #bcbcbc;
  padding: 5rem 0 8rem 0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);

  & h4 {
    color: #565656;
    font-family: "adam", Helvetica, Arial, sans-serif;
    letter-spacing: 2rem;
  }
}

.modal {
  display: block;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
}
/*
MIGHT NOT NEED
.modal::before {
  content: "";
  background: #000000b0;
  width: 2000vh;
  position: absolute;
  top: -50vh;
  z-index: -1;
}
*/
.modalInner {
  width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.noResults {
  margin-top: 18px;
  background-color: #2b2b2b;

  h1 {
    padding: 4rem 10rem 5rem;
    text-align: center;
    font-family: "adam", Helvetica, Arial, sans-serif;
    color: #fff;
    font-weight: 100;
    font-size: 3rem;
    letter-spacing: 2rem;
  }
}
</style>
