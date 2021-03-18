const db = require('../../../config/db')

module.exports = {

    all(callback) {

        db.query(`
            SELECT recipes.*, chefs.name AS chef_name 
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)`, function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows)
        })
    },
    find(id, callback) {

        db.query(`
            SELECT recipes.*, chefs.name AS chef_name 
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            WHERE recipes.id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
        }) 
    },
    findBy(filter, callback) {

        db.query(`
            SELECT recipes.*, chefs.name AS chef_name 
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            WHERE recipes.title ILIKE '%${filter}%'`, function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows)
        })
    }
}