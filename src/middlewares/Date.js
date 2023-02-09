let validity = 0;

function getDate() {
	const date = new Date();
	const fixDate = date.toUTCString();
	const newDate = new Date(fixDate);
	return newDate;
}

function setValidity() {
	const date = new Date();
	const now = date.getDate();
	validity = now + 11;
}

function getToday() {
	const date = new Date();
	const now = date.getDate();
	return now;
}

function getValidity() {
	return validity;
}

module.exports = {
	getDate,
	getValidity,
	getToday,
	setValidity,
};
