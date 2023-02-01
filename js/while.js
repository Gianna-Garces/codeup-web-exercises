"use strict";

// var i = 2;
// while(i <= 65536) {
//     console.log(i);
//     i = i *2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
// console.log(allCones);
do {
    var conesSold = Math.floor((Math.random() * 5) + 1);
    if(conesSold < allCones) {
    console.log(conesSold + " cones sold...");
    allCones -= conesSold;
    } else if (conesSold > allCones) {
    console.log("I cannot sell you " + conesSold + ". I only have " + allCones);
    } else {
    console.log("Yay! I sold them all!");
    allCones -= conesSold;
    }
} while(allCones > 0)