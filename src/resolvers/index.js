const {
  projects,
  project,
  projectsResolver,
  createProject,
  deleteProject
} = require('./projects.resolver');
const {
  task,
  tasksResolver,
  createTask,
  deleteTask,
  toggleTask
} = require('./tasks.resolver');

exports.resolvers = {
  Query: {
    projects,
    project,
    task
  },
  Mutation: {
    createProject,
    deleteProject,
    createTask,
    deleteTask,
    toggleTask
  },
  Project: projectsResolver,
  Task: tasksResolver
};
