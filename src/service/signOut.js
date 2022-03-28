const User = require('../models/user')

const signOutRequest = async (req, res) => {
	try {
		req.user.tokens = []
		await req.user.save()
		res.status(200).send()
	} catch (e) {
		res.status(500).send(e.message)
	}
}

module.exports = signOutRequest