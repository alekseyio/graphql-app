const {
  projects,
  project,
  projectsResolver,
  createProject,
  deleteProject
} = require('./projects.resolver');
const { task, tasksResolver, createTask } = require('./tasks.resolver');

exports.resolvers = {
  Query: {
    projects,
    project,
    task
  },
  Mutation: {
    createProject,
    deleteProject,
    createTask
  },
  Project: projectsResolver,
  Task: tasksResolver
};
