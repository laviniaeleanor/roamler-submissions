const express = require('express');
const sequelize = require('./sequelize');
const bodyParser = require('body-parser');
const loadSeed = require('./loadSeed');

const {getSubmissions} = require('./services/submissions');

const app = express();
const port = 3000;
const eraseDatabaseOnSync = false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/submissions', (req, res) => {
  const {query} = req;
  getSubmissions(query)
    .then(submissions => res.json(submissions))
    .catch(err => console.error(err));
})

sequelize
  .sync({force: eraseDatabaseOnSync})
  .then(async () => {
    if (eraseDatabaseOnSync) {
      await loadSeed(sequelize.models);
    }

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    });
});