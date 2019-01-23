<template>
  <div class="grid-container">
    <div class="gallery">
      <div class="One" v-on:click="currentModel = 0, modal = true">
        <div class="item">
          <h1>1</h1>
          <img v-bind:src="gallery[0].source" alt>
        </div>
      </div>
      <div class="Two" v-on:click="currentModel = 1, modal = true">
        <div class="item">
          <h1>2</h1>
          <img v-bind:src="gallery[1].source" alt>
        </div>
      </div>
      <div class="Three" v-on:click="currentModel = 2, modal = true">
        <div class="item">
          <h1>3</h1>
          <img v-bind:src="gallery[2].source" alt>
        </div>
      </div>
      <div class="Four" v-on:click="currentModel = 3, modal = true">
        <div class="item">
          <h1>4</h1>
          <img v-bind:src="gallery[3].source" alt>
        </div>
      </div>
      <div class="Five" v-on:click="currentModel = 4, modal = true">
        <div class="item">
          <h1>5</h1>
          <img v-bind:src="gallery[4].source" alt>
        </div>
      </div>
      <div class="Six" v-on:click="currentModel = 5, modal = true">
        <div class="item">
          <h1>6</h1>
          <img v-bind:src="gallery[5].source" alt>
        </div>
      </div>
      <div class="Eight" v-on:click="currentModel = 6, modal = true">
        <div class="item">
          <h1>8</h1>
          <img v-bind:src="gallery[6].source" alt>
        </div>
      </div>
      <div class="Seven" v-on:click="currentModel = 9, modal = true">
        <div class="item">
          <h1>7</h1>
          <img v-bind:src="gallery[9].source" alt>
        </div>
      </div>
    </div>
    <div
      class="modal"
      v-bind:class="{makeVisible: modal}"
      v-on:click="currentModel = 10, modal = false"
    >
      <div class="sketchfab-embed-wrapper">
        <iframe
          width="640"
          height="480"
          v-bind:src="gallery[currentModel].model"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      modal: false,
      currentModel: 10,
      gallery: [
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-sonicDistruptor.png",
          model:
            "https://sketchfab.com/models/b6e540a280a94c9ca65082900a9a7e26/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-explosiveGel.png",
          model:
            "https://sketchfab.com/models/d3923a294cbd420d8cda75cf5907fd8c/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-revolver.png",
          model:
            "https://sketchfab.com/models/dd8b8415da0145b49e44bf44c7585171/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-pig.png",
          model:
            "https://sketchfab.com/models/299fe568575248eab045f87b8493299b/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-head.png",
          model:
            "https://sketchfab.com/models/b7e4a4ec0bfc46a28a72c2e3ba5c8bcd/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-grapeCrusher.png",
          model:
            "https://sketchfab.com/models/7abbd2f8563e487fa792cf6221c47642/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-fordShoebox.png",
          model:
            "https://sketchfab.com/models/7060f91e5da2473f96cf7df80b5f31d5/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-explosiveGel.png",
          model:
            "https://sketchfab.com/models/d3923a294cbd420d8cda75cf5907fd8c/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-dog01.png",
          model:
            "https://sketchfab.com/models/ce326fbbc78b4f31bb25b3e1495f5468/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source:
            "http://karolponiatowski.com/projects/images/portfolio/3d/3d-airStream.png",
          model:
            "https://sketchfab.com/models/098a4b67368b4b36ac9c1ebc96d9e509/embed?autospin=0.2&amp;autostart=1"
        },
        {
          source: "Empty element to reset src",
          model: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.grid-container {
  position: relative;
}
.gallery {
  position: relative;
  left: 12rem;
  grid-gap: 2rem;
  margin: 10rem 0;
  transform: rotate(-45deg);
  margin: 10rem auto;
  display: grid;
  height: 900px;
  width: 900px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: ". Four Four Four . . ." ". Four Four Four Two Two ." "Five Five One One Two Two ." "Five Five One One Three . ." ". . One One Three . Eight" "Seven . Six Six Three . ." ". . Six Six . . ." ". . . . . . .";

  h1 {
    font-family: "adam", Helvetica, Arial, sans-serif;
    font-weight: 900;
    font-size: 5rem;
    color: #ffffff;
    text-shadow: 5px 5px 9px #2b2b2bba;
  }
}
.modal {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  top: 50%;
  transform: translateY(-50%);

  .sketchfab-embed-wrapper {
    width: 640px;
    margin: 0 auto;
    display: block;
    overflow: hidden;
  }
}

.modal::before {
  content: "";
  background: #000000b0;
  width: 2000vh;
  height: 2000vh;
  position: absolute;
  top: -50vh;
  z-index: -1;
}

.One {
  grid-area: One;
  overflow: hidden;
  text-align: center;
  position: relative;

  img {
    position: absolute;
    width: 500px;
    top: -50%;
    left: -36%;
  }
}

.Two {
  grid-area: Two;
  background: rgb(2, 87, 126);
  overflow: hidden;
  text-align: center;

  img {
    position: absolute;
    width: 500px;
    top: -112%;
    left: -50%;
  }
}

.Three {
  grid-area: Three;
  background: rgb(145, 44, 44);
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 400px;
    top: 0%;
    left: -80%;
  }
}

.Four {
  grid-area: Four;
  background: rgb(216, 191, 191);
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 600px;
    top: -70%;
    left: -80%;
  }
}

.Five {
  grid-area: Five;
  background: rgb(253, 111, 111);
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 400px;
    top: -55%;
    left: 30%;
  }
}

.Six {
  grid-area: Six;
  background: rgb(136, 51, 233);
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 500px;
    top: 0%;
    left: 0%;
  }
}

.Seven {
  grid-area: Seven;
  background: rgb(131, 204, 14);
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 200px;
    top: 0%;
    left: 0%;
  }
}

.Eight {
  grid-area: Eight;
  background: rgb(185, 87, 161);
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    width: 300px;
    top: -100%;
    left: -100%;
  }
}

.item {
  transform: rotate(45deg);
  cursor: pointer;
}

.One,
.Two,
.Three,
.Four,
.Five,
.Six,
.Seven,
.Eight {
  img {
    transform: scale(4);
    filter: blur(1px);
    transition: all 0.3s linear;
  }

  &:hover img {
    filter: blur(0);
    transition: all 0.2s linear;
    transform: scale(1.5);
  }

  img {
    z-index: -1;
  }
}

.makeVisible {
  display: block;
}
</style>
