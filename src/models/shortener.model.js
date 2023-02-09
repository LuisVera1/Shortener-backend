// Import mongoose
const mongoose = require('mongoose');

// Creating schema
const urlScheme = new mongoose.Schema(
	{
		url: String,
		clicks: Number,
		date: Date,
		urlShort: { type: String, unique: true },
		userType: String,
		validity: Number,
	},
	{
		versionKey: false,
	}
);

// Creating model
const urlModel = mongoose.model('urls', urlScheme);

// Exports
module.exports = urlModel;
