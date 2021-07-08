import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import summaryRoutes from './routes/summary.js';
import arrestsRoutes from './routes/arrestsNational.js'
import drugArrestsRoutes from './routes/drugArrests.js';
import juvenileArrestsRoutes from './routes/juvenileArrests.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/v1/summary', summaryRoutes);
app.use('/v1/arrests', arrestsRoutes);
app.use('/v1/drug-arrests', drugArrestsRoutes);
app.use('/v1/juvenile-arrests', juvenileArrestsRoutes);



dotenv.config();

const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.sac6s.mongodb.net/crime_data`

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));
mongoose.set('useFindAndModify', false);

export default app;
