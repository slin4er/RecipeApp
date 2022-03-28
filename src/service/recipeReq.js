const Recipe = require('../models/recipe')

const getAllRecipes = async (req, res) => {
	try {
		const recipes = await Recipe.find({})
		res.status(200).send({recipes})
	} catch (e) {
		res.status(500).send(e.message)
	}
}

const addRecipe = async (req, res) => {
	try {
		const recipe = await new Recipe({...req.body})
		await recipe.save()
		res.status(200).send({recipe})
	} catch (e) {
		res.status(500).send(e.message)
	}
}

module.exports = {getAllRecipes, addRecipe}