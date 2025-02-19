<template>
  <div>
    <header>
      <h1>My Freelance Business</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#web-development">Web Development</a>
        <a href="#data-analysis">Data Analysis</a>
        <a href="#physics">Physics</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="about">
      <h2>About Me</h2>
      <p>Write a compelling introduction about yourself...</p>
    </section>

    <section id="web-development">
      <h2>Web Development</h2>
      <div v-for="project in webDevProjects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.reportLink" target="_blank">Project Report</a>
        <img :src="project.image" alt="Project Image" v-if="project.image">
      </div>
    </section>

    <section id="data-analysis">
      <h2>Data Analysis</h2>
      <div v-for="project in dataAnalysisProjects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.reportLink" target="_blank">Project Report</a>
        <img :src="project.image" alt="Project Image" v-if="project.image">
      </div>
    </section>

    <section id="physics">
      <h2>Physics</h2>
      <div v-for="project in physicsProjects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.reportLink" target="_blank">Project Report</a>
        <img :src="project.image" alt="Project Image" v-if="project.image">
      </div>
    </section>

    <section id="testimonials">
      <h2>Testimonials</h2>
      <div v-for="testimonial in testimonials" :key="testimonial.id">
        <p>"{{ testimonial.quote }}"</p>
        <p>- {{ testimonial.author }}</p>
      </div>
    </section>

    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: your.linkedin.profile</p>
      <p>Other Contact Info</p>
    </section>

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} My Freelance Business</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // ... (Project data and testimonials as in the previous example)
    const webDevProjects = ref([ /* Your Web Dev Projects Here */ ]);
    const dataAnalysisProjects = ref([ /* Your Data Analysis Projects Here */ ]);
    const physicsProjects = ref([ /* Your Physics Projects Here */ ]);
    const testimonials = ref([ /* Your Testimonials Here */ ]);

    return { webDevProjects, dataAnalysisProjects, physicsProjects, testimonials };
  },
};
</script>

<style scoped>
/* Your CSS styles here */
/* ... (CSS from previous example or your own) */
header { /* ... */ }
nav a { /* ... */ }
/* ... */
</style>
