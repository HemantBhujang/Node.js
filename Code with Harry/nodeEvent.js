const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull',()=>{ //this is eventListener for the myEmitter.emit
    console.log("Please turn off the Motor !");
    setTimeout(()=>{
        console.log("Gentle reminder ! ");
    }, 2000);
});

console.log ("The Script is running now.");
myEmitter.emit('waterFull');//where this line is emit there myEmitter.on code are running. Therefore we are getting outputs script running first and then we get turn off output.