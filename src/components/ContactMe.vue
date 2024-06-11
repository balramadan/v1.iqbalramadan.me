<template>
  <div id="contact"
    class="py-20 md:py-24 px-8 sm:px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-[#eee]"
  >
    <div class="">
      <h2 class="text-[#333] text-lg md:text-2xl font-bold font-serif text-center md:text-left">
        Hey, have an idea or want to collaborate? I can help
      </h2>
      <img src="/blogging.svg" class="w-2/3 hidden md:block" alt="">
    </div>
    <div class="">
      <form method="POST" id="form" class="flex flex-col items-center md:items-start gap-5">
        <input
          type="hidden"
          name="access_key"
          value="d68bf2f4-9075-42c4-9f3d-1200833452be"
        />

        <input
          type="text"
          class="py-3 px-4 w-full"
          name="name"
          placeholder="Your name..."
          required
        />
        <input
          type="email"
          class="py-3 px-4 w-full"
          name="email"
          placeholder="youremail@mail.com"
          required
        />
        <textarea
          name="message"
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

        <button type="submit" class="btn btn-ghost font-bold w-full">Submit Form</button>

        <div id="result"></div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    
  },
};
</script>
<style lang=""></style>
