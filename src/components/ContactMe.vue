<template>
  <div
    id="contact"
    class="py-20 md:py-24 px-8 sm:px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-[#eee]"
  >
    <div class="">
      <h2
        class="text-[#333] text-lg md:text-2xl font-bold font-serif text-center md:text-left"
      >
        Hey, have an idea or want to collaborate? I can help
      </h2>
      <img src="/blogging.svg" class="w-2/3 hidden md:block" alt="" />
    </div>
    <div class="">
      <form
        @submit.prevent="submitForm"
        id="form"
        class="flex flex-col items-center md:items-start gap-5"
      >
        <input
          type="text"
          class="py-3 px-4 w-full"
          name="name"
          v-model="name"
          placeholder="Your name..."
          required
        />
        <input
          type="email"
          class="py-3 px-4 w-full"
          name="email"
          v-model="email"
          placeholder="youremail@mail.com"
          required
        />
        <textarea
          name="message"
          v-model="message"
          class="py-3 px-4 w-full"
          placeholder="Your message's"
          required
        ></textarea>
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style="display: none"
        />

        <div
          id="turnstile"
          class="cf-turnstile"
          data-sitekey="0x4AAAAAAAcRJK0RzEwj7Myc"
        ></div>

        <button type="submit" class="btn btn-ghost font-bold w-full">
          Submit Form
        </button>

        <div id="result"></div>
      </form>
    </div>
  </div>
</template>
<script>
const _web3forms_key = "d68bf2f4-9075-42c4-9f3d-1200833452be";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const responseContact = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: _web3forms_key,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await responseContact.json();
      if (result.success) {
        alert("Message sent successfully");
      }
    },
  },
};
</script>
<style lang=""></style>
