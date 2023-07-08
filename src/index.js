import express from "express";
import employedRoutes from './routes/employed.route';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use('/api/v1/employed', employedRoutes);

app.listen(PORT, () => { console.log(`Iniciando servidor en puesto: ${PORT}`) });