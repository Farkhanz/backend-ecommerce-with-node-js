import express from 'express';
import db from './config/database.js';
import productRoute from './route/index.js';
import merchantRoute from './route/index.js';
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected..');
} catch (error) {
    console.log('Error to connect:', error);
}

app.use(cors());
app.use(express.json())
app.use('/product', productRoute);
app.use('/merchant', merchantRoute);

app.listen(2000, () => console.log('Server has running on port 2000'));