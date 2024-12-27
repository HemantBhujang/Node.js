// collect information from terminal
/* console.log(process.argv);//case sensitive hai bro */
// in terminal all are send to process.argv
// it stores as array 

function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv [indexAfterFlag];
}

let greeting = grab("--greeting");// here we are collecting user informantion 
let user = grab("--user");

console.log(greeting);
console.log(user);

