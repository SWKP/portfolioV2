<template>
  <div class="header">
    <div class="header__inner">
      <h4>- Karol Poniatowski -</h4>
      <h1>Web dev & Design</h1>
      <h5>Napa, California</h5>
      <span>Scroll (Down)</span>
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
  //background: linear-gradient(#868686 -200%, #3a3a3a);

  &__inner {
    width: 765px;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;

    h1 {
      font-family: "adam", Helvetica, Arial, sans-serif;
      letter-spacing: 1.25rem;
      font-weight: 100;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }
    h4 {
      font-family: "adam", Helvetica, Arial, sans-serif;
      letter-spacing: 2.5rem;
      font-weight: 100;
      color: #606060;
    }
    h5 {
      font-family: "adam", Helvetica, Arial, sans-serif;
      letter-spacing: 2.5rem;
      font-weight: 100;
      background-color: #2b2b2b;
      padding: 1.4rem;
      color: #b2b2b2;
    }

    span {
      font-family: "adam", Helvetica, Arial, sans-serif;
      color: #cddc39;
      position: absolute;
      left: 30%;
      top: 300px;
      margin-left: 0.125rem;
      width: 30rem;
      height: 0.25rem;
      transform: rotate(-90deg);
      background-color: #2b2b2b;

      &::before {
        content: "";
        height: 34rem;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        border-right: 3px solid #2b2b2b;
        position: absolute;
        left: -40rem;
        width: 34rem;
        bottom: 0rem;
        z-index: -1;
      }

      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #2b2b2b;
        position: absolute;
        left: 0px;
        bottom: -9px;
      }
    }
  }
}
</style>
