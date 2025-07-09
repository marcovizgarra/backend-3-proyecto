import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv/config';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import { setUpSwagger } from './swagger.js';

const app = express();
const PORT = process.env.PORT||8080;
const URLMONGO = process.env.URLMongoDb;
const connection = mongoose.connect(URLMONGO)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);

setUpSwagger(app);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));