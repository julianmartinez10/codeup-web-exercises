"use strict";


// for(var i=1; i <= 50; i++){
//     var userInput = prompt("Select an odd number between 1 and 50");
//     var numPick = Number(userInput);
//     if(numPick % 2 !== 0){
//         // alert("That's an even number. Please refresh and try again.")
//         console.log(`iteration #${i}`);
//         break;
//     }
//     console.log("This is iteration #" + i);
// }
// console.log("You've reached the end of the loop or you BROKE out!");

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
var userInput = prompt("Select an odd number between 1 and 50");
var numPick = Number(userInput);
console.log(`Number to skip ${numPick}`);

for(var i=1; i<50; i++){
    if(i % 2 !== 0){
        if(i === numPick){
            console.log(`Yikes, we skipping ${numPick}`);
            continue;
        }
        console.log(`${i} is an odd number!`);
    }
    // if(numPick === i){
    //     console.log(`Yikes, we are skipping ${numPick}`);
    //     continue;
    // }
}