<template>
  <div class="py-4 px-10">
    <h1 class="font-bold text-2xl">Add Project</h1>
    <form @submit.prevent="postProject" class="mt-5" method="post">
      <div class="my-2">
        <label for="projectName" class="mr-4">Nama Projek: </label>
        <input
          class="py-2 px-3 w-full"
          type="text"
          id="projectName"
          name="projectName"
          required
          v-model.lazy="projectName"
        />
      </div>
      <div class="my-2">
        <label for="projectTech" class="mr-4">Teknologi: </label>
        <input
          class="py-2 px-3 w-full"
          type="text"
          id="projectTech"
          name="projectTech"
          required
          v-model.lazy="projectTech"
        />
      </div>
      <div class="my-2">
        <label for="projectDesc" class="mr-4">Deskripsi: </label>
        <input
          class="py-2 px-3 w-full"
          type="text"
          id="projectDesc"
          name="projectDesc"
          required
          v-model.lazy="projectDesc"
        />
      </div>
      <div class="my-2">
        <label for="projectImg" class="mr-4">Image URL: </label>
        <input
          class="py-2 px-3 w-full"
          type="file"
          id="projectImg"
          name="projectImg"
          required
          @change="handleFileUpload"
        />
      </div>
      <div class="my-2">
        <label for="projectDemo" class="mr-4">Demo URL: </label>
        <input
          class="py-2 px-3 w-full"
          type="url"
          id="projectDemo"
          name="projectDemo"
          v-model.lazy="projectDemo"
        />
      </div>
      <div class="my-2">
        <label for="projectGithub" class="mr-4">Github URL</label>
        <input
          class="py-2 px-3 w-full"
          type="url"
          id="projectGithub"
          name="projectGithub"
          required
          v-model.lazy="projectGithub"
        />
      </div>
      <div class="my-2">
        <label for="projectCreatedAt" class="mr-4">Tanggal: </label>
        <input
          class="py-2 px-3 w-full"
          type="date"
          id="projectCreatedAt"
          name="projectCreatedAt"
          v-model.lazy="projectCreatedAt"
        />
      </div>
      <input
        class="text-right justify-end btn mt-4"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
</template>
<script>
import supabase from "@/lib/supabase";

export default {
  data() {
    return {
      projectName: [],
      projectTech: [],
      projectDesc: [],
      projectImg: null,
      projectDemo: [],
      projectGithub: [],
      projectCreatedAt: [],
    };
  },
  methods: {
    handleFileUpload(e) {
      this.projectImg = e.target.files[0];
    },
    async postProject() {
      if (!this.projectImg) {
        console.error("Please upload an image");
        return;
      }

      const filePath = `${this.projectImg.name.replace(/\s/g, "_")}`;
      const { data: dataStorage, error: uploadError } = await supabase.storage
        .from("project")
        .upload(filePath, this.projectImg, {
          upsert: true,
        });

      if (uploadError) {
        console.error("Error uploading image", uploadError);
        return;
      }

      const { data, error } = await supabase.from("projects").insert([
        {
          project_name: this.projectName,
          project_tech: this.projectTech,
          project_desc: this.projectDesc,
          project_img: filePath,
          project_demo: this.projectDemo,
          project_github: this.projectGithub,
          created_at: this.projectCreatedAt,
        },
      ]);
    },
  },
};
</script>
<style lang=""></style>
