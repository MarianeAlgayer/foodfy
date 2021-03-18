const { date } = require('../../../lib/utils')
const Chef = require('../../models/admin/Chef')

module.exports = {

    index(req, res) {

        Chef.all(function(chefs) {
            return res.render('admin/chefs/index', { chefs })
        })
    },
    create(req, res) {

        return res.render('admin/chefs/create')
    },
    post(req, res) {

        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Please, fill in all required fields.')
            }
        }

        Chef.create(req.body, function(chef) {
            return res.redirect(`admin/chefs/${chef.id}`)
        })
    },
    show(req, res) {

        Chef.find(req.params.id, function(chef) {
            if(!chef) return res.render('public/not-found')

            chef.created_at = date(chef.created_at).format

            return res.render('admin/chefs/show', { chef })
        })
    },
    edit(req, res) {

        Chef.find(req.params.id, function(chef) {
            if(!chef) return res.render('public/not-found')

            return res.render('admin/chefs/edit', { chef })
        })
    },
    put(req, res) {

        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '') {
                return res.send('Please, fill in all required fields.')
            }
        }

        Chef.update(req.body, function() {
            return res.redirect(`chefs/${req.body.id}`)
        })
    },
    delete(req, res) {

        Chef.delete(req.body.id, function() {
            return res.redirect(`chefs`)
        })
    }
}
