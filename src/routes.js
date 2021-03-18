const express = require('express')
const routes = express.Router()
const publicRecipes = require('./app/controllers/public/recipes')
const publicChefs = require('./app/controllers/public/chefs')
const adminRecipes = require('./app/controllers/admin/recipes')
const adminChefs = require('./app/controllers/admin/chefs')

// Public

routes.get('/', publicRecipes.index)
routes.get('/about', publicRecipes.about)
routes.get('/recipes', publicRecipes.recipes)
routes.get("/recipes/:id", publicRecipes.recipe)
routes.get('/chefs', publicChefs.chefs)

// Adm - Recipes

routes.get("/admin/recipes", adminRecipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", adminRecipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", adminRecipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", adminRecipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", adminRecipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", adminRecipes.put); // Editar uma receita
routes.delete("/admin/recipes", adminRecipes.delete); // Deletar uma receita

// Adm - Chefs

routes.get("/admin/chefs", adminChefs.index); // Mostrar a lista de chefs
routes.get("/admin/chefs/create", adminChefs.create); // Mostrar formulário de novo chef
routes.get("/admin/chefs/:id", adminChefs.show); // Exibir detalhes de um chef
routes.get("/admin/chefs/:id/edit", adminChefs.edit); // Mostrar formulário de edição de um chef

routes.post("/admin/chefs", adminChefs.post); // Cadastrar novo chef
routes.put("/admin/chefs", adminChefs.put); // Editar um chef
routes.delete("/admin/chefs", adminChefs.delete); // Deletar um chef

routes.use(function(req, res) {
    res.status(404).render('public/not-found')
})

module.exports = routes
