const sentence = "hello there from lighthouse labs";


// change to c style
for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i]); // print the char here
        if (i === sentence.length - 1) {
            process.stdout.write('\n');
        }
    }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.
}