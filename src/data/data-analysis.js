import.meta.glob('./data-analysis/*.json', { as: 'json' }).then(modules => {
    const projects = [];
    for (const path in modules) {
        const module = modules[path]();
        projects.push(module.default);
    }
    export default projects;
});
