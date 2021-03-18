const { date } = require('../../../lib/utils')
const db = require('../../../config/db')

module.exports = {

    all(callback) {

        db.query(`
            SELECT recipes.*, chefs.name AS chef_name 
            FROM recipes
            LEFT JOIN chefs ON (recipes.chef_id = chefs.id)`, function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows)
        })
    },
    create(data, callback) {

        const query = `
            INSERT INTO recipes (
                chef_id,
                image_url,
                title,
                ingredients,
                preparation,
                tips,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        ` 

        const values = [
            data.chef,
            data.image_url,
            data.title,
            data.ingredients,
            data.preparation,
            data.tips,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {

        db.query(`
            SELECT recipes.*, chefs.name AS chef_name 
            FROM recipes
            LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
            WHERE recipes.id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
        }) 
    },
    update(data, callback) {

        const query = `
            UPDATE recipes SET
                chef_id=($1),
                image_png=($2),
                image_url=($3),
                title=($4),
                ingredients=($5),
                preparation=($6),
                tips=($7)
            WHERE id = $8
        `

        const values = [
            data.chef,
            data.image_png,
            data.image_url,
            data.title,
            data.ingredients,
            data.preparation,
            data.tips,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },
    delete(id, callback) {

        db.query(`
            DELETE 
            FROM recipes
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`
    
                callback()
            })
    },
    chefsSelectOptions(callback) {

        db.query(`SELECT name, id FROM chefs`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    }
}