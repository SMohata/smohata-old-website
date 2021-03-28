<template>
  <section id="education">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-5 md:mb-2 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Education
      </h1>
      <div
        v-for="(project, index) in projects"
        :key="(index + 1) * Math.random()"
        class="mx-auto mb-2 md:mb-2 relative lg:flex lg:items-center rounded-xl overflow-hidden"
        :class="{
          'text-right flex-row': index % 2 === 0,
          'text-left flex-row-reverse': index % 2 !== 0
        }"
      >
        <div
          class="h-78 w-full lg:max-w-xl relative rounded-xl overflow-hidden shadow-xl"
        >
          <div
            class="hidden lg:block absolute inset-0 bg-blue-500 dark:bg-cyan-400 bg-opacity-50 dark:bg-opacity-50 transition duration-200 hover:bg-opacity-0 dark:hover:bg-opacity-0"
          ></div>
          <img
            :src="project.cover_image"
            :alt="project.name"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="p-14 md:p-14 lg:p-16 flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-90 dark:bg-green-900 dark:bg-opacity-90 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10"
          :class="{
            'lg:-ml-10 lg:-mr-0': index % 2 === 0,
            'lg:-ml-0 lg:-mr-10': index % 2 !== 0
          }"
        >
          <div>
            <p class="font-sourcecode text-blue-400 dark:text-cyan-400 rounded">
              {{ project.place }}
            </p>
            <h2
              class="mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight"
            >
              {{ project.name }}
            </h2>
            <div
              class="lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"
            >
              <p>
                {{ project.description }}
              </p>
            </div>
            <p
              class="mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"
            >
              <span
                v-for="(lang, i) in project.languages"
                :key="(i + 1) * Math.random()"
              >
                {{ lang }}
              </span>
            </p>
            <p class="font-sourcecode text-blue-400 dark:text-cyan-400 rounded">
              {{ project.cgpa }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Project',
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    ...mapActions({
      openModal: 'openModal'
    }),
    async getProjects() {
      const projects = await this.$content('education/featured')
        .sortBy('createdAt')
        .fetch();

      this.projects = projects;
    },
    trimDescription(description) {
      const trimmedDesc = description;
      return trimmedDesc;
    }
  }
};
</script>
