import express from 'express';
import rateLimit from 'express-rate-limit';
import account from './routes/account.js';
import finance from './routes/finance.js';
import order from './routes/order.js';
import category from './routes/category.js';
import product from './routes/product.js';

const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
});

app.use('/', limiter);

app.use('/', account);
app.use('/', finance);
app.use('/', order);
app.use('/', category);
app.use('/', product);

export default app;
