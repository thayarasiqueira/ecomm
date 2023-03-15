import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';
import accountsRoutes from './accountsRoutes.js';

const require = createRequire(import.meta.url);
const swaggerFile = require('../../swagger/swagger_output.json');

const routes = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use(
    express.json(),
    accountsRoutes,
  );
};

export default routes;
