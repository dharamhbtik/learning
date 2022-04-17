const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} nad ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic data recieved`);
});
customEmitter.emit("response", "Dharmendra", 31);
