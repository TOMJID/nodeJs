import { EventEmitter } from "node:events";

// registering an event listener
const emitter = new EventEmitter();

// what to do if ballRing event is emitted or triggered
emitter.on("ballRing", ({ person, time }) => {
  console.log(
    `You need to come before ${time} because ${person} said \n that after ${time} we are cloned .`
  );
});

// the event will be called after 2 seconds
setTimeout(() => {
  emitter.emit("ballRing", {
    person: "Tomjid",
    time: "4:20 PM",
  });
}, 2000);
