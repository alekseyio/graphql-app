const { connect } = require('mongoose');

const mongoURI =
  'mongodb+srv://dbUser:dbUser1234@mycluster-c9psg.mongodb.net/rest-api?retryWrites=true&w=majority';

exports.connectDb = async () => {
  await connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};
