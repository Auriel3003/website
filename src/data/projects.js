async function loadProjects() {
  const modules = import.meta.glob('./**/*.json', { as: 'json' });
  const projects = [];

  for (const path in modules) {
    const module = await modules[path](); // Use await here
    const category = path.split('/')[1];
    projects.push({ ...module.default, category });
  }

  const projectsByCategory = {
    'web-dev': projects.filter(p => p.category === 'web-dev'),
    'data-analysis': projects.filter(p => p.category === 'data-analysis'),
    'physics': projects.filter(p => p.category === 'physics'),
  };

  return projectsByCategory; // Return the object
}

export default loadProjects; // Export the function