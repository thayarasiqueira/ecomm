import express from 'express';
import categories from '../routes/categoriesRoutes.js';
import products from '../routes/productsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../swagger/swagger_output.json' assert { type: "json" };

const routes = (app) => {
   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
   app.use(
      express.json(),
      categories,
      products
      );
};

export default routes;