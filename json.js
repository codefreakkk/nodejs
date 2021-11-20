const fs = require("fs");

const data = {
    Name: "harsh",
    age: "19",
};

// console.log(data);

// let sdata = JSON.stringify(data);
// // console.log(sdata);

// let obj = JSON.parse(sdata);
// console.log(obj.Name);

// Insert json data into another file and read the data from the file and convert back to json format

const jsondata = JSON.stringify(data);
// fs.writeFile("test.json", jsondata, (err) => {
//     console.log("Data inserted");
// });

// fs.readFile("test.json", "utf8", (err, data) => {
//     console.log(JSON.parse(data));
// });