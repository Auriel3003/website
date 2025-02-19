<template>
  <div>
    <header>
      <h1>My Freelance Business</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#web-development">Web Development</a>
        <a href="#data-analysis">Data Analysis</a>
        <a href="#physics">Physics</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="about" class="rounded-section">
      <h2>About Me</h2>
      <p>Write a compelling introduction about yourself, your skills, and what you offer as a freelancer. Highlight your experience and passion for each of your verticals (Web Development, Data Analysis, and Physics). Mention your commitment to delivering high-quality work and client satisfaction.</p>
    </section>

    <section id="skills" class="rounded-section">
      <h2>Skills</h2>
      <div v-for="(skills, domain) in skillSet" :key="domain" class="skill-domain">
        <h3>{{ domain }}</h3>
        <div class="skills-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
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
import loadProjects from './data/projects.js';

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const webDevProjects = ref([]);
    const dataAnalysisProjects = ref([]);
    const physicsProjects = ref([]);
    const testimonials = ref([]);
    const skillSet = ref({
      'Web Development': ['Vue.js', 'React', 'Node.js', 'JavaScript', 'CSS', 'Tailwind CSS'],
      'Data Analysis': ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau'],
      'Physics': ['MATLAB', 'GNU Radio', 'Antenna Design', 'Simulations'],
    });

    onMounted(async () => {
      const projects = await loadProjects();
      webDevProjects.value = projects['web-dev'] || [];
      dataAnalysisProjects.value = projects['data-analysis'] || [];
      physicsProjects.value = projects['physics'] || [];
    });

    return { webDevProjects, dataAnalysisProjects, physicsProjects, testimonials, skillSet };
  },
};
</script>

<style scoped>

</style>
