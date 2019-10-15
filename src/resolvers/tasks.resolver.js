const { Project, Task } = require('../models');

exports.task = (rootValue, args) => Task.findById(args.taskId);

exports.tasksResolver = {
  id: task => task.id,
  project: task => Project.findById(task.project)
};
