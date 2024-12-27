const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customeEvent",(message,user)=>{
    console.log(`${user}: ${message}`)
});

//whenever we create and eevent we need to emit that event!
emitter.emit("customeEvent","Hello World","Computer");
emitter.emit("customeEvent","Leo de Jenerio","Main!");

process.stdin.on("data",(data)=>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customeEvent","Good Bye","Process");
        process.exit();
    }
    emitter.emit("customeEvent",
        data.toString().trim(),
        "terminal"
    )
})