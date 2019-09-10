var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var burger = require("../models/burgers.js")

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data)
        res.render("index", { burger_data })
    })

});

router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect("/");
    })
})
module.exports = router

