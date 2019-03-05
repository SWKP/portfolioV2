<template>
  <div class="container">
    <h1>404 Page Not Found!</h1>
    <p>The requested page has never existed or it did at one point but is no longer working.</p>
    <a href="/">
      <button>Go Back!</button>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 80rem;
  padding: 10rem 5px 5px 5px;

  > * {
    margin: 15px;
  }
}
h1,
p {
  font-family: "adam", Helvetica, Arial, sans-serif;
  text-align: center;
}
button {
  position: relative;
  top: 0;
  transition: all 0.2s ease-out;
  padding: 1.5rem 4rem 2rem;
  font-size: 2rem;
  background: #2b2b2b;
  border: none;
  color: #a3a3a3;
  font-family: adam, Helvetica, Arial, sans-serif;
  cursor: pointer;
  outline: none;

  &:hover {
    position: relative;
    top: -5px;
    background: var(--main-highlight-color);
    color: #fff;
  }
}
</style>
