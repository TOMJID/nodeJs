const EventEmitter = require("events");

// registering a event listener
const emitter = new EventEmitter();

class extendedEventClass extends EventEmitter {
  extendedEvent() {
    console.log("Extending Events started");

    setTimeout(() => {
      this.emit("ballRing", {
        person: "Aunt",
        time: "2:00 PM",
      });
    }, 2000);
  }
}

module.exports = extendedEventClass;
