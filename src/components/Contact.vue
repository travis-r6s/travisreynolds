<template>
  <section id="contact">
    <div class="inner">
      <section>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
          <input
            type="hidden"
            name="form-name"
            value="contact">
          <p hidden>
            <label for="bot-field">
              Don’t fill this out:{" "}
              <input
                id="bot-field"
                name="bot-field"
                onChange="{this.handleChange}">
            </label>
          </p>
          <div class="field half first">
            <label for="name">
              Name
              <input
                id="name"
                type="text"
                name="name">
            </label>
          </div>
          <div class="field half">
            <label for="email">
              Email
              <input
                id="email"
                type="text"
                name="email">
            </label>
          </div>
          <div class="field">
            <label for="message">
              Message
              <textarea
                id="message"
                name="message"
                rows="6" />
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
              <input
                type="reset"
                value="Clear">
            </li>
          </ul>
        </form>
      </section>
      <section class="split">
        <section>
          <div class="contact-method">
            <span class="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:hello@travisreynolds.dev">hello@travisreynolds.dev</a>
          </div>
        </section>
        <section>
          <div class="contact-method">
            <span class="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              Address?
              <br>
              Not happening.
              <br>I get enough email spam as it is :)
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>
