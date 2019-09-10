var connection = require("./connection.js")
var orm = {
    all: function (tableInput, result) {
        connection.query("SELECT * FROM " + tableInput + ";", function (err, response) {
            if (err) throw err;
            result(response)
        })
    },
    update: function (tableInput, condition, response) {
        connection.query("UPDATE " + tableInput + " SET devoured=TRUE WHERE ID =" + condition + ";", function (err, result) {
            if (err) throw err;
            response(result)
        })
    }
}

module.exports = orm