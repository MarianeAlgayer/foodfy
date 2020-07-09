const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape:false,
    noCache:true
})

server.get('/', function(req, res) {
    return res.render('home', { recipes })
})

server.get('/about', function(req, res) {
    return res.render('about')
})

server.get('/recipes', function(req, res) {
    return res.render('recipes', { recipes })
})

server.get("/recipes/:index", function(req, res) {
    const recipeIndex = req.params.index
    const recipe = recipes[recipeIndex]

    if (!recipe) {
        return res.render('not-found')
    }

    return res.render('recipe', { recipe })
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(8000, function() {
    console.log('Sever is running!')
})