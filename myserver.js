const http = require("http");
const fs = require("fs");

const file = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        const newfile = file.replace("{%uname%}", "Harsh");
        res.end(newfile);
    }
});

server.listen(8000, () => {
    console.log("listening on port 8000");
});