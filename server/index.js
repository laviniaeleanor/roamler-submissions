const express = require('express');
const sequelize = require('./sequelize');
const bodyParser = require('body-parser');
const loadSeed = require('./loadSeed');

const {getSubmissions} = require('./services/submissions');

const app = express();
const port = 4000;
const eraseDatabaseOnSync = false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


app.get('/submissions/:page?', (req, res) => {
  const {query, params: {page}} = req;
  getSubmissions({query, page})
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