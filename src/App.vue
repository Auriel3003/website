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
      <p>Write a compelling introduction about yourself, your skills, and what you offer as a freelancer. Highlight your experience and passion for each of your verticals (Web Development, Data Analysis, and Physics). Mention your commitment to delivering high-quality work and client satisfaction.</p>
    </section>

    <section id="web-development">
      <h2>Web Development</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in webDevProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section id="data-analysis">
      <h2>Data Analysis</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in dataAnalysisProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section id="physics">
      <h2>Physics</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in physicsProjects" :key="project.title" :project="project" />
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
import ProjectCard from './components/ProjectCard.vue';
import loadProjects from './data/projects.js'; // Import the function

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const webDevProjects = ref(projectsByCategory['web-dev'] || []); // Provide default empty array
    const dataAnalysisProjects = ref(projectsByCategory['data-analysis'] || []); // Provide default empty array
    const physicsProjects = ref(projectsByCategory['physics'] || []); // Provide default empty array
    const testimonials = ref([
      { id: 1, quote: 'Great work!', author: 'Client A' },
      // ... more testimonials
    ]);

    return { webDevProjects, dataAnalysisProjects, physicsProjects, testimonials };
  },
};
</script>

<style scoped>
/* Basic styling - customize as needed */
header {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
}

section {
  padding: 2rem;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0; /* Sticky footer */
  width: 100%;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

</style>