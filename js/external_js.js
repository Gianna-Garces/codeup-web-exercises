"use strict";

console.log("Hello from external Javascript.");

alert("Welcome to my website!");

var userResponse = prompt("What is your favorite color?");

console.log('The user entered: ' + userResponse);

alert("Oh wow, " + userResponse +  " is my favorite color too!");


//Exercise 3 Part 1

var moviePricePerDay = 3;

var daysLittleMermaid = prompt("How many days did you rent The Little Mermaid?");
alert("Thanks, you rented The Little Mermaid for " + daysLittleMermaid + " days");

var daysBrotherBear = prompt("How many days did you rent Brother Bear?");
alert("Thanks, you rented Brother Bear for " + daysBrotherBear + " days");

var daysHercules = prompt("How many days did you rent Hercules?");
alert("Thanks, you rented Hercules for " + daysHercules+ " days");

var priceLittleMermaid = daysLittleMermaid * moviePricePerDay;
var priceBrotherBear = daysBrotherBear * moviePricePerDay;
var priceHercules = daysHercules * moviePricePerDay;
var totalPrice = priceLittleMermaid + priceBrotherBear + priceHercules;

alert("Each movie costs $3 per day, which makes your total:\n"
    +"\nThe Little Mermaid: "+ "$"  + priceLittleMermaid
    +"\nBrother Bear: "+ "$" + priceBrotherBear
    +"\nHercules: "+ "$" + priceHercules
    +"\nTotal: "+ "$" + totalPrice);

//Exercise 3 Part 2

var googleHoursWorked = prompt("How many hours did you work for Google this week?");
var googleHourRate = prompt("What is the hourly rate at Google?");
var googleTotalPay = googleHoursWorked * parseFloat(googleHourRate);

var amazonHoursWorked = prompt("How many hours did work you for Amazon this week?");
var amazonHourRate = prompt("What is the hourly rate at Amazon?");
var amazonTotalPay = amazonHoursWorked * parseFloat(amazonHourRate);

var facebookHoursWorked = prompt("How many hours did you work for Facebook this week?");
var facebookHourRate = prompt("What is the hourly rate at Facebook?");
var facebookTotalPay = facebookHoursWorked * parseFloat(facebookHourRate);

var weekTotalPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
alert("You're total pay for this week combined is $" + weekTotalPay.toFixed(2));

//Exercise 3 Part 3

var totalCLassSize = prompt("What is the total class size?");

var currentClassSize = prompt("What is the current class size");

var workingHours = confirm("Do these class hours work for the student?");

var canEnroll = (totalCLassSize > currentClassSize) && workingHours;

alert("It is " + canEnroll + " that the student can enroll for class!");

//Exercise 3 Part 4

alert("Welcome to Yoshi's Vintage Shop!  We have a special offer if you purchase 2 or more items.  " +
    "If you are a premium member there is no minimum and you will be able to redeem the offer. " +
    "Let's just make sure it isn't expired.")

var premiumMember = confirm("Are you a premium member?");

var shoppingCartSize = prompt("How many items do you have in your cart?");

var offerValid = confirm("Is the offer still valid?");

alert("It is " + ((premiumMember || shoppingCartSize >= 2) && offerValid)+
" that the offer can be applied for a discount on your order today. " +
    "Thank you for shopping with us today! ");














