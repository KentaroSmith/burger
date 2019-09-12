var connection = require("./connection.js")
var orm = {
    all: function (tableInput, result) {

        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, response) {
            if (err) throw err;
            result(response)
            console.log(query)
        })
    },
    update: function (tableInput, condition, response) {
        var query = "UPDATE " + tableInput + " SET devoured=true WHERE ID =" + condition + ";"
        connection.query(query, function (err, result) {
            if (err) throw err;
            response(result)
            console.log(query)
        })
    },
    create: function (tableInput, val, cb) {
        var query = "INSERT INTO " + tableInput + " (burger_name) VALUES (" + "'" + val + "'" + ");"
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm