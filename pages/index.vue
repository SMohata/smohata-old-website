<template>
  <div>
    <headr />
    <about />
    <skill />
    <experience />
    <modal />
    <education />
    <project />
    <achievements />
    <testimonials />
    <contact />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Headr from '@/components/Sections/Headr.vue';
import About from '@/components/Sections/About.vue';
import Skill from '@/components/Sections/Skill.vue';
import Experience from '@/components/Sections/Experience.vue';
import Modal from '@/components/Widgets/Modal.vue';
import Education from '@/components/Sections/Education.vue';
import Project from '@/components/Sections/Project.vue';
import Achievements from '@/components/Sections/Achievements.vue';
import Testimonials from '@/components/Sections/Testimonials.vue';
import Contact from '@/components/Sections/Contact.vue';

export default {
  components: {
    Headr,
    About,
    Skill,
    Experience,
    Modal,
    Education,
    Project,
    Achievements,
    Testimonials,
    Contact
  },
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
