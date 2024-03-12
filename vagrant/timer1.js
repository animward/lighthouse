// grabbed from altacademy.com
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("⸻TIMER⸻\n")

readline.question('How long do you want your timer to be??\n', time => {
  console.log(`\nOkay, ${time} countdown starting now!`);
  readline.close();
});