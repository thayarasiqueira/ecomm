import express from 'express';
import ordersRoutes from './ordersRoutes.js';

const routes = (app) => {
  app.use(
      express.json(),
      ordersRoutes
  )
}

export default routes;