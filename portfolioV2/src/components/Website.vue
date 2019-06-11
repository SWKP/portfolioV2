<template>
  <div>
    <ul>
      <li v-for="(website, index) in filteredSites" transition="stagger" stagger="100">
        <div class="project">
          <img class="expandIcon" src="../assets/svg/expand-arrow.svg" alt="expand icon">
          <div class="project__info">
            <div class="project__date">
              <h4>
                {{ website.date }}
                <span>{{ index + 1 }}</span>
              </h4>
            </div>
            <div class="project__data">
              <div class="url__title">
                <h2>{{ website.url }}</h2>
              </div>
              <transition name="fade" mode="out-in">
                <div
                  class="details"
                  v-if="!website.swapData"
                  key="details"
                  v-on:click="website.swapData = !website.swapData"
                >
                  <div class="details__title">
                    <h4>
                      Project Details
                      <i class="fa fa-search"></i>
                    </h4>
                  </div>
                  <div class="details__list">
                    <ul>
                      <li v-for="detail in website.details">{{ detail.feature }}</li>
                    </ul>
                  </div>
                </div>
                <div
                  class="details"
                  v-else-if="website.swapData"
                  key="desc"
                  v-on:click="website.swapData = !website.swapData"
                >
                  <div class="details__description">
                    <p>{{ website.description }}</p>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <!-- On click project image multiple things will happen -->
          <div
            v-on:click="modalUrl=website.full, modal = true, toggleBodyClass('addClass', 'noScroll'), projectNumber(website.number), modalItem = 'main'"
            class="project__image"
            :style="{ backgroundImage: 'url(' + website.image + ')' }"
          >
            <h3>{{ website.name }}</h3>
          </div>
        </div>
      </li>
    </ul>
    <div class="noResults">
      <h1 v-if="!filteredSites.length">Sorry, no results.</h1>
    </div>
    <div class="loadMore">
      <h4>Load More Websites</h4>
    </div>
    <!-- MODALPOPUP STARTS HERE -->
    <transition name="modal">
      <div class="modal" v-show="modal" transition="fadeIn">
        <div class="modalInner">
          <img class="full" v-if="modalItem === 'main'" v-bind:src="modalUrl">

          <div class="modal__description" v-if="modalItem === 'desc'">
            <h3>{{ websites[modalNumber].name}}</h3>
            <p>{{ websites[modalNumber].description}}</p>
            <ul class="modal__details">
              <li v-for="detail in websites[modalNumber].details">{{ detail.feature }}</li>
            </ul>
          </div>

          <div class="modal__concept" v-if="modalItem === 'concept'">
            <img src="../assets/svg/exclamation-triangle.svg" alt="exclamation">
            <h4>Will be updated with design concepts in the future.</h4>
          </div>
          <img class="preloader" src="../assets/preloader/preloader.gif" alt>
          <div class="modal__menu">
            <button v-on:click="modalItem = 'main'">SITE</button>
            <button v-on:click="modalItem = 'desc'">INFO</button>
            <button v-on:click="modalItem = 'concept'">CONCEPT</button>
            <button
              class="closeModal"
              v-on:click=" modalUrl=' ', modal = false, toggleBodyClass('removeClass', 'noScroll')"
            >CLOSE</button>
          </div>
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
      modalItem: "main",
      websites: [
        {
          number: "1",
          date: "Sep 2017",
          name: "napa valley film festival",
          url: "nvff.org",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/nvff-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-nvff-org-min.png",
          concept: "",
          details: [
            { feature: "Wordpress" },
            { feature: "High traffic Ecommerce" },
            { feature: "Custom navigation" },
            { feature: "Events implementation" }
          ],
          swapData: false,
          description:
            "A collaborative wordpress website that needed to support high traffic e-commerce ticket sales and live events for the 2017 Napa Valley film festival.",
          descriptionFull: "Nvff full description here."
        },
        {
          number: "2",
          date: "Feb 2018",
          name: "dixicoin",
          url: "dixicoin.net",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/dixicoin-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-dixicoin-net-min.png",
          concept: "",
          details: [
            { feature: "Bootstrap" },
            { feature: "Custom SVG" },
            { feature: "PHP" }
          ],
          swapData: false,
          description:
            "Dixicoin was a previously established digital cryptocurrency for gamers that needed a new website. The website was built in Bootstrap with a PHP enabled contact form.",
          descriptionFull: "Dixicoin full description here."
        },
        {
          number: "3",
          date: "May 2018",
          name: "petaluma museum",
          url: "petalumamuseum.com",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/petalumaMuseum-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-petalumamuseum-min.png",
          concept: "",
          details: [
            { feature: "Wordpress" },
            { feature: "Agile development" },
            { feature: "Events implementation" }
          ],
          swapData: false,
          description:
            "The Petaluma Museum is a non-profit that needed a new updated website. I worked on a Scrum team primarily as a web designer but I helped with the development process and bug fixes.",
          descriptionFull: "Petaluma Museum full description here."
        },
        {
          number: "4",
          date: "Mar 2018",
          name: "roundone",
          url: "roundone.win",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/roundOne-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-roundone-win-min.png",
          concept: "",
          details: [
            { feature: "Bootstrap" },
            { feature: "Custom SVG" },
            { feature: "Brand development" }
          ],
          swapData: false,
          description:
            "Roundone was a cryptocurrency initial coin offering where users could place bets on teams competing in of tournament events. The website was built in Bootstrap.",
          descriptionFull: "Roundone full description here."
        },
        {
          number: "5",
          date: "June 2017",
          name: "Feast it Forward",
          url: "feastitforward.com",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/feast-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-feastitforward-min.png",
          concept: "",
          details: [
            { feature: "Wordpress" },
            { feature: "PHP" },
            { feature: "Graphic Design" },
            { feature: "E-commerce" }
          ],
          swapData: false,
          description:
            "Feast it Forward is a food network with a wine tasting studio in Napa, CA. Their website required an event calendar system, e-commerce store integration and SEO optimization.",
          descriptionFull: "Feast it Forward full description here."
        },
        {
          number: "6",
          date: "January 2017",
          name: "Jeremy Jack Inc.",
          url: "jeremyjackinc.com",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/jeremyjack-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-jeremyjackinc-min.png",
          concept: "",
          details: [
            { feature: "Bootstrap" },
            { feature: "Custom SVG" },
            { feature: "Brand development" }
          ],
          swapData: false,
          description:
            "A Napa Valley HVAC service company that was previously using a simple Squarespace website and wanted a website where they could share their process.",
          descriptionFull: "Jeremy Jack full description here."
        },
        {
          number: "7",
          date: "August 2018",
          name: "CryptoCue",
          url: "cryptocue.io",
          image:
            "https://karolponiatowski.com/projects/images/portfolio/cryptoCue-project.png",
          full:
            "https://karolponiatowski.com/projects/images/portfolio/Websites-FullScreenshots-optimized/screencapture-cryptocue-io-min.png",
          concept: "",
          details: [
            { feature: "Wordpress" },
            { feature: "Custom Graphics" },
            { feature: "Members Area" },
            { feature: "Brand Development" }
          ],
          swapData: false,
          description:
            "CryptoCue is a service aimed at helping users make informed crypto currency investment decisions. I rebranded and restructured it's existing content from their old site and made it more clearcut.",
          descriptionFull: "CryptoCue full description here."
        }
      ],
      modal: false,
      modalUrl: "empty",
      modalNumber: "1",
      gallery: [
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-sonicDistruptor.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-explosiveGel.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-revolver.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-pig.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-head.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-grapeCrusher.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-fordShoebox.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-explosiveGel.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-dog01.png"
        },
        {
          source:
            "https://karolponiatowski.com/projects/images/portfolio/3d/3d-airStream.png"
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
    projectNumber: function(number) {
      this.modalNumber = number - 1;
      console.log("Modal number is " + this.modalNumber);
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },

  // Just in case you like to do it when page or component is mounted or destroyed.
  mounted() {
    this.toggleBodyClass("addClass", "yourClassName");
  },
  destroyed() {
    this.toggleBodyClass("removeClass", "yourClassName");
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
  position: relative;
  z-index: 1;
  list-style-type: none;
}
.project {
  margin-top: 2rem;
  width: 100%;
  height: 25rem;
  background-color: rgb(71, 71, 71);
  display: flex;
  overflow: hidden;

  img.expandIcon {
    position: absolute;
    z-index: 3;
    width: 25px;
    right: 0;
    margin: 10px 10px 0px 0px;
    opacity: 0.25;
    pointer-events: none;

    @media (max-width: 560px) {
      margin: 207px 15px 0px 0px;
    }
  }

  &__info {
    background-color: #2b2b2b;
    flex: 1;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    z-index: 10;
    display: flex;
    min-width: 500px;
    @media (max-width: 560px) {
      clip-path: polygon(100% 0, 100% 33%, 16% 33%, 16% 100%, 0% 100%, 0% 0);
      background-color: #2b2b2b00;
    }
  }

  &__date {
    border-right: 5px solid #3a3a3a;
    width: 26%;

    @media (max-width: 560px) {
      width: 20%;
      border-right: none;
    }

    h4 {
      position: relative;
      font-family: "adam", Helvetica, Arial, sans-serif;
      transform: rotate(-90deg);
      position: relative;
      top: 13rem;
      margin-left: -3rem;
      margin-right: -3rem;
      font-size: 1.1rem;
      font-weight: 100;
      letter-spacing: 1rem;
      text-align: center;
      color: #3a3a3a;
      line-height: 1.5rem;

      span {
        position: absolute;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        color: #3a3a3a;
        font-size: 3.5rem;
        top: 0.5rem;
        height: 100%;
        right: -3rem;
      }
    }
  }

  &__data {
    display: flex;
    flex-direction: column;
    width: 100%;

    .url__title {
      position: relative;
      left: 0;
      flex-basis: 85px;
      width: 110%;
      text-align: center;
      border-bottom: 5px solid #3a3a3a;
      transition: all 0.3s;
      padding-right: 40px;

      @media (max-width: 560px) {
        width: 80vw;
      }

      h2 {
        color: #a3a3a3;
        font-family: "adam", Helvetica, Arial, sans-serif;
        font-size: 2.5rem;
        font-weight: 100;
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        @media (max-width: 560px) {
          text-align: center;
          width: 85%;
          font-size: 2rem;
          color: #3a3a3a;
          font-size: 2.5rem;
          text-align: right;
        }
      }
    }

    .details__title {
      cursor: pointer;
      position: relative;
      width: 50%;
      text-align: center;
      height: 50px;
      border-right: 5px solid #3a3a3a;
      border-bottom: 5px solid #3a3a3a;
      transition: all 0.3s ease-out;

      &:hover {
        position: relative;
        background: var(--main-highlight-color);
      }
      &:hover h4 {
        color: #3a3a3a;
        position: relative;
      }

      .fa-search:before {
        color: #3a3a3a;
      }

      h4 {
        color: #a3a3a3;
        font-family: "adam", Helvetica, Arial, sans-serif;
        font-weight: 100;
        font-size: 1.5rem;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        line-height: 3rem;
      }
    }

    .details__list {
      cursor: pointer;
      flex: 1;
      ul {
        margin-top: 1.25rem;
        margin-left: 2rem;
        list-style-type: none;

        li {
          color: #a3a3a3;
          font-family: "Poppins";
          font-size: 1.4rem;
          font-weight: 300;
        }
      }
    }

    .details__description {
      cursor: pointer;
      p {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: 300;
        max-width: 280px;
        margin: 15px 0 0 25px;
      }
    }
  }

  &__image {
    position: relative;
    margin-left: -10rem;
    background-color: #838383;
    background-size: cover;
    flex: 2;
    z-index: 2;
    filter: blur(4px);
    transition: all 0.3s;

    @media (max-width: 560px) {
      margin-left: -60rem;
      filter: blur(4px);
    }

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
      transform: scale(1.1);
    }

    h3 {
      position: absolute;
      top: 2rem;
      right: 5rem;
      font-family: "adam", Helvetica, Arial, sans-serif;
      font-size: 3rem;
      font-weight: 100;

      @media (max-width: 560px) {
        visibility: hidden;
      }
    }
  }
}

