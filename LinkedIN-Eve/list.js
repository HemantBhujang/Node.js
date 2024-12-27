const fs = require("fs")//file systems

const file = fs.readdirSync('./')//read directory synchronously

console.log(file);// this will give an array which consist of FILES present in this DIRECTORY.

// if the code is ASYNCHRONOUS then the terminal run the next codes and after that runs the ASYNC code.
