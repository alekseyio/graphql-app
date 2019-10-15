const {
  projects,
  project,
  projectsResolver,
  createProject
} = require('./projects.resolver');
const { task, tasksResolver } = require('./tasks.resolver');

exports.resolvers = {
  Query: {
    projects,
    project,
    task
  },
  Mutation: {
    createProject
  },
  Project: projectsResolver,
  Task: tasksResolver
};
