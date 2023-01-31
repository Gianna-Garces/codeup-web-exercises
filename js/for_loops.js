"use strict";

// Loops Exercise 2
// function showMultiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + "x" + i + "=" + num * i);
//     }
// }


// Exercise 3

function doThing() {
    for (let i = 0; i <10; i++) {
        let generatedNumber = numberGenerator();
        let evenOrOdd = isEvenOrOdd(generatedNumber);
        console.log(generatedNumber + evenOrOdd)
    }
}
function numberGenerator() {
    return Math.floor(Math.random() * + 20);
}
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return " is even";
    } else {
        return " is odd";
    }
}

doThing();

// Exercise 4

function numberTree(){
    for (let i = 0; i < 9; i++) {
        let numberLine = "";
        for (let j = 0; j < i + 1: j ++) {
            numberLine
        }
    }
}






