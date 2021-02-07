const data = require('../data.json')

// index
exports.index = function(req, res) {
    return res.render('public/index', { recipes: data.recipes })
}

// about
exports.about = function(req, res) {
    return res.render('public/about')
}

// recipes
exports.recipes = function(req, res) {
    return res.render('public/recipes', { recipes: data.recipes })
}

// recipe
exports.recipe = function(req, res) {
    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) {
        return res.render('public/not-found')
    }

    return res.render('public/recipe', { recipe: foundRecipe })
}