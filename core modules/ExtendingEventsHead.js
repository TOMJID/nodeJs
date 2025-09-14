const ExtendedEventClass = require("./ExtendingEventsBody.js");

const extendedEventInstance = new ExtendedEventClass();
extendedEventInstance.on("ballRing", ({ person, time }) => {
  console.log(
    `You need to come before ${time} because ${person} said \n that after ${time} we are cloned  .`
  );
});

extendedEventInstance.extendedEvent();
