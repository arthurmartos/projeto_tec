var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arthurdb:arthur2004@cluster0-k3fmc.mongodb.net/projeto?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnfiedTopology: true,
  promiseLibrary: global.Promise
});

module.exports = mongoose;