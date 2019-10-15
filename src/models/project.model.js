const { Schema, model } = require('mongoose');
const { Task } = require('./task.model');

const schema = new Schema({
  name: String,
  description: String
});

schema.set('timestamps', true);

schema.pre('remove', async function(next) {
  await Task.deleteMany({
    project: this.id
  });

  next();
});

exports.Project = model('Project', schema);
