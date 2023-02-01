"use strict";

// Loops Exercise 2

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)



function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + "x" + i + "=" + number * i);
    }
}
 showMultiplicationTable(5);

// Exercise 3

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.


for(var i=0; i<10; i++) {
        var random = Math.floor((Math.random()*180 ) +20)
        if(random % 2 === 0) {
            console.log(random + " is even");
        } else {
            console.log(random + " is odd");
        }
    }

// Exercise 4

for (var i=1; i<=9; i++) {
    console.log(i.toString().repeat(i))
}

//Exercise 5

for(var i=100; i>=5; i=i-5) {
    console.log(i);
}

