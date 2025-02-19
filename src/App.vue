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

    <template>
      <section id="skills" class="rounded-section py-16 md:py-24 bg-dark text-white dark:bg-gradient-liner dark:from-white/[4%] dark:to-transparent">
        <div class="container">
          <div class="grid grid-cols-1" data-aos="fade-up">
            <div class="text-center">
              <div class="inline-block">
                <p class="bg-purple text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z" fill="currentColor" />
                  </span>
                  Skills
                </p>
              </div>
              <h2 class="font-semibold text-[26px]/normal mt-7">My Skills</h2>
              <p class="mt-5 text-gray max-w-[708px] mx-auto">
                I possess a diverse range of skills across web development, data analysis, and physics, allowing me to approach
                projects from a multifaceted perspective.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
            <div v-for="(skills, domain) in skillSet" :key="domain" class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-liner from-white/[4%] to-transparent" data-aos="fade-up">
              <h3 class="text-xl font-semibold">{{ domain }}</h3>
              <div class="mt-5 flex flex-wrap gap-3">  <span v-for="skill in skills" :key="skill" class="bg-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <script>
    import { ref } from 'vue';

    export default {
      setup() {
        const skillSet = ref({
          'Web Development': ['Vue.js', 'React', 'Node.js', 'JavaScript', 'CSS', 'Tailwind CSS', 'Next.js', 'Vite'],
          'Data Analysis': ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'Scikit-learn', 'TensorFlow', 'Keras'],
          'Physics': ['MATLAB', 'GNU Radio', 'Antenna Design', 'Simulations'],
        });

        return { skillSet };
      },
    };
    </script>

    <style scoped>
    /* Any additional component-specific styles */
    </style>

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