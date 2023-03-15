const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../../swagger/swagger_output.json');
const payments = require('./paymentsRoutes.js');

const routes = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use(
    express.json(),
    payments,
  );
};

module.exports = routes;
