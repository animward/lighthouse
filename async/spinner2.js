// THIS WILL LEAVE YOU IN AN ENDLESS LOOP BE WARNED
// implement array
const spinnerFrames = ['|', '/', '-', '\\', '|', '-'];

function animate(index) {
    const frame = spinnerFrames[index % spinnerFrames.length];
    process.stdout.write(`\r${frame}    `);
    setTimeout(() => {
        animate(index + 1);
    }, 100);
}

animate(0);

// THIS WILL LEAVE YOU IN AN ENDLESS LOOP BE WARNED