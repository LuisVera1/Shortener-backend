// Import mongoose
const mongoose = require('mongoose');

// Creating schema
const systemScheme = new mongoose.Schema({
	links: Number,
});

// Creating model
const systemModel = mongoose.model('system', systemScheme);

// Exports
module.exports = systemModel;
