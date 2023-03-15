import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';
import categories from './categoriesRoutes.js';
import products from './productsRoutes.js';

const require = createRequire(import.meta.url);
const swaggerFile = require('../../swagger/swagger_output.json');

const routes = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;
