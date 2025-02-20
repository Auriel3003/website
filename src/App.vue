<template>
  <div>
    <header>
      <h1>My Freelance Business</h1>
      <nav>
        <a href="#about" :class="{ active: currentRoute === '#about' }">About</a>
        <a href="#skills" :class="{ active: currentRoute === '#skills' }">Skills</a>
        <a href="#web-development" :class="{ active: currentRoute === '#web-development' }">Web Development</a>
        <a href="#data-analysis" :class="{ active: currentRoute === '#data-analysis' }">Data Analysis</a>
        <a href="#physics" :class="{ active: currentRoute === '#physics' }">Physics</a>
        <a href="#testimonials" :class="{ active: currentRoute === '#testimonials' }">Testimonials</a>
        <a href="#contact" :class="{ active: currentRoute === '#contact' }">Contact</a>
      </nav>
    </header>

    <section id="about" class="main-slider-1 banner-overlay" :style="{ backgroundImage: `url('path/to/your/image.jpg')` }">
      <div class="container">
        <div class="text-center">
          <div class="slider-banner-info text-center">
            <h2 class="slider-banner-title">Hello, I’m <b>Sahil Sawant</b></h2>
            <h5 class="slider-banner-text">Physics Enthusiast & Freelance Developer</h5>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="rounded-section">
      <h2>Skills</h2>
      <div class="skill-domain-container">
        <div v-for="(skills, domain) in skillSet" :key="domain" class="skill-domain"
            :class="{ 'animate__animated animate__fadeInUp': isVisible }"
            ref="skillDomain">
          <h3>{{ domain }}</h3>
          <div class="skills-list">
            <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="web-development" class="rounded-section">
      <h2>Web Development</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in webDevProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section id="data-analysis" class="rounded-section">
      <h2>Data Analysis</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in dataAnalysisProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section id="physics" class="rounded-section">
      <h2>Physics</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in physicsProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section id="testimonials" class="rounded-section">
      <h2>Testimonials</h2>
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-item">
        <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
        <p class="testimonial-author">- {{ testimonial.author }}</p>
      </div>
    </section>


    <section id="contact" class="rounded-section">
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
import { ref, onMounted, computed } from 'vue';
import ProjectCard from './components/ProjectCard.vue';
import loadProjects from './data/projects.js';

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const webDevProjects = ref([]);
    const dataAnalysisProjects = ref([]);
    const physicsProjects = ref([]);
    const testimonials = ref([
        {
            id: 1,
            quote: "Great work!",
            author: "John Doe"
        },
        {
            id: 2,
            quote: "Excellent communication.",
            author: "Jane Smith"
        }
    ]); // Sample testimonials data

    const skillSet = ref({
      'Web Development': ['Vue.js', 'React', 'Node.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
      'Data Analysis': ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau'],
      'Physics': ['MATLAB', 'GNU Radio', 'Antenna Design', 'Simulations'],
    });

    const currentRoute = ref(window.location.hash || '#about');

    onMounted(async () => {
      const projects = await loadProjects();
      webDevProjects.value = projects['web-dev'] || [];
      dataAnalysisProjects.value = projects['data-analysis'] || [];
      physicsProjects.value = projects['physics'] || [];

      window.addEventListener('hashchange', () => {
        currentRoute.value = window.location.hash || '#about';
      });
    });

    return {
      webDevProjects,
      dataAnalysisProjects,
      physicsProjects,
      testimonials,
      skillSet,
      currentRoute,
    };
  },
};
</script>

<style scoped>
/* ... (Your CSS from the previous responses) ... */
</style>