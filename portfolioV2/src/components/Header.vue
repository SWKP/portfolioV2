<template>
  <div class="header">
    <img class="headerLogo" src="../assets/svg/kp-logo-v1.svg" alt="kp logo">
    <div class="header__inner">
      <h4>
        <span>-</span> Karol Poniatowski
        <span>-</span>
      </h4>
      <h1>Web dev & Design</h1>
      <h5>Napa, California</h5>
      <span class="lineOne">
        <p>Scroll (Down)</p>
      </span>
      <span class="lineTwo"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  height: 100vh;
  background-color: #3a3a3a;
  margin-bottom: 175px;
  //background: linear-gradient(#868686 -200%, #3a3a3a);

  &__inner {
    min-width: 375px;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    z-index: 0;

    h1 {
      font-family: "adam", Helvetica, Arial, sans-serif;
      letter-spacing: 1.25rem;
      font-weight: 100;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
      font-size: 6rem;

      @media (max-width: 760px) {
        letter-spacing: 1rem;
        font-size: 4rem;
      }
    }
    h4 {
      font-family: "adam", Helvetica, Arial, sans-serif;
      letter-spacing: 2.5rem;
      font-weight: 100;
      color: #606060;

      @media (max-width: 760px) {
        letter-spacing: 1rem;
      }

      @media (max-width: 460px) {
        span {
          display: none;
        }
      }
    }
    h5 {
      font-family: "adam", Helvetica, Arial, sans-serif;
      letter-spacing: 2.5rem;
      font-weight: 100;
      background-color: #2b2b2b;
      padding: 1.4rem;
      color: #b2b2b2;
      max-width: 750px;
      margin: auto;

      @media (max-width: 520px) {
        letter-spacing: 1rem;
      }
    }

    .lineOne {
      border-left: 4px dotted #2b2b2b;
      height: 250px;
      position: absolute;
      left: 50%;
      margin-left: -3px;
      top: 135px;

      p {
        font-family: "adam", Helvetica, Arial, sans-serif;
        color: #cddc39;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        position: relative;
        top: 113px;
        font-size: 1.4rem;
        right: 60px;
      }

      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #2b2b2b;
        position: absolute;
        left: -6px;
        bottom: -9px;
        transform: rotate(-90deg);
      }
    }

    .lineTwo {
      border-left: 4px dotted #2b2b2b;
      height: 999vh;
      position: absolute;
      left: 50%;
      margin-left: -3px;
      top: 430px;
      z-index: -1;
    }
  }
}

img.headerLogo {
  width: 48%;
  opacity: 0.07;
  z-index: 1;
  margin: 0;
  position: absolute;
  top: 56%;
  left: 49%;
  transform: translate(-50%, -50%);
}
</style>
