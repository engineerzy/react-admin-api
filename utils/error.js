function createError (msg, status = 403) {
	return {
		status,
		msg,
		data: null
	}
}
module.exports = createError