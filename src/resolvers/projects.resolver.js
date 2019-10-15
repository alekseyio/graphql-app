const { Project, Task } = require('../models');

exports.projects = () => Project.find();

exports.project = (rootValue, args) => Project.findById(args.projectId);

exports.projectsResolver = {
  id: project => project.id,
  tasks: project => Task.find({ project })
};
