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

    <section id="about" class="rounded-section">
      <h2>About Me</h2>
      <p>Write a compelling introduction about yourself, your skills, and what you offer as a freelancer. Highlight your experience and passion for each of your verticals (Web Development, Data Analysis, and Physics). Mention your commitment to delivering high-quality work and client satisfaction.</p>
    </section>

    <section id="about" class="rounded-section">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="profile-image">
          <img src="https://camo.githubusercontent.com/8e09105292eb650f1007af790c36b80b7630a82a98725d9439af599ca423f92d/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a313335382f302a796761486d506a516e566d45417064542e676966" alt="Sahil Sawant" class="profile-pic"> </div>
        <div class="profile-text">
          <h3>Sahil Sawant</h3>
          <p class="tagline">Physics Enthusiast & Freelance Developer Specializing in Data Analysis and Web Solutions</p>

          <p>I'm a passionate individual with a unique blend of expertise in physics and software development. My fascination with the intricacies of the universe drives me to explore complex physics concepts and share them in an accessible way. I'm currently developing resources and tutorials to make physics more understandable and engaging for everyone.</p>

          <p>Beyond my physics pursuits, I'm a skilled freelance developer offering services in data analysis and web development. I'm committed to delivering high-quality solutions tailored to meet the specific needs of my clients.</p>

          <div class="skills-overview">
            <h4>Data Analysis</h4>
            <div class="skill-badges">
              <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python">
              <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas">
              <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib">
              <img src="https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white" alt="Plotly">
              <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn">
              <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow">
              <img src="https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white" alt="Keras">
            </div>

            <h4>Web Development</h4>
            <div class="skill-badges">
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
              <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
              <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue.js">
              <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
              <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
              <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
              <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="Netlify">
              <img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
              <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud">
              <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS">
            </div>
          </div>

          <p>Currently, I'm focused on [briefly mention your current project - e.g., developing a physics education platform, building a data analysis tool, etc.].</p>

          <div class="contact-me">
            <h4>Let's Connect</h4>
            <ul class="contact-links">
              <li><a href="your_instagram_link"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram"></a></li>
              <li><a href="your_linkedin_link"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a></li>
              <li><a href="mailto:your_email@example.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"></a></li>
              <li><a href="your_kaggle_link"><img src="https://img.shields.io/badge/Kaggle-035a7d?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle"></a></li>
              <li><a href="your_medium_link"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium"></a></li>
            </ul>
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
      <div v-for="testimonial in testimonials" :key="testimonial.id">
        <p>"{{ testimonial.quote }}"</p>
        <p>- {{ testimonial.author }}</p>
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
import { ref, onMounted, computed } from 'vue'; // Import computed
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

    const currentRoute = ref(window.location.hash || '#about'); // Track current route

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
      currentRoute, // Expose currentRoute
    };
  },
};
</script>

<style scoped>
/* ... (Your CSS from the previous responses) ... */
</style>