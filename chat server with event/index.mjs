import EventEmitter from "node:events";

//creating server
function createServer() {
  const emitter = new EventEmitter();

  // connecting user to the server
  function connect(user) {
    console.log(`${user} is connecting...`);
    emitter.emit("userConnected", user);
  }
  // disconnecting user from the server
  function disconnect(user) {
    console.log(`${user} is disconnecting...`);
    emitter.emit("userDisconnected", user);
  }
  return {
    connect,
    disconnect,
    on: emitter.on.bind(emitter),
    emit: emitter.emit.bind(emitter),
  };
}

// server
const chatServer = createServer();

// registering listeners
chatServer.on("userConnected", (user) => {
  console.log(`welcome , ${user}!`);
});

chatServer.on("userDisconnected", (user) => {
  console.log(`goodbye ,${user}`);
});

// simulate event
chatServer.connect("tomjid");
chatServer.disconnect("tomjid");
