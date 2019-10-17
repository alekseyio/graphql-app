const { Project, Task } = require('../models');

exports.task = (rootValue, args) => Task.findById(args.taskId);

exports.tasksResolver = {
  id: task => task.id,
  project: task => Project.findById(task.project)
};

exports.createTask = async (rootValue, { input: { projectId, content } }) => {
  try {
    const project = await Project.findById(projectId);

    if (!project) throw new Error();

    const task = new Task({ content, project });

    await task.save();

    return { statusCode: 201, message: 'Created', task };
  } catch (err) {
    return { statusCode: 404, message: 'Resource not found' };
  }
};
