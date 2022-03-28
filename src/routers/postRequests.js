const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const { addRecipe } = require('../service/recipeReq')
const {signInRequest, signOutRequest, signUpRequest} = require('../service/userReq')

router.post('/user/signin', signInRequest)
router.post('/user/signup', signUpRequest)
router.post('/user/signout', auth, signOutRequest)
router.post('/add/recipe', auth, addRecipe)

module.exports = router