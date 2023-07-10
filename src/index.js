import express from "express";
import employedRoutes from './routes/employed.route';
import cors from 'cors';
import * as db from "./connection/mongo.db";

const app = express();
const PORT = process.env.PORT || 3000;

db.init();

app.use(cors());
app.use(express.json());
app.use('/api/v1/employed', employedRoutes);

app.listen(PORT, () => { console.log(`Iniciando servidor en puesto: ${PORT}`) });