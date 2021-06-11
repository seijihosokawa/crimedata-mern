import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://seijihdev:<password>@cluster0.sac6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
