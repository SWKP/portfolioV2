<template>
  <div class="contact-form">
    <h1 class="contact-form_title">Fill form below</h1>
    <!-- 
      v-on:submit="onSubmitNew"
      v-bind:action="formAction()"
    action="https://script.google.com/macros/s/AKfycbzEoV3NDqpFHhr5VwgEHi1boDzcCpjE2fCBdFy6yxXsFkMB4lo/exec"-->
    <form v-if="!contact.thanks" @submit.prevent="postNow" id="gform" method="POST">
      <h2>1</h2>
      <input
        required
        name="name"
        v-model="contact.name"
        placeholder="Name"
        type="text"
        autocomplete="off"
      >
      <br>
      <h2>2</h2>
      <input
        required
        name="title"
        v-model="contact.title"
        placeholder="Title"
        type="text"
        autocomplete="off"
      >
      <br>
      <h2>3</h2>
      <input
        required
        name="email"
        v-model="contact.email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      >
      <br>
      <h2>4</h2>
      <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
      <br>
      <input v-model="contact.other" type="text" name="other" autocomplete="off">
      {{ contact.other }}
      <!--<input type="submit" value="Submit">-->
      <div class="button contact-form">
        <span class="button__mask"></span>
        <span class="button__text">
          <input
            class="btn btn-outline-primary btn-rounded waves-effect wow fadeInUp"
            type="submit"
            value="Send"
          >
        </span>
      </div>
    </form>
    <transition name="fade" mode="out-in">
      <div v-if="contact.thanks" class="sent">Message Sent!</div>
    </transition>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      contact: {
        name: "",
        title: "",
        email: "",
        message: "",
        other: "",
        thanks: false
      },

      isSending: false
    };
  },
  methods: {
    postNow: function() {
      if (this.contact.other == "") {
        axios
          .post(
            "https://script.google.com/macros/s/AKfycbzEoV3NDqpFHhr5VwgEHi1boDzcCpjE2fCBdFy6yxXsFkMB4lo/exec",
            `
            <h2>Name: ${this.contact.name}<h2>
            <h2>Name: ${this.contact.title}<h2>
            <h2>Email: ${this.contact.email}<h2>
            <h2>Message: ${this.contact.message}<h2>
            `,
            {
              headers: {
                "Content-type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(
            (this.contact.thanks = true),
            (this.contact.name = ""),
            (this.contact.title = ""),
            (this.contact.email = ""),
            (this.contact.message = "")
          )
          .then(r => console.log("r: ", JSON.stringify(r, null, 2)));
      }
    },
    /**
     * Clear the form
     */
    clearForm: function() {
      console.log("Form Clear");
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  position: relative;
  font-family: 16px;
  margin: 0rem auto;
  max-width: 600px;
  width: 100%;
  z-index: 1;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  background: #2b2b2b;
  padding: 4rem 2.5rem 8rem;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0% 80%);
  color: #bfc239;
  font-family: "adam", Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 200;
  text-align: center;
  letter-spacing: 1rem;
  margin-bottom: 5rem;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  font-family: "brandon", Helvetica, Arial, sans-serif;
  padding: 15px 20px;
  margin-bottom: 15px;
  outline: none;
  background: #2b2b2b;
  border: none;
  width: 90%;
  color: #a32a52;
  transition: background-color 200ms linear;
}

.contact-form input[type="email"] {
  top: -3px;
  position: relative;
}

.contact-form textarea {
  resize: none;
  width: 90%;
}

.contact-form input:focus,
textarea:focus {
  background-color: #bcbcbc;
}

.contact-form .button {
  background: var(--main-highlight-color);
  color: white;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1rem;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  font-size: 15px;
}
.contact-form input[name="other"] {
  display: none;
}

form h2 {
  font-family: "brandon", Helvetica, Arial, sans-serif;
  background: #a32a52;
  color: #3a3a3a;
  display: inline-block;
  width: 9%;
  text-align: center;
  font-size: 3.5rem;
  position: relative;
  top: 7px;
  right: 5px;

  &:nth-of-type(2) {
    top: 6px;
  }
  &:nth-of-type(3) {
    top: 4px;
  }

  &:nth-of-type(4) {
    top: -96px;
  }
}
.sent {
  font-family: "adam", Helvetica, Arial, sans-serif;
  width: 100%;
  text-align: center;
  background: #bfc239;
  padding: 10rem;
  font-size: 2.5rem;
  color: #3a3a3a;
}

.fade-enter-active,
.fade-leave-active {
  transform: rotateX(0deg);
  transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
  transition: all 0.5s ease-out;
}

/*Misc fixes*/
.contact-form span.button__text {
  padding: 0rem;
}
input[type="submit"] {
  background: transparent;
  border: none;
  width: 100%;
  font-family: "brandon", Helvetica, Arial, sans-serif;
  font-size: 2.2rem;
  text-transform: uppercase;
  color: white;
  padding: 2rem;
  cursor: pointer;
}
</style>
