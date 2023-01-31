import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.once('open', () => {
    console.log('conexão feita com sucesso!');
})

const app = express();
app.use(express.json());
routes(app);

export default app;