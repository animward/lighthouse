// grabbed from altacademy.com

/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name?', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});*/


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function getTimerDuration(timerHandler) {
    console.log("⸻TIMER⸻\n")

    readline.question('How long do you want your timer to be??\n', time => {
        if (!isNaN(time) && Number.isInteger(Number(time))) { // check for valid number
            timerHandler(parseInt(time, 10));
            readline.close();
        } else {
            console.log("PLEASE ENTER A VALID NUMBER!"); // error if not valid number
            readline.close();
        }
    });
}
function startTimer(duration) {
    console.log(`\nOkay, ${duration} second countdown starting now!`);
}

getTimerDuration(startTimer);