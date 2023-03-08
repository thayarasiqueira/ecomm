import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
// eslint-disable-next-line no-unused-vars
import BearerStrategy from './middlewares/authStrategies.js';

db.once('open', () => {
  console.log('Db successfully connected!');
});

const app = express();
app.use(express.json());
routes(app);

export default app;
