const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(ele1, ele2, callback) {
    reader.question(`is ${ele1} greater than ${ele2}? `, function (answer) {
        if (answer === 'yes')  {
            callback(true);
        } else {
            callback(false);
            reader.close();
        }
    })
}
function innerBubbleSortLoop(array, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < array.length-1) {
        askIfGreaterThan(array[i], array[i+1], callback)
    }
}

askIfGreaterThan(2, 4);