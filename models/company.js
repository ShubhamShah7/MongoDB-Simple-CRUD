const mongoose = require("mongoose");
const companySchema = mongoose.Schema({
	id: String,
	name: String,
});

const companyModel = mongoose.model("teacher", companySchema, "teacher");
module.exports = companyModel;
