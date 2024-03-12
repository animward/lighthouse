const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`\x1b[32m                                                        .
            ___---""""""""""""""---____                / |
       _--""   \\)))))))))))))))))))))))"""""___       /  |
    _-" _       \\))))))_-"|))))))))))))))))))))"""---' __|
 _-"   / \\       |))))|   |)))))))))))))))))))))))))/--  |
<___.  \\_/       |))))|   |))))))))))))))))))))))))<-    |
 "-_             |))))|   |)))))))))))))))))))))))))\\--__|
    "-_         /)))))) -_|))))))))))))))))))))___---.   |
       "--__   /)))))))))))))))))))))))_____"""       \\  |
            """---______________---""""                 \\ |
                                                        '\x1b[0m`);

console.log("⸻ SURVEY ⸻");

rl.question('\x1b[32m What is your name? \x1b[0m \n ', (name) => {
    console.log(`Hello ${name}! the survey will now begin!\n`);

    rl.question('\x1b[32m What is your favorite hobby? \x1b[0m \n ', (hobby) => {
        console.log(`\nYour favorite hobby is: ${hobby}\n`);

        rl.question(`\x1b[32m What do you listen to while you ${hobby}? \x1b[0m \n `, (music) => {
            console.log(`\nYou listen to ${music} while ${hobby}\n`);
                
            rl.question(`\x1b[32m Which meal of the day is your favorite? \x1b[0m \n `, (favoriteMealOfTheDay) => {
                console.log(`\nYour favorite meal of the day is: ${favoriteMealOfTheDay}\n`);

                rl.question(`\x1b[32m What is your favorite thing to eat for ${favoriteMealOfTheDay}? \x1b[0m \n `, (meal) => {
                    console.log(`\nYou like to eat ${meal} for ${favoriteMealOfTheDay}\n`);

                    rl.question(`\x1b[32m What sport is your favorite?\x1b[0m  \n `, (sport) => {
                        console.log(`\nYour favorite sport is ${sport}\n`);

                        rl.question(`\x1b[33m What is your favorite ${sport} team? \x1b[0m \n `, (favTeam) => {
                            console.log(`\nYour favorite sports team is ${favTeam}\n`);
                
                            rl.question(`\x1b[33m What is the name of your first pet? \x1b[0m\n `, (petsName) => {
                                console.log(`\nYour firsts pet name was ${petsName}\n`);

                                rl.question(`\x1b[38;5;208m What year were you born? \x1b[0m\n `, (birthYear) => {
                                    console.log(`\nYou were born in: ${birthYear}\n`);

                                    rl.question(`\x1b[31m What is your Mother maiden name? \x1b[0m\n `, (mothersMaidenName) => {
                                        console.log(`\nYour Mothers maiden name is: ${mothersMaidenName}\n`);

                                        rl.close();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
