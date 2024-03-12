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

// prompt user for alarms
function getAlarmNumbers(handler) {
    console.log("⸻SET ALARMS⸻\n");

    readline.question('Enter any amount of numbers with spaces inbetween to set alarms', input => {
        const numbers = input.trim().split(/\s+/).map(Number);
        handler(numbers);
    });
}

// prompt user for timer duration
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

function startCountdown(duration, numbers) {
    console.log(`\nCountdown starting now!\n`);

    function countdown(timeLeft) {
        if (timeLeft > 0) {
            process.stdout.write(`\r${timeLeft} seconds remaining...`);
            if (numbers.includes(duration - timeLeft)) {
                playSound(); // plays the alarm sound when input number reached
                }
            setTimeout(() => {
                countdown(timeLeft - 1);
            }, 1000);
        } else {
            console.log("\nCountdown complete!");
            readline.close();
        }
    }
    countdown(duration);

}

function playSound() {
    require("child_process").exec("powershell.exe [console]::beep(784, 990)");
}

function startAlarm(numbers) {
    console.log("\nAlarms set:", numbers);
}


// promt user to set alarms
getAlarmNumbers(numbers => {

    getTimerDuration(numbers, duration => {
        startCountdown(duration, numbers);
    });
});