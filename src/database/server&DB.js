const mongoose = require('mongoose');
const URI = process.env.URI;

const DbConect = () => {
	mongoose
		.connect(URI)
		.then(() => {
			console.log('Database connection successful');
		})
		.catch((error) => {
			console.error('Something is wrong:', error);
		});
};

module.exports = { DbConect };
