const prompt = require('prompt-sync')({ sigint: true });
const number = prompt("Enter a number from below\n1\n10\n100\n1000\n10000\n100000\n1000000\n10000000\n100000000\n");

if (number == 1) {
    console.log("Units");
} else if (number == 10) {
    console.log("Tens");
} else if (number == 100) {
    console.log("Hundreds");
} else if (number == 1000) {
    console.log("Thousands");
} else if (number == 10000) {
    console.log("Ten Thousands");
} else if (number == 100000) {
    console.log("Lakhs");
} else if (number == 1000000) {
    console.log("Ten Lakhs");
} else if (number == 10000000) {
    console.log("Crores");
} else if (number == 100000000) {
    console.log("Ten Crores");
} else console.log("Invalid input!!!");

