<template>
<div class="container">
  <div class="header">
    <div class="header__inner">
      <h4>- Karol Poniatowski -</h4>
      <h1>Web dev & Design</h1>
      <h5>Napa, California</h5>
    </div>
  </div>

  <div class="mainBody">
    <div class="projectsTitle">
      <h1>My Projects</h1>
    </div>
    <div class="mainNavigation">
        <ul>
          <li>Websites</li>
          <li>Code</li>
          <li>3d</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    <div class="mainBody__inner">
      <div class="mainBody__projects">
        <div class="project">

        </div>
        <div class="project">

        </div>
        <div class="project">

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #3a3a3a;
  overflow: hidden;
}
.header {
  height: 80vh;
  background-color: #3a3a3a;

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

    &::after {
      font-family: "adam", Helvetica, Arial, sans-serif;
      content: "Scroll (down)";
      color: white;
      position: absolute;
      left: 30%;
      top: 300px;
      margin-left: 0.125rem;
      width: 30rem;
      height: 0.25rem;
      transform: rotate(-90deg);
      background-color: #2b2b2b;
    }
  }
}

.mainBody {
  display: flex;
  flex-direction: column;
  background: #494949;
  max-width: 120rem;
  height: 100rem;
  margin: 0 auto;

  .projectsTitle {
    display: inline-block;
    width: 200%;
    position: relative;
    right: 150%;
    background: #BCBCBC;
    margin: 10rem 0;
    -webkit-clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 97% 0, 100% 100%, 0% 100%);

    h1 {
      padding: 4rem;
      text-align: right;
      font-family: "adam", Helvetica, Arial, sans-serif;
      color: #777777;
      font-weight: 100;
      font-size: 4rem;
      padding-right: 10rem;
      letter-spacing: 2rem;
    }
  }
  &__inner {
    top: 20rem;
  }

  &__projects {

    .project {
      margin-top: 8rem;
      width: 100%;
      height: 25rem;
      background: #2B2B2B; 
    }
  }
}

.mainNavigation {
  background: #2B2B2B;
  max-width: 70rem;
  align-self: flex-end;

  & ul li {
    display: inline-block;
    color: #C6C6C6;
    font-size: 1.75rem;
    font-family: "brandon", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    padding: 2.5rem 3.5rem;

    &:hover {
      background-color: white;
    }
  }
}
</style>
