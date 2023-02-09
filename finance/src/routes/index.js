const express = require('express');
const payments = require('./paymentsRoutes.js');

const routes = (app) => {
  app.use(
      express.json(),
      payments
      );
};

module.exports = routes;