const app = require('./src/app.js');
require('dotenv').config();
require('./redis/blacklist.js');

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
