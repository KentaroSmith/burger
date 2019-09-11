var express = require("express");

var burger = require("../models/burgers.js")

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data)
        res.render("index", { burger_data })
    })

});

router.put("/burgers/update?burger_id=:id", function (req, res) {
    var IDtoUpdate = req.params.id;
    burger.update(
        { devoured: true },
        IDtoUpdate, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
            console.log(result);
            res.redirect("/");
        })
})
module.exports = router

