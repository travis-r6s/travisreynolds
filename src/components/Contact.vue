<template>
  <section id="contact">
    <div class="inner">
      <section>
        <form
          name="contact"
          @submit.prevent="sendForm">
          <input
            type="hidden"
            name="form-name"
            value="contact">
          <div class="field half first">
            <label for="name">
              Name
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                required>
            </label>
          </div>
          <div class="field half">
            <label for="email">
              Email
              <input
                id="email"
                v-model="form.email"
                type="text"
                name="email"
                required>
            </label>
          </div>
          <div class="field">
            <label for="message">
              Message
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="6"
                required />
            </label>
          </div>
          <ul class="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                class="special">
            </li>
            <li>
              <p
                v-if="loading"
                class="sent">
                Sending message...
              </p>
              <p
                v-if="sent"
                class="sent">
                Sent! Thank you.
              </p>
              <p
                v-if="error"
                class="sent">
                Something went wrong - please try again.
              </p>
            </li>
          </ul>
        </form>
      </section>
      <section class="split">
        <section>
          <div class="contact-method">
            <h3>Email</h3>
            <a href="mailto:hello@travisreynolds.dev">hello@travisreynolds.dev</a>
          </div>
        </section>
        <section>
          <div class="contact-method">
            <h3>Address</h3>
            <span>
              Address?
              <br>
              Not happening.
              <br>I get enough email spam as it is ¯\_(ツ)_/¯
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    sent: false,
    error: false,
    form: {
      name: '',
      email: '',
      message: ''
    }
  }),
  methods: {
    async sendForm () {
      this.loading = true
      try {
        await fetch('https://formspree.io/moqdpogz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        })
        this.loading = false
        this.sent = true
      } catch (error) {
        this.loading = false
        this.sent = false
        this.error = true
        console.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sent {
  margin: 0
}
</style>
