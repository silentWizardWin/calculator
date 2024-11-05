const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

doMatch();
function doMatch() {
    rl.question("Please enter the first number : ", (answer1) => {
        rl.question("Please enter the operation : ", (answer2) => {
            rl.question("Please enter the second number : ", (answer3) => {
                if (answer2 === "+") {
                    var result = +answer1 + +answer3;
                    console.log(`The sum of above two numbers is ${result}`);
                }
                if (answer2 === "-") {
                    var result = +answer1 - +answer3;
                    console.log(`The difference of above two numbers is ${result}`);
                }
                console.log("------------------------------------------------------------");
                doMatch();
            });
        });
    });
}