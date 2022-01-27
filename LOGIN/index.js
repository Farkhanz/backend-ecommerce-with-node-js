import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/database.js';
import router from './route/index.js';
dotenv.config();
// import Users from './models/UsersModel.js';

const app = express();

try {
    await db.authenticate();
    console.log('Terhubung ke database. . .');
    // await Users.sync();
} catch (error) {
    console.log(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(2000, () => console.log('Server running now on port 2000'));