import express from 'express';
import accountsRoutes from './accountsRoutes.js';

const routes = (app) => {
  app.route('/').get((_req, res) => {
      res.status(200).end();
  });

  app.use(
      express.json(),
      accountsRoutes
  )
}

export default routes;