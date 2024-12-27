const readLine = require("readline");
const {EventEmitter} = require("events");//ERROR : EventEmitter --> eventEmitter
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


module.exports = (questions, done) => { // here we call done function when we're out of questions
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();
    const questionAnswered = (answer) => {
        emitter.emit("answer",answer);
        answers.push(answer.trim());

        if (answers.length < questions.length) {
            rl.question(
                questions[answers.length],// ERROR : answers --> answer 
                questionAnswered
            );
        }else{
            return done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered)
    return emitter;
};