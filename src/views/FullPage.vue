<template>
  <div>
    <ul id="header" class="absolute flex flex-row bg-transparent w-full z-50">
      <li class="active">
        <a href="https://app.balramadan.xyz">APP</a>
      </li>
      <li data-menuanchor="secondPage">
        <a href="#secondPage">Second section</a>
      </li>
    </ul>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <HomeSection />
      <AboutSection />
    </full-page>
  </div>
</template>
<script>
import HomeSection from "../components/HomeSection.vue";
import AboutSection from "../components/AboutSection.vue";

export default {
  data() {
    return {
      options: {
        menu: '#header',
        sectionsColor: ["#eee", "#ea580c", "#0798ec"],
        navigation: true,
        css3: true,
        loopHorizontal: true,
        autoScrolling: true,
        verticalCentered: true,
        parallax: true,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate",
        },
        scrollOverflow: false,
        lazyLoading: true,
        credits: {
          enabled: true,
          label: "Build with fullpage.js",
          position: "right",
        },
      },
    };
  },
  components: {
    HomeSection,
    AboutSection,
  },
};
</script>
<style lang=""></style>
