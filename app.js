import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

import connDB from './src/config/db.config.js';

connDB();

import authRoutes from './src/routes/auth.routes.js';
app.use('/', authRoutes);

import teamRoutes from './src/routes/team.routes.js';
app.use('/team', teamRoutes);

import eventRoutes from './src/routes/event.routes.js';
app.use('/event', eventRoutes);

import alumniRoutes from './src/routes/alumni.routes.js';
app.use('/alumni', alumniRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}!`);
});