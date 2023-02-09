import express from 'express';
import categories from '../routes/categoriesRoutes.js';
import products from '../routes/productsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/product.json' assert { type: "json" };;

const routes = (app) => {
  app.use('/api-docs', swaggerUi.serve)
     .get('/api-docs', swaggerUi.setup(swaggerDocument));
  app.use(
      express.json(),
      categories,
      products
      );
};

export default routes;