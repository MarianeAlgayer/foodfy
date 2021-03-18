const { date } = require('../../../lib/utils')
const Chef = require('../../models/public/Chef')

module. exports = {

    chefs(req, res) {

        Chef.all(function(chefs) {
            return res.render('public/chefs', { chefs })
        })
    }
}
