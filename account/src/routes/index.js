import express from 'express';
import accountsRoutes from './accountsRoutes.js';

const routes = (app) => {
  app.use(
      express.json(),
      accountsRoutes
  )
}

export default routes;