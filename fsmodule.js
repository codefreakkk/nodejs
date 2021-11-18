const fs = require("fs");

// creates the file if not present
// if the file is present then it overrides the data

// fs.writeFileSync("read.txt", "Hey There");

// appends data to the file synchronously
// fs.appendFileSync("read.txt", "\nThis is second line");

// 1st way
// const data = fs.readFileSync("read.txt");
// console.log(data);
// buffer is the new data type in nodejs it is mainly used to store binary data
// or receiving the packets over the network

// const parsed_data = data.toString();
// console.log(parsed_data);

// 2nd way
// const data = fs.readFileSync("read.txt", "utf8");
// console.log(data);

// fs.readFile("read.txt", "utf8", function(err, data) {
//     console.log(data);
//     if (err) console.log(err);
// });

fs.unlink("read.txt");