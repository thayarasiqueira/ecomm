import express from 'express';
import ordersRoutes from './ordersRoutes.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerFile from '../../swagger/swagger_output.json' assert { type: "json" };

const routes = (app) => {
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use(
    express.json(),
    ordersRoutes,
  );
};

export default routes;
