const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const app = express();
const port = '3000';
const ip = '127.0.0.1';
const allRouts = require('../natours_api/routs/tourRouts')
app.use(express.json());
app.use(allRouts);

const DB = process.env.DATABASE.replace('{DATABASE_PASSWORD}', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log('failed to connect with data base',err);
})


app.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
})