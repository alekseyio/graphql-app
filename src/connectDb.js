const { connect } = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/app';

exports.connectDb = async () => {
  await connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
};
