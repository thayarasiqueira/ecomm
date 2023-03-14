import dotenv from 'dotenv';
import app from './src/app.js';
import './redis/blacklist.js';

dotenv.config();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
