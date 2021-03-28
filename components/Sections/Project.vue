<template>
  <section id="projects">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <div class="mb-5 md:mb-10 flex items-center">
        <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
          Projects
        </h1>
        <span class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"></span>
      </div>
      <div class="md:flex">
        <ul
          class="flex items-center overflow-x-auto md:overflow-visible md:block"
        >
          <li v-for="(project, index) in projects" :key="index + 1">
            <button
              class="px-4 py-3 whitespace-nowrap text-left block w-full border-b-2 md:border-b-0 md:border-l-2 dark:border-gray-600 transition hover:text-blue-500 hover:bg-gray-100 dark:hover:text-cyan-400 dark:hover:bg-gray-800 focus:text-blue-500 focus:bg-gray-100 dark:focus:text-cyan-400 dark:focus:bg-gray-800 outline-none"
              :class="{
                'text-gray-400 border-gray-300': activeTab !== project.name,
                'text-blue-500 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 border-blue-500 dark:border-cyan-400':
                  activeTab === project.name
              }"
              @click="activeTab = project.name"
            >
              {{ project.name }}
            </button>
          </li>
        </ul>
        <div
          v-for="(project, index) in projects"
          :key="index + 1"
          class="py-4 md:px-4 md:py-2"
          :class="{ hidden: activeTab !== project.name }"
        >
          <div class="mb-2">
            <h2 class="text-xl md:text-2xl">
              {{ project.name }}
            </h2>
            <span class="text-lg italic text-blue-500 dark:text-cyan-400">
              {{ project.short_description }}
            </span>
            <a
              :href="project.github_link"
              target="_blank"
              rel="noreferrer"
              class="text-right text-gray-500 dark:text-gray-400"
              >@Github</a
            >
          </div>
          <p class="mb-4">
            {{ project.description }}
          </p>
          <p>
            <span v-if="project.live" class="text-blue-500 dark:text-cyan-400">
              Tech Stack being used:
            </span>
            <span v-else class="text-blue-500 dark:text-cyan-400">
              Tech Stack used:
            </span>
            <span>
              {{ project.tech_stack }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      activeTab: null
    };
  },
  created() {
    this.getAbout().then(() => this.setActiveTab());
  },
  methods: {
    async getAbout() {
      const projects = await this.$content('projects').fetch();

      this.projects = projects;
    },
    setActiveTab() {
      if (this.projects.length > 0) {
        this.activeTab = this.projects[0].name;
      }
    }
  }
};
</script>
