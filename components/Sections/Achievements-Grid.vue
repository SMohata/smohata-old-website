<template>
  <section id="achievements">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Achievements
      </h1>
      <div class="container mt-2 mx-auto">
        <div class="grid grid-cols-3 gap-6">
          <div
            v-for="(achievement, index) in achievements"
            :key="(index + 1) * Math.random()"
          >
            <div
              class="lg:w-80 w-80 cursor-pointer border border-2 rounded-2xl border-solid flex border-blue-400 dark:border-cyan-400 dark:hover:bg-cyan-400 transition duration-200 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:bg-opacity-50 transform hover:-translate-y-2 transition-all duration-200"
            >
              <div class="m-2">
                <span class="rounded-full align-top float-left animate-wiggle">
                  <img
                    class="w-20 h-20 rounded-full mx-auto object-cover"
                    :src="achievement.cover_image"
                    :alt="achievement.name"
                  />
                </span>
                <h2
                  class="text-right text-lg mb-1 tracking-wide text-base text-gray-800 lg:text-gray-500 lg:dark:text-gray-400 rounded"
                >
                  {{ achievement.name }}
                  <h2
                    class="text-right block mt-1 text-base leading-tight font-semibold text-blue-400 dark:text-cyan-400 rounded"
                  >
                    {{ achievement.award }}
                  </h2>
                  <a
                    :href="achievement.link"
                    target="_blank"
                    rel="noreferrer"
                    class="no-underline hover:underline text-sm font-sourcecode font-light text-blue-400 dark:text-cyan-400 rounded"
                  >
                    Link
                  </a>
                </h2>
                <p class="mb-1 text-justify">
                  {{ achievement.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="grid grid-cols-3 gap-4">
        <div
          v-for="(achievement, index) in achievements"
          :key="(index + 1) * Math.random()"
        >
          <div
            class="mt-8 h-30 w-full lg:max-w-xl relative rounded-xl overflow-hidden"
          >
            <div
              class="border-2 rounded-2xl border-solid flex border-blue-200 dark:border-cyan-200 dark:hover:bg-cyan-400 transition duration-200 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:bg-opacity-50"
            >
              <div class="w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden">
                <img
                  class="float-right md:float-left"
                  :src="achievement.cover_image"
                  :alt="achievement.name"
                />
              </div>
              <div>
                <div
                  class="uppercase tracking-wide text-lg text-gray-800 lg:text-gray-500 lg:dark:text-gray-400 rounded font-semibold"
                >
                  {{ achievement.name }}
                </div>
                <div
                  class="text-left block mt-1 text-lg leading-tight font-medium text-blue-400 dark:text-cyan-400 rounded"
                >
                  {{ achievement.award }}
                </div>
                <p class="mt-2">
                  {{ achievement.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Achievements',
  data() {
    return {
      achievements: []
    };
  },
  created() {
    this.getAchievements();
  },
  methods: {
    async getAchievements() {
      const achievements = await this.$content('achievements').fetch();

      this.achievements = achievements;
    }
  }
};
</script>
