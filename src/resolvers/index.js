const {
  projects,
  project,
  projectsResolver,
  createProject,
  deleteProject
} = require('./projects.resolver');
const { task, tasksResolver } = require('./tasks.resolver');

exports.resolvers = {
  Query: {
    projects,
    project,
    task
  },
  Mutation: {
    createProject,
    deleteProject
  },
  Project: projectsResolver,
  Task: tasksResolver
};
