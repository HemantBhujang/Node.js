const collectAnswers = require("./readLine2")
const questions = [
    "What is your name ?",
    "Where do you live  ?",
    "What are you learning now ?"
];

const answerEvents = collectAnswers(questions, (answers)=>{// here is the done function passes as argument
    console.log("Thank you for your answers");// and we define here done functions
    console.log(answers);    
    process.exit();
})
answerEvents.on("answer",(answer) =>{
     console.log(`The answer is ${answer}`);
    })

