/* Set timer */
 
const waitTime = 3000; 
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () =>{
    clearInterval(interval);// stop the timer here !
    console.log("Done!");
};

setTimeout(timerFinished, waitTime); //waittTime --> how long it take

const waitInterval = 500;
let currentTime = 0;

const incrTime = () => {
    currentTime = currentTime + waitInterval;
    // console.log(`waiting ${currentTime / 1000} seconds`);
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting...${p}`);
};

const interval = setInterval(incrTime, waitInterval);//incrTime keep going till waitInterval 