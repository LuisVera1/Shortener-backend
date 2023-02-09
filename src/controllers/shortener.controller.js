const { createUrl } = require('../middlewares/createUrl');
const { getValidity, getDate } = require('../middlewares/Date');
const urlModel = require('../models/shortener.model');
const systemModel = require('../models/system.model');

async function saveUrl(req, res) {
	try {
		let tinyUrl = createUrl();
		let alredyExist = await urlModel.findOne({ urlShort: tinyUrl });

		while (alredyExist) {
			tinyUrl = createUrl();
			alredyExist = await urlModel.findOne({ urlShort: tinyUrl });
		}

		const url = req.body.url;

		const data = {
			url,
			clicks: 0,
			date: getDate(),
			urlShort: tinyUrl,
			userType: 'basic',
			validity: getValidity(),
		};

		const response = await urlModel.create(data);
		await systemModel.findOneAndUpdate({ $inc: { links: 1 } });

		res.status(201).json(response);
	} catch (err) {
		console.log('error');
		res.status(500).json({ status: 'error' });
	}
}

async function readUrl(req, res) {
	const id = req.params.id;
	try {
		const itemUpdate = await urlModel.findOneAndUpdate({ urlShort: id }, { $inc: { clicks: 1 } });

		const response = {
			clave: id,
			url: itemUpdate.url,
		};

		res.status(200).json(response);
	} catch (err) {
		const response = {
			status: 'Url Not Found',
			url: id,
		};
		res.status(500).json(response);
	}
}

async function loadStatistics(req, res) {
	try {
		const id = req.params.id;
		const response = await urlModel.findOne({ urlShort: id });

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({ err });
	}
}

module.exports = {
	saveUrl,
	readUrl,
	loadStatistics,
};
