import express from "express";
import employedRoutes from './routes/employed.route';
import cors from 'cors';
import * as db from "./connection/mongo.db";

const app = express();
const PORT = 3000 || process.env.PORT;

db.init();

app.use(cors());
app.use(express.json());
app.use('/api/v1/employed', employedRoutes);

app.listen(PORT, () => { console.log(`Iniciando servidor en puesto: ${PORT}`) });