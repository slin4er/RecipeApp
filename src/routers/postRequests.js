const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const signInRequest = require('../service/signIn')
const signOutRequest = require('../service/signOut')
const signUpRequest = require('../service/signUp')

router.post('/user/signin', signInRequest)
router.post('/user/signup', signUpRequest)
router.post('/user/signout', auth, signOutRequest)

module.exports = router