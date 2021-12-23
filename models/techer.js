const mongoose = require("mongoose");

const techerSchma = mongoose.Schema({
    name: String,
    phoneNo: Number,
    age: Number
});

const teacherModel = mongoose.model("teacher",techerSchma,"teacher");
module.exports = teacherModel;