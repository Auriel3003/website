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
      <p>Write a compelling introduction...</p>
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
import { ref, onMounted } from 'vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const webDevProjects = ref([]);
    const dataAnalysisProjects = ref([]);
    const physicsProjects = ref([]);
    const testimonials = ref([ /* Your testimonials here */ ]);

    onMounted(async () => {
      webDevProjects.value = await loadProjects('web-dev');
      dataAnalysisProjects.value = await loadProjects('data-analysis');
      physicsProjects.value = await loadProjects('physics');
    });

    const loadProjects = async (category) => {
      try {
        // Correct way to use import.meta.glob:
        const modules = import.meta.glob(`../data/${category}/*.json`, { as: 'json' });

        const projects = [];
        for (const path in modules) {
          const module = await modules[path]();
          projects.push(module.default);
        }
        return projects;
      } catch (error) {
        console.error(`Error loading ${category} projects:`, error);
        return []; // Return empty array in case of error
      }
    };

    return { webDevProjects, dataAnalysisProjects, physicsProjects, testimonials };
  },
};
</script>

<style scoped>
/* ... (Your CSS styles) */
.project-grid { /* ... */ }
</style>
