const { projects, project, projectsResolver } = require('./projects.resolver');
const { task, tasksResolver } = require('./tasks.resolver');

exports.resolvers = {
  Query: {
    projects,
    project,
    task
  },
  Project: projectsResolver,
  Task: tasksResolver
};
