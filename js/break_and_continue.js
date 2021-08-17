"use strict";

for(var i=0; i < 50; i++){
    var pickOdd = prompt("Select an odd number between 1 and 50");
    if(Number(pickOdd) % 2 !== 0){
        console.log("This is an odd number")
        continue;
    }
    console.log("Here's an iteration?")
}