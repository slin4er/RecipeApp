const User = require('../models/user')
const {NFError} = require('../consts/constErrors')

const signInRequest = async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.login, req.body.password)
		if(!user) return res.status(404).send(NFError)
		const token = await user.generateAuthToken()
		res.cookie('auth_token', token)
		res.status(200).send({user, token})
	} catch (e) {
		res.status(500).send(e.message)
	}
}

module.exports = signInRequest