const express = require('express');
const routes = require('./routes/index.js');
// eslint-disable-next-line no-unused-vars
const BearerStrategy = require('./middlewares/authStrategies.js');

const app = express();
app.use(express.json());
routes(app);

module.exports = app;
