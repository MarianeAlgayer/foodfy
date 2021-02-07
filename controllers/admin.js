const fs = require('fs')
const data = require('../data.json')

// index
exports.index = function(req, res) {
    return res.render('admin/index', { recipes: data.recipes })
}

// create
exports.create = function(req, res) {
    return res.render('admin/create')
}

// show
exports.show = function(req, res) {
    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) {
        return res.render('public/not-found')
    }

    return res.render('admin/details', { recipe: foundRecipe })
}

// edit
exports.edit = function(req, res) {
    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) {
        return res.render('public/not-found')
    }

    return res.render('admin/edit', { recipe: foundRecipe })
}

// post
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Please, fill in all required fields.')
        }
    }

    let { image_png, image_url, title, author, ingredients, preparation, tips } = req.body

    const id = Number(data.recipes.length)

    data.recipes.push({
        id,
        image_png, 
        image_url, 
        title, 
        author, 
        ingredients, 
        preparation, 
        tips
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send('Write file error!')

        return res.redirect('recipes')
    })
}

// put
exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
        if( id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) {
        return res.render('public/not-found')
    }

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send('Write file error!')

        return res.redirect(`recipes/${id}`)
    })
}

// delete
exports.delete = function(req, res) {
    const { id } = req.body
    
    const filteredRecipes = data.recipes.filter(function(recipe) {
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
        if(err) return res.send('Write file error!')

        return res.redirect('recipes')
    })
}
