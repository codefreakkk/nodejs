const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index", {
        uname: "Harsh Sachin Said",
    });
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(8000, () => {
    console.log("listening");
});