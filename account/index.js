import dotenv from 'dotenv';
import app from './src/app.js';
// eslint-disable-next-line no-unused-vars
import client from './redis/blacklist.js';

dotenv.config();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
