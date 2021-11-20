const http = require("http");

const server = http.createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // console.log(req.url);
    // res.end("Hello World");

    // routing the url
    if (req.url == "/") {
        res.end("Home page");
    } else if (req.url == "/about") {
        res.end("About page");
    } else {
        res.writeHead(404);
        res.end("Not found");
    }
});

server.listen(8000, () => {
    console.log(`listining 8000`);
});