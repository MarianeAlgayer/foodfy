const { date } = require('../../../lib/utils')
const Recipe = require('../../models/public/Recipe')

module. exports = {

    index(req, res) {

        const { filter } = req.query

        if(filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('public/index', { recipes, filter })
            })
        } else {
            Recipe.all(function(recipes) {
                return res.render('public/index', { recipes })
            })
        }
    },
    about(req, res) {

        return res.render('public/about')
    },
    recipes(req, res) {

        const { filter } = req.query

        if(filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('public/recipes', { recipes, filter })
            })
        } else {
            Recipe.all(function(recipes) {
                return res.render('public/recipes', { recipes })
            })
        }
    },
    recipe(req, res) {

        Recipe.find(req.params.id, function(recipe) {
            if(!recipe) return res.render('public/not-found')

            recipe.created_at = date(recipe.created_at).format

            return res.render('public/recipe', { recipe })
        })
    }
}
