// grabbed from altacademy.com
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("⸻TIMER⸻\n")

readline.question('How long do you want your timer to be??\n', time => {
    if (!isNaN(time) && Number.isInteger(Number(time))) {
        console.log(`\nOkay, ${time} countdown starting now!`);
        readline.close();
    } else {
        console.log("PLEASE ENTER A VALID NUMBER!");
        readline.close();
    }
  readline.close();
});