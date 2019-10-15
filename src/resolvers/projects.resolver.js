const { Project, Task } = require('../models');

exports.projects = () => Project.find();

exports.project = (rootValue, args) => Project.findById(args.projectId);

exports.projectsResolver = {
  id: project => project.id,
  createdAt: project => project.createdAt.toISOString(),
  updatedAt: project => project.updatedAt.toISOString(),
  tasks: project => Task.find({ project })
};

exports.createProject = async (rootValue, { input: { name, description } }) => {
  const project = new Project({ name, description });

  await project.save();

  return project;
};

exports.deleteProject = async (rootValue, { input: { id } }) => {
  const project = await Project.findById(id);

  if (!project) {
    return { statusCode: 404, message: 'Resource not found' };
  }

  await project.remove();

  return { statusCode: 200, message: 'Success' };
};
