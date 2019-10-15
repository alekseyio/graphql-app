const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: String,
  description: String
});

schema.set('timestamps', true);

exports.Project = model('Project', schema);