.loadMore {
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 1vw 0 10vw 0;
  background-color: #bcbcbc;
  padding: 5rem 0 10rem 0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0% 50%);
  top: 0;
  transition: all 0.2s ease-out;

  @media (max-width: 560px) {
    padding: 5rem 0 12rem 0;
  }

  & h4 {
    color: #3a3a3a;
    font-family: "adam", Helvetica, Arial, sans-serif;
    letter-spacing: 1vw;
  }

  &:hover {
    position: relative;
    top: 5px;
    cursor: pointer;
  }
}

.modal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  transition: all 0.3s ease;

  &__details {
    list-style-type: circle !important;
    text-align: left;
    color: #bcbcbc;
    font-family: "Poppins";
    font-size: 1.5rem;
  }
}
.closeModal {
  position: relative;
  top: 0;
  right: 0;
}

.modalInner {
  background-color: #1a1e1ecc;
  overflow-y: scroll !important;
  width: 100vw;
  height: 100vh;
  text-align: center;

  .full {
    min-width: 350px;
    position: relative;
    width: 75vw;
    cursor: pointer;
    transform: scaleZ(1);
    transition: all 0.5s ease 0.75s;
    z-index: 99;
  }
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 90;
  }
}

.modal__menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 125px;
  height: 300px;
  background: #2b2b2b;
  right: 16px;
  top: 35%;
  padding-right: 25px;
  clip-path: polygon(-15% 19%, 0 19%, 100% 0, 100% 100%, 0% 81%, -15% 81%);
  z-index: 99;

  @media (max-width: 700px) {
    flex-direction: row;
    width: 100%;
    height: 50px;
    background: #2b2b2b;
    top: 94vh;
    right: 0;
    bottom: 0;
    padding-right: 25px;

    clip-path: none;
    z-index: 99;
    clip-path: none;
    button {
      margin: 5px 2.5px !important;
      transition: all 0.3s ease-out;

      &:hover {
        left: 0 !important;
        bottom: 10px !important;
      }
    }
  }

  button {
    position: relative;
    left: 0;
    text-transform: uppercase;
    border: none;
    padding: 10px;
    font-size: 1.5rem;
    background: #bcbcbc;
    color: #2b2b2b;
    font-family: "Brandon";
    cursor: pointer;
    outline: none;
    margin: 2.5px 0;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    &:hover {
      position: relative;
      left: -10px;
      background: var(--main-highlight-color);
    }
  }
}

