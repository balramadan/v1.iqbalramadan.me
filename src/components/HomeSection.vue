<template>
  <div class="section px-8 sm:px-10 lg:px-28">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center"
    >
      <div class="">
        <h2 class="text-center sm:text-left items-center">
          Hello, I'm
          <br class="" /><span
            id="auto-text"
            class="mx-auto sm:mx-0 font-bold text-2xl sm:text-4xl text-orange-600 text-center"
          ></span>
        </h2>
        <p
          class="text-center sm:text-left text-sm sm:text-base text-stone-500 mt-4"
        >
          Resourceful professional with successful track record in developing
          innovative web designs and features. Possesses solid knowledge of
          HTML, CSS, JavaScript and TailwindCSS with ability to quickly learn
          new technologies. Demonstrated success in identifying and resolving
          complex code issues.
        </p>
        <div
          class="flex flex-col sm:flex-row mt-5 justify-center items-center sm:items-start sm:justify-start"
        >
          <a
            href="#contactMe"
            class="sm:mr-5 mb-2 sm:mb-0 sm:py-2 sm:px-4 border-2 border-orange-600 py-1 px-3 transition-all bg-orange-600 hover:bg-orange-800 rounded text-white"
            >Contact Me</a
          >
          <a
            download="CV_Iqbal_Ramadan"
            href="files/Iqbal Ramadan-resumeEN.pdf"
            class="sm:py-2 sm:px-4 py-1 px-3 border-orange-600 border-solid border-2 transition-all text-orange-600 hover:bg-orange-800 rounded hover:text-white"
            >Download CV</a
          >
        </div>
      </div>
      <div class="order-first md:order-last mx-auto sm:mx-none">
        <img
          class="rounded-full h-60 sm:h-80 w-full border border-orange-600"
          src=" "
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import Typed from 'typed.js';

export default {
  mounted() {
    const typed = new Typed('#auto-text', {
      strings: ['Iqbal Ramadan', 'Frontend Developer'],
      typeSpeed: 60,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
      backSpeed: 20,
      backDelay: 1500,
    })
  }
};
</script>
<style lang=""></style>
