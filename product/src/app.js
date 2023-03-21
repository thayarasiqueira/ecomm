import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.once('open', () => {
  console.log('Db successfully connected!');
});

const app = express();
routes(app);

export default app;
