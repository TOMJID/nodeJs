const EventEmitter = require("events");

// registering a event listener
const emitter = new EventEmitter();

//  what to do if ballRing event is on
emitter.on("ballRing", ({ person, time }) => {
  console.log(
    `You need to come before ${time} because ${person} said \n that after ${time} we are cloned  .`
  );
});

// event will be raised after 2 seconds
setTimeout(() => {
  // raise an event
  emitter.emit("ballRing", {
    person: "Aunt",
    time: "2:00 PM",
  });
}, 2000);
