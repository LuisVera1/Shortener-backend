const { getToday } = require('../middlewares/Date');
const urlModel = require('../models/shortener.model');

async function deleteOldUrl() {
	try {
		const today = getToday();
		const deleted = await urlModel.deleteMany({ validity: today });

		console.info(deleted.deletedCount + ' items deleted from day ' + today);
	} catch (err) {
		console.error('Error deleting by cron-job');
		console.error(err);
	}
}

module.exports = {
	deleteOldUrl,
};
