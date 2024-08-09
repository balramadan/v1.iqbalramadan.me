<template>
  <div class="flex sm:h-dvh md:py-0 px-8 sm:px-10 lg:px-40">
    <div
      class="flex flex-col  sm:grid sm:grid-cols-3 gap-0 sm:gap-4 xl:gap-8 justify-center sm:items-center"
    >
      <div class="sm:col-span-2 my-5 sm:my-0">
        <h2 class="text-center text-sm sm:text-left items-center">
          Hello, I'm
          <br class="" /><span
            id="auto-text"
            class="mx-auto sm:mx-0 font-bold text-2xl sm:text-4xl lg:text-7xl text-[#000080] text-center"
          ></span>
        </h2>
        <p
          class="text-center sm:text-left text-sm sm:text-base text-black opacity-60 mt-5"
        >
          I am a specialist who can create innovative and responsive websites.
          Strong knowledge<br class="hidden xl:block" />
          of programming technologies such as Node.js, Vue, and TailwindCSS.
          Demonstrated <br class="hidden xl:block" />success in identifying and
          resolving complex code issues.
        </p>
        <div
          class="flex flex-col sm:flex-row mt-5 justify-center items-center sm:items-start sm:justify-start"
        >
          <a
            href="#contactMe"
            class="sm:mr-5 mb-2 sm:mb-0 sm:py-2 sm:px-4 border-2 border-[#000080] py-1 px-3 transition-all bg-[#000080] hover:bg-blue-950 rounded text-white"
            >Contact Me</a
          >
          <a
            download="CV_Iqbal_Ramadan"
            href="files/Iqbal-Ramadan-resumeEN.pdf"
            class="sm:py-2 sm:px-4 py-1 px-3 border-[#000080] border-solid border-2 transition-all text-[#000080] hover:bg-[#000080] rounded hover:text-white"
            >Download CV</a
          >
        </div>
      </div>
      <div class="order-first my-5 sm:my-0 sm:order-last mx-auto sm:mr-0">
        <img
          class="rounded-lg bg-[#000080] h-60 sm:h-auto xl:h-full w-full border border-[#000080] cursor-pointer origin-center brightness-90 hover:scale-110 hover:brightness-100 transition-all duration-300"
          src="/polo-shirt-profile.jpg"
          alt="Foto Profile"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Typed from "typed.js";

export default {
  mounted() {
    this.$nextTick(() => {
      const typed = new Typed("#auto-text", {
        strings: ["Iqbal Ramadan", "Frontend Developer"],
        typeSpeed: 60,
        loop: true,
        loopCount: Infinity,
        smartBackspace: true,
        backSpeed: 20,
        backDelay: 1500,
      });
    });
  },
  methods: {
    homeMouseEnter() {
      const linkNav = document.querySelectorAll("#linkNav");

      linkNav.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-black");
      });
    },
  },
};
</script>
<style lang=""></style>
