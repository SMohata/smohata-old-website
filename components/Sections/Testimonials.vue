<template>
  <section id="testimonials">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Testimonials
      </h1>
      <hooper
        :items-to-show="1"
        :center-mode="true"
        :infinite-scroll="true"
        :progress="true"
        :auto-play="true"
        :play-speed="4000"
        :transition="300"
        style="height: 400px"
      >
        <slide
          v-for="(testimonial, index) in testimonials"
          :key="(index + 1) * Math.random()"
        >
          <div class="md:py-4 md:px-20 mt-6 md:mt-0 max-h-full md:max-h-screen">
            <div
              class="p-6 border-4 rounded-2xl border-solid flex border-blue-200 dark:border-cyan-200 dark:hover:bg-cyan-400 transition duration-200 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:bg-opacity-50 transform hover:-translate-y-4 transition-all duration-200"
            >
              <div
                class="w-10 h-10 md:w-40 md:h-40 rounded-full overflow-hidden mr-2 md:mr-4 flex-shrink-0"
              >
                <img
                  :src="testimonial.cover_image"
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="mt-2 italic">"{{ testimonial.quote }}"</p>
                <div
                  class="uppercase tracking-wide text-lg text-gray-800 lg:text-gray-500 lg:dark:text-gray-400 rounded font-semibold"
                >
                  {{ testimonial.name }}
                </div>
                <div
                  class="text-left block mt-1 text-lg leading-tight font-medium text-blue-400 dark:text-cyan-400 rounded"
                >
                  {{ testimonial.company }}
                </div>
              </div>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: 'Testimonials',
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      testimonials: []
    };
  },
  created() {
    this.getTestimonials();
  },
  methods: {
    async getTestimonials() {
      const testimonials = await this.$content('testimonials').fetch();

      this.testimonials = testimonials;
    }
  }
};
</script>
