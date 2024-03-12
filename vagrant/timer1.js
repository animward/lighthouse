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

function getAlarmNumbers(handler) {
    console.log("⸻SET ALARMS⸻\n");

    readline.question('Enter any amount of numbers with spaces inbetween to set alarms', input => {
        const numbers = input.trim().split(/\s+/).map(Number);
        handler(numbers);
    });
}

function getTimerDuration(numbers, handler) {
    console.log("⸻TIMER⸻\n")

    readline.question('How long do you want your timer to be??\n', time => {
        if (!isNaN(time) && Number.isInteger(Number(time))) { // check for valid number
            handler(parseInt(time, 10));
            readline.close();
        } else {
            console.log("PLEASE ENTER A VALID NUMBER!"); // error if not valid number
            getTimerDuration(numbers, handler);
        }
    });
}

function startCountdown(duration) {
    console.log(`\nCountdown starting now!\n`);

    function countdown(timeLeft) {
        if (timeLeft > 0) {
            process.stdout.write(`\r${timeLeft} seconds remaining...`)
            setTimeout(() => {
                countdown(timeLeft - 1);
            }, 1000);
        } else {
            console.log("\nCountdown complete!");
            getAlarmNumbers(startAlarm);
        }
    }
    countdown(duration);

}

function startAlarm(numbers) {
    console.log("\nAlarms set:", numbers);
}

getAlarmNumbers(numbers => {
    getTimerDuration(numbers, startCountdown);
});