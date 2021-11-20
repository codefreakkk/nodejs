const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    // const rstream = fs.createReadStream("read.txt");
    // rstream.on("data", (data) => {
    //     res.write(data);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", () => {
    //     res.end("Error");
    // });

    // pipe method
    const rstream = fs.createReadStream("read.txt");
    rstream.pipe(res);
});

server.listen(8000, () => {
    console.log("listining");
});