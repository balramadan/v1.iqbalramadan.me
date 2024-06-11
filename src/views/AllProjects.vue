<template>
  <Navigation />
  <div id="project" class="py-20 px-8 sm:px-10 lg:px-40 bg-blue-100">
    <h2 class="text-[#000080] font-bold text-center text-lg sm:text-2xl">
      All Project
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      <!-- Card 1 -->
      <div
        v-for="project in projects"
        :key="project.project_id"
        class="flex flex-col bg-white shadow-lg text-center justify-between"
      >
        <!-- <iframe :src="project.project_demo" height="200" width="100%" ></iframe> -->
        <img
          :src="project.project_img"
          alt="Car View Image"
          class="object-cover w-full h-48 mx-auto"
        />
        <div class="pt-5 pb-3 px-3">
          <h3 class="font-bold text-[#000080] text-lg">
            {{ project.project_name }}
          </h3>
          <p class="mt-2 opacity-60">
            {{ project.project_desc }}
          </p>
        </div>
        <div class="flex justify-around items-center pb-5 bottom-0">
          <a
            :href="project.project_demo"
            target="_blank"
            class="text-[#000080] hover:text-[#51829B] transition-all"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.98 2.98 0 0 0 0-4.24a2.98 2.98 0 0 0-4.24 0l-3.53 3.53a2.98 2.98 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.98 2.98 0 0 0 0 4.24a2.98 2.98 0 0 0 4.24 0l3.53-3.53a2.98 2.98 0 0 0 0-4.24a.973.973 0 0 1 0-1.42"
              /></svg
          ></a>
          <a
            :href="project.project_github"
            target="_blank"
            class="text-[#000080] hover:text-[#51829B] transition-all"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import supabase from "../lib/supabase";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    window.onload = async () => {
      let { data: projects, error } = await supabase
        .from("projects")
        .select("*");

      if (projects) {
        this.projects = projects;
      }
    };
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style lang=""></style>
