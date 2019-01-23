<template>
  <div class="contact-form">
    <h1 class="contact-form_title">Shoot me a message</h1>

    <div v-if="isSending" class="loading">Sending...</div>

    <form class="form" @submit="onSubmit">
      <input
        required
        name="name"
        v-model="contact.name"
        placeholder="Name"
        type="text"
        autocomplete="off"
      >
      <input
        required
        name="email"
        v-model="contact.email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      >
      <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
    </form>
    <div class="button">
      <span class="button__mask"></span>
      <span class="button__text">Send</span>
      <span class="button__text button__text--bis">Send</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      },

      isSending: false
    };
  },
  methods: {
    /**
     * Clear the form
     */

    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = "";
      }
    },

    /**
     * Handler for submit
     */

    onSubmit(evt) {
      console.log("Submitted");
      evt.preventDefault();

      this.isSending = true;

      setTimeout(() => {
        // Build for data
        let form = new FormData();
        for (let field in this.contact) {
          form.append(field, this.contact[field]);
        }

        // Send form to server
        this.$http
          .post("/app.php", form)
          .then(response => {
            console.log(response);
            this.clearForm();
            this.isSending = false;
          })
          .catch(e => {
            console.log(e);
          });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  font-family: 16px;
  margin: 15rem auto;
  max-width: 600px;
  width: 100%;
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
  color: #564e4e;
  font-family: "adam", Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 200;
  text-align: center;
  letter-spacing: 1rem;
  margin-bottom: 2rem;
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
  transition: background-color 200ms linear;
}

.contact-form textarea {
  resize: none;
}

.contact-form input:focus,
textarea:focus {
  background-color: #bcbcbc;
}

.contact-form .button {
  background: var(--main-highlight-color);
  border: solid 1px #da552f;
  color: white;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1rem;
}

/*
.contact-form .button:hover {
	background: #ea532a;
	border: solid 1px #ea532a;
}
*/

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  font-size: 15px;
}
</style>
