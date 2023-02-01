import express from 'express';
import categories from '../routes/categoriesRoutes.js';
import products from '../routes/productsRoutes.js';

const routes = (app) => {
  app.use(
      express.json(),
      categories,
      products
      )
}

export default routes;