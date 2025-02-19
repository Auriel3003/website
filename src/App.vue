<template>
  <div>
    <header>
      <h1>My Freelance Business</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#web-development">Web Development</a>
        <a href="#data-analysis">Data Analysis</a>
        <a href="#physics">Physics</a>
        <a href="#skills">Skills</a>  <a href="#testimonials">Testimonials</a>
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

    <section id="skills">
      <h2>Skills</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3 class="font-bold mb-2">Programming Languages</h3>
          <div class="badge-container">
            <span v-for="skill in programmingLanguages" :key="skill" class="badge">{{ skill }}</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="font-bold mb-2">Embedded Platforms</h3>
          <div class="badge-container">
            <span v-for="skill in embeddedPlatforms" :key="skill" class="badge">{{ skill }}</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="font-bold mb-2">Electronics & Telecommunications</h3>
          <div class="badge-container">
            <span v-for="skill in electronicsAndTelecom" :key="skill" class="badge">{{ skill }}</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="font-bold mb-2">DevOps</h3>
          <div class="badge-container">
            <span v-for="skill in devOps" :key="skill" class="badge">{{ skill }}</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="font-bold mb-2">Web Development</h3>
          <div class="badge-container">
            <span v-for="skill in webDevelopment" :key="skill" class="badge">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>


    <section id="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonial-list">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-item">
          <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
          <p class="testimonial-author">- {{ testimonial.author }}</p>
        </div>
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
      { id: 1, quote: 'Great work!', author: 'Client A' },
      // ... more testimonials
    ]);

    const programmingLanguages = ref(['C', 'Python', 'Java']);
    const embeddedPlatforms = ref(['ESP', 'Arduino', 'Raspberry Pi', 'SBCs']);
    const electronicsAndTelecom = ref(['Analog Communication', 'Signal and Systems', 'Computer Architecture']);
    const devOps = ref(['Git', 'Docker', 'Kubernetes', 'GCP', 'Vercel', 'Linux']);
    const webDevelopment = ref(['ReactJS', 'NodeJS', 'MongoDB', 'Vite']);

    onMounted(async () => {
      const projects = await loadProjects();
      webDevProjects.value = projects['web-dev'] || [];
      dataAnalysisProjects.value = projects['data-analysis'] || [];
      physicsProjects.value = projects['physics'] || [];
    });

    return {
      webDevProjects,
      dataAnalysisProjects,
      physicsProjects,
      testimonials,
      programmingLanguages,
      embeddedPlatforms,
      electronicsAndTelecom,
      devOps,
      webDevelopment,
    };
  },
};
</script>