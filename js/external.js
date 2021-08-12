'use strict';

console.log("Hello from external JavaScript");

// alert("Welcome to my Website!");


// var userInput = prompt("What is your favorite color?");
// alert("Great, "+userInput+" is my favorite color too!");
//
// confirm("Do you want to remain logged in?");

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear, (for
// 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
// var userMoviePick = prompt("How many days do you want to rent Little Mermaid?");
// var userMoviePick2 = prompt("How many days do you want to rent Brother Bear?");
// var userMoviePick3 = prompt("How many days do you want to rent Hercules?");
// var totalDays = Number(userMoviePick) + Number(userMoviePick2) + Number(userMoviePick3);
// alert("Your total cost " + (totalDays * 3));
// console.log ("Total Days: " + totalDays);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var userHrsGoogle = prompt("How many hours did you work with Google?");
var userHrsAmazon = prompt("How many hours did you work with Amazaon?");
var userHrsFB = prompt("How many hours did you work with Facebook?");
var weekPayTotal = (Number(userHrsGoogle)*400) + (Number(userHrsAmazon)*380) + (Number(userHrsFB)*350);
alert("Your weeks pay is: $" + weekPayTotal.toFixed(2));


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.