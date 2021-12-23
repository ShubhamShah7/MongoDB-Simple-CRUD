require('dotenv').config;
const express = require('express');
const app = express();
app.use(express.json());
const port = 7777;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL).then(() => console.log("Db connected"));

app.get('/',(req, res) => res.send("Welcome"));

app.listen(port, () => console.log("App is running on port 7777"));