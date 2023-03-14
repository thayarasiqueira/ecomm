import app from './src/app.js';
// eslint-disable-next-line import/order
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Gateway is listening on ${PORT}`);
});
