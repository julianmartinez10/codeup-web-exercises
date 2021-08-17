"use strict";

// var userInput = prompt("Select an odd number between 1 and 50");
// var numPick = Number(userInput);

for(var i=1; i <= 50; i++){
    //  TRYING VARIABLE INSIDE AND OUTSIDE OF LOOP
    var userInput = prompt("Select an odd number between 1 and 50");
    var numPick = Number(userInput);
    if(numPick % 2 === 0){
        // alert("That's an even number. Please refresh and try again.")
        console.log(`iteration #${i}`);
        continue;
    }else{
        console.log(`Thank you for selecting an odd number. ${numPick} is an odd number!`);
        break;
    }
    console.log("This is iteration #" + i);
}
console.log("You've reached the end of the loop");

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.