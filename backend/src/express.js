const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}, bodyParser.json());

app.listen(3012, function () {
  console.log("Server started");
});

module.exports = app;