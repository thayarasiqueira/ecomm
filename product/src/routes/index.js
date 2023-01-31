import express from 'express';
import categories from '../routes/categoriesRoutes.js';


const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).end();
    });

app.use(
    express.json(),
    categories
    )
}

export default routes;