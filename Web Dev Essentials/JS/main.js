function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function add7(num) {
    return num + 7;
}

function lastLetter(str) {
    return str.charAt(str.length - 1);
}
console.log(add7(10));
console.log(multiply(5, 6));
console.log(capitalize("hello world"));
console.log(lastLetter("hello world"));
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function fizzBuzz() {



rl.question("Enter your number: ", (answer) => {
    if (isNaN(answer)) {
        console.log("Please enter a valid number.");
        rl.close();
        return;
    }
    for (let i = 1; i <= answer; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        }
        
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }   else {
            console.log(i);
        }
    }
    fizzBuzz();
});
}



fizzBuzz();