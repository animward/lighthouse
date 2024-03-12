// implement array
const spinnerFrames = ['|', '/', '-', '\\', '|', '-'];

function animate(index) {
    setTimeout(() => {
    process.stdout.write('\r|   ');
    }, 100);
}