//Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const { deleteOldUrl } = require('./controllers/cron-job.controller.js');
const { DbConect } = require('./database/server&DB.js');
const { setValidity } = require('./middlewares/Date.js');

//Import router file
const shortener = require('./routers/shortener.router.js');

const PORT = process.env.PORT;

const server = express();
server.use(express.json());
server.use('/', shortener);

// Connect to DB
DbConect();
server.listen(PORT, () => {
	console.log('Server running on port:', PORT);
});

//Cron job
setValidity();
cron.schedule('* * * * *', () => {
	setValidity();

	setTimeout(() => {
		deleteOldUrl();
	}, 4000);
});
