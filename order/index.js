import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();
const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
