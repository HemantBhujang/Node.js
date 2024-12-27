/* Standar Input and Standard Output */
// Asyncronously by using Event Listeners

// process.stdout.write("Hello !\n");//stdout--> standard output

// here i create one array for the QUESTIONS 
const questions = [
    "What is your Name ?\t",
    "What is your College Name ?\t",
    "Your preferred programing language ?\t"
];

// i crete one empty array for the ANSWERS
const answers = [];

//function declaration 
//here i declare one function in that i provide the question from QUESTIONS array.
function ask(i = 0) { //add default argument for function
    process.stdout.write(`\n ${questions[i]}`);
}

//function call
ask();

process.stdin.on("data", function (data) { // req,res 
    // process.stdout.write(data.toString().trim());// take data convert it into string and trim the white spaces
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else{
        process.exit();
    }

})

//Event Listeners 
process.on("exit",function () { // here we can't take any standar input
    //when exit event call this function
    process.stdout.write("\n");
    process.stdout.write(`Hello ${answers[0]} Your College ${answers[1]} is awesome and keep learning ${answers[2]}`);
});
