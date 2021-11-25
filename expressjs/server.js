const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// const temppath = path.join(__dirname, "./clientscripts");
const partialspath = path.join(__dirname, "./partials");

// set the template engine to hbs
app.set("view engine", "hbs");
// changning views folder name to clientscripts
// app.set("views", temppath);
hbs.registerPartials(partialspath);

app.get("/", (req, res) => {
    res.render("index", {
        uname: "Harsh Sachin Said",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        uname: "Harsh sachin",
    });
});

app.get("/about/*", (req, res) => {
    res.render("error", {
        errorComment: "Opps 404 Page not found",
        uname: "Harsh sachin said",
    });
});

app.get("*", (req, res) => {
    res.render("error", {
        errorComment: "Opps 404 Page not found",
        uname: "Harsh sachin said",
    });
});

app.listen(8000, () => {
    console.log("listening");
});