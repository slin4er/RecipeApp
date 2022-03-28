const User = require('../models/user')
const express = require('express')
const router = express.Router()
const {SWW, PDMError} = require('../consts/constErrors')
const bcrypt = require('bcrypt')

router.post('/user/signup', async (req, res) => {
	try {
		const userExists = await User.findOne({login: req.body.login})
		if(userExists) {
			throw new Error(SWW)
		}
		if(req.body.password !== req.body.passwordAgain) throw new Error(PDMError)
		const password = await bcrypt.hash(req.body.password, 8)
		const user = await new User({
			...req.body,
			password
		})
		const token = user.generateAuthToken()
		res.cookie('auth_token', token)
		res.status(200).send({user, token})
	} catch (e) {
		res.status(500).send(e.message)
	}
})

module.exports = router