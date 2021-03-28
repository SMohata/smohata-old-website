<template>
  <section id="contact">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1 class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center">
        Say Hello!
      </h1>

      <p class="text-center text-gray-500 dark:text-gray-400 mt-20 leading-7">
        {{ about.description }}
      </p>
      <div class="text-center p-4 text-gray-500 dark:text-gray-400">
        <a
          href="mailto:sejal.mohata@gmail.com"
          target="_blank"
          rel="noreferrer"
          class="mt-12 px-6 py-3 font-sourcecode text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
        >
          Send an Email
        </a>
      </div>
      <div>
        <p class="text-center text-gray-400 dark:text-gray-600 mt-20 leading-7">
          Designed & built by Brittany Chiang. Revised with ❤️ by Sejal Mohata.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      about: {}
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    async getAbout() {
      const about = await this.$content('contact').fetch();

      this.about = about;
    }
  }
};
</script>
