"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(input) {
//
//     if (input === "blue") {
//         return "Many types of birds lay blue eggs.";
//     }
//     if (input === "green") {
//         return "An emerald is a green precious gemstone.";
//     }
//     if (input === "yellow") {
//         return "Sunflowers have big, bright yellow blooms.";
//     }
//     if (input === "purple") {
//         return "Amethyst is a purple variety of quartz.";
//     }
//     if (input === "red") {
//         return "Male cardinals have bright red feathers and beaks.";
//     }
// else {
//     return "Sorry, I'm not familiar with the color " + input;
// }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(input) {
//
//     if (input === "blue") {
//         return "Many types of birds lay blue eggs.";
//     }
//     if (input === "green") {
//         return "An emerald is a green precious gemstone.";
//     }
//     if (input === "yellow") {
//         return "Sunflowers have big, bright yellow blooms.";
//     }
//     if (input === "purple") {
//         return "Amethyst is a purple variety of quartz.";
//     }
//     if (input === "red") {
//         return "Male cardinals have bright red feathers and beaks.";
//     }
// else {
//     return "Sorry, I'm not familiar with the color " + input;
// }
// }

switch(input) {
    case "blue":
        return "Many types of birds lay blue eggs."
        break;
    case "green":
        return "An emerald is a green precious gemstone."
        break;
    case "yellow":
        return "Sunflowers have big, bright yellow blooms."
        break;
    case "purple":
        return "Amethyst is a purple variety of quartz."
        break;
    case "red":
        return "Male cardinals have bright red feathers and beaks."
    default:
        return "Sorry, I'm not familiar with the color " + input;
    }

}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Pick a random color, please!");

alert(analyzeColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount){

    if(luckyNumber === 0){
        return totalAmount;
    } else if(luckyNumber === 1){
        return totalAmount - (totalAmount * .10);
    } else if (luckyNumber ===2){
        return totalAmount - (totalAmount * .25);
    } else if (luckyNumber ===3) {
        return totalAmount - (totalAmount * .35);
    }else if (luckyNumber ===4) {
        return totalAmount - (totalAmount * .50);
    }else if (luckyNumber ===5) {
        return totalAmount - totalAmount;
    }

}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("How much was your bill today?");

alert("Your lucky number was " + luckyNumber + " and your total was $"
    + totalBill + " This means you will now pay $" + calculateTotal(luckyNumber, totalBill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var giveNumber = confirm("Hello!  Would you like to give me a number?");

if(giveNumber) {

    var userNumber = parseInt(prompt("Great! What number?"));

    if (isNaN(userNumber)) {
        alert("Oops, that's not a number!")
    } else {
        alert("You gave me: " + userNumber);

        var isEven = userNumber % 2 === 0;
        var addOneHundred = userNumber + 100;
        var isPositive = userNumber >= 0;

        alert("It is " + isEven + " that your number is even.");
        alert("Here is your number with 100 added to it: " + addOneHundred);
        alert("It was " + isPositive + " that your number given was positive.");
    }
}

