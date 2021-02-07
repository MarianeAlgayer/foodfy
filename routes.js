const express = require('express')
const routes = express.Router()
const public = require('./controllers/public')
const admin = require('./controllers/admin')

// Public

routes.get('/', public.index)
routes.get('/about', public.about)
routes.get('/recipes', public.recipes)
routes.get("/recipes/:id", public.recipe)

// Adm

routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita

routes.use(function(req, res) {
    res.status(404).render('public/not-found')
})

module.exports = routes
