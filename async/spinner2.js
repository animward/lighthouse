// implement array
const spinnerFrames = ['|', '/', '-', '\\', '|', '-'];

function animate(index) {
    const frame = spinnerFrames[index % spinnerFrames.length];
    process.stdout.write(`\r${frame}    `);
    setTimeout(() => {
        animate(index + 1);
    }, 100);
}