var orm = require("../config/orm.js")

var burger = {
    all: function (result) {
        orm.all("burgers", function (res) {
            result(res)
        })
    },
    update: function (id, condition, result) {
        orm.update("burgers", id, condition, function (res) {
            result(res)
        })
    }
}


module.exports = burger;