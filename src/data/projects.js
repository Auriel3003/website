import.meta.glob('./**/*.json', { as: 'json' }).then(modules => {
  const projects = [];
  for (const path in modules) {
    const module = modules[path]();
    const category = path.split('/')[1]; // Extract category from path
    projects.push({ ...module.default, category }); // Add category to project data
  }

  // Group projects by category:
  const projectsByCategory = {
    'web-dev': projects.filter(p => p.category === 'web-dev'),
    'data-analysis': projects.filter(p => p.category === 'data-analysis'),
    'physics': projects.filter(p => p.category === 'physics'),
  };

  export default projectsByCategory;
});
