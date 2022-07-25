const { connect, connection } = require('mongoose');
require("dotenv").config()

connect(`${process.env.MONGO_URI} ${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
