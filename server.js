var express = require("express");
var handlebars = require("express-handlebars")
var app = express();
//var mysql = require("mysql");

const PORT = process.env.PORT || 3000;

//data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/routes.js");
app.use("/", routes)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
