import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Gateway is listening on ${PORT}`);
});
