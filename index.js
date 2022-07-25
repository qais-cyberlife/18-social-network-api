const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.db_url || 'mongodb://localhost/social-network',
  {
    useNewUrlParser: true
  }
)

let db = mongoose.connection;
db.once('open', () => {
  console.log('Database Connected!')
}).on('error',
  console.error.bind(console, 'Connection Error!')
)

mongoose.set('debug', true)


app.use(routes);

app.listen(PORT, () => {
  console.log(`API server for ${activity} running on port ${PORT}!`);
});
