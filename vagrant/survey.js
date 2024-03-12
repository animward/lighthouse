const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("⸻ SURVEY ⸻");

rl.question('What is your name?\n ', (name) => {
    console.log(`Hello ${name}! the survey will now begin!`);
  rl.close();
});