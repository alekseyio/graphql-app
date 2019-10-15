const { Schema, SchemaTypes, model } = require('mongoose');

const schema = new Schema({
  content: String,
  completed: {
    type: Boolean,
    default: false
  },
  project: {
    type: SchemaTypes.ObjectId,
    ref: 'Project'
  }
});

schema.set('timestamps', true);

exports.Task = model('Task', schema);
