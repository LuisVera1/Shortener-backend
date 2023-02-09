const express = require('express');
const { saveUrl, readUrl, loadStatistics } = require('../controllers/shortener.controller');

const app = express.Router();

//create tiny url and save
app.post('/short', saveUrl);

//go to full url from tiny url
app.get('/:id', readUrl);

//load statistics of tiny url
app.get('/info/:id', loadStatistics);

module.exports = app;
