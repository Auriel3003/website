<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <img :src="project.image" :alt="project.title" v-if="project.image"> <br>
    <a :href="project.reportLink" target="_blank">Project Report</a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1); /* Add a subtle shadow */
  transition: transform 0.2s; /* Add a transition for hover effect */
}

.project-card:hover {
    transform: scale(1.02); /* Scale up slightly on hover */
}

.project-card img {
  max-width: 100%; /* Make sure image scales within the card */
  height: auto;
  display: block;
  margin: 10px auto;
}
</style>
