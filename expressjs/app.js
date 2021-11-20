const express = require("express");
const app = express();

// syntax
// app.get(route, callback)

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send({
        name: "Harsh",
    });
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(8000, (err) => {
    console.log("Listening");
});