var express = require("express");
var router = express.Router();
//importing the burger model
var burger = require("../models/burgers.js")



router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data)
        res.render("index", { burger_data })
    })

});

router.post("/burgers/update", function (req, res) {
    var condition = "id =" + req.body.id;
    //tried ID validation for both the params and req.body.id, neither is affecting the problem
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect("/")
    })
})
module.exports = router;

