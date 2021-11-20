// const EventEmitter = require("events");
// const emitter = new EventEmitter();

const event = require("events");
const emitter = new event.EventEmitter();

emitter.on("scream", (err) => {
    console.log(err);
});

emitter.on("scream2", () => {
    console.log("Hey there second event fired");
});

emitter.emit("scream", "Error occured");
// emitter.emit("scream2");