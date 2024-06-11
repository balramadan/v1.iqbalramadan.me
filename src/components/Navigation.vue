<template>
  <div
    id="navbar"
    class="fixed top-0 bg-[#eee] hidden flex-col w-full h-screen justify-between z-50 transition-all duration-300"
  >
    <div class="flex flex-row justify-between py-5 px-8 sm:px-10 lg:px-40">
      <div class="">
        <img src="/logo.png" class="w-7" alt="" />
      </div>
      <div class="">
        <svg
          @click.prevent="closeNavbar"
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      </div>
    </div>
    <ul class="flex flex-col gap-5">
      <li class="text-center">
        <a :href="linkHome" class="text-xl font-semibold hover:font-bold">Home</a>
      </li>
      <li class="text-center">
        <a :href="linkProject" class="text-xl font-semibold hover:font-bold">Project</a>
      </li>
      <li class="text-center">
        <a :href="linkContact" class="text-xl font-semibold hover:font-bold">Contact Me</a>
      </li>
    </ul>
    <div class=""></div>
  </div>

  <!-- Navigation -->
  <nav
    id="nav"
    class="top-0 flex flex-row justify-between items-center py-3 px-8 sm:px-10 lg:px-40 w-full z-40"
  >
    <div class="">
      <img id="logoHeader" src="/logo.png" class="w-6" alt="Iqbal Ramadan" />
    </div>
    <ul class="hidden sm:flex flex-row items-center gap-5">
      <li><a :href="linkHome">Home</a></li>
      <li><a :href="linkProject">Project</a></li>
      <li><a :href="linkContact">Contact Me</a></li>
    </ul>
    <div class="block sm:hidden">
      <svg
        @click.prevent="openNavbar"
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 6h18M3 12h18M3 18h18"
        />
      </svg>
    </div>
  </nav>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      linkHome: "/",
      linkProject: "#project",
      linkContact: "#contact",
    }
  },
  methods: {
    openNavbar() {
      const navbar = document.getElementById("navbar");
      navbar.classList.remove("hidden");
      navbar.classList.add("flex");
    },
    closeNavbar() {
      const navbar = document.getElementById("navbar");
      navbar.classList.remove("flex");
      navbar.classList.add("hidden");
    },
  },
  mounted() {
    const nav = document.getElementById("nav");
    const logoHeader = document.getElementById("logoHeader");
    const scrollNav = nav.offsetHeight;

    window.onscroll = () => {
      if (window.pageYOffset > scrollNav) {
        nav.classList.add("fixed");
        nav.classList.add("shadow-sm");
        nav.classList.add("bg-white");
        nav.classList.add("font-semibold");
        logoHeader.classList.add("w-8");
        nav.classList.add("py-4");
        nav.classList.remove("py-3");
        logoHeader.classList.remove("w-6");
      } else if (window.pageYOffset <= scrollNav) {
        nav.classList.remove("fixed");
        nav.classList.remove("shadow-sm");
        nav.classList.remove("bg-white");
        nav.classList.remove("font-semibold");
        logoHeader.classList.remove("w-8");
        nav.classList.remove("py-4");
        logoHeader.classList.add("w-6");
        nav.classList.add("py-3");
      }
    };
  },
  components: {
    RouterLink,
  }
};
</script>
<style lang=""></style>
