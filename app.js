require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const port = 7777;
const mongoose = require("mongoose");

const companyRoute = require("./routes/companyRoute");

mongoose.connect(process.env.MONGOURL).then(() => console.log("Db Connected"));

app.get("/", (req, res) => res.send("Bharat"));
app.use("/company", companyRoute);

app.listen(port, () => console.log("Example App running on 7777"));
