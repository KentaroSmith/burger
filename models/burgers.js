var orm = require("../config/orm.js")

var burger = {
    all: function (result) {
        orm.all("burgers", function (res) {
            result(res)
        })
    },
    update: function (id, result) {
        orm.update("burgers", id, result)
    }
}


module.exports = burger;