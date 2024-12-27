/**
Readline is usefull to ask the Questions to our terminal users.
--> sending function to other functions as agruments //done()
 */
const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


function collectAnswers(questions, done) { // here we call done function when we're out of questions
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = (answer) => {
        answers.push(answer.trim());

        if (answers.length < questions.length) {
            rl.question(
                questions[answer.length],
                questionAnswered
            );
        }else{
            return done(answers);
        }
    };
    rl.question(questions[0], questionAnswered)
};

const questions = [
    "What is your name ?",
    "Where do you live  ?",
    "What are you learning now ?"
];

collectAnswers(questions, (answers)=>{// here is the done function passes as argument
    console.log("Thank you for your answers");// and we define here done functions
    console.log(answers);    
    process.exit();
})

// rl.question("How do you like Node?", answer =>{
//     console.log(`your answer: ${answer}`);
//     // process.stdout.write(`your answer : ${answer}`);
// });