.modal__description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2b2b2b;
  padding: 30px 50px;
  max-width: 800px;
  z-index: 99;
  clip-path: polygon(10% 0, 0 15%, 0 100%, 90% 100%, 100% 85%, 100% 0);
  min-width: 400px;

  h3 {
    font-family: "Brandon";
    text-transform: capitalize;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  h4 {
    text-align: left;
    font-family: "Brandon";
    font-weight: 300;
    margin-left: 10px;
    color: #474747;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 25px;
  }
}
.modal__concept {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2b2b2b;
  width: 400px;
  min-height: 200px;
  z-index: 91;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  clip-path: polygon(10% 0, 0 15%, 0 100%, 90% 100%, 100% 85%, 100% 0);

  img {
    width: 50px;
    opacity: 0.7;
  }

  h4 {
    color: #bcbcbc;
    font-family: "Brandon";
    text-transform: uppercase;
    margin: 15px 0;
    font-size: 1.75rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}
.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}
.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

.noResults {
  margin-top: 18px;
  background-color: #2b2b2b;

  h1 {
    padding: 4rem 10rem 5rem;
    text-align: center;
    font-family: "Poppins";
    font-weight: 100;
  }
}

.noScroll {
  overflow-y: hidden !important;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modalInner img,
.modal-leave-active .modalInner img {
  -webkit-transform: scaleZ(0);
  transform: scaleX(0);
}
</style>
