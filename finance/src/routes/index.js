const express = require('express');
const payments = require('./paymentsRoutes.js');
// const swaggerUi = require('swagger-ui-express');
// const swaggerFile = require('../../swagger/swagger_output.json');

const routes = (app) => {
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use(
    express.json(),
    payments,
  );
};

module.exports = routes;
