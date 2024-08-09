<template>
  <div>
    <Navigation />
    <HomeSection />
    <AboutSection />
    <ProjectSection />
    <ContactMe />
    <Footer />
  </div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import HomeSection from "../components/HomeSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectSection from "../components/ProjectSection.vue";
import ContactMe from "../components/ContactMe.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Navigation,
    HomeSection,
    AboutSection,
    ProjectSection,
    ContactMe,
    Footer,
  },
};
</script>
<style lang=""></style>
