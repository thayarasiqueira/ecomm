const app = require('./src/app.js');
require('dotenv').config();

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
