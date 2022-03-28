const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const {getAllRecipes} = require('../service/recipeReq')

router.get('/', auth, getAllRecipes)

module.exports = router