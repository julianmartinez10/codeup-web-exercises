"use strict";

for(var i=0; i < 50; i++){
    var pickOdd = prompt("Select an odd number between 1 and 50");
    if(Number(pickOdd) % 2 === 0){
        continue;
    }else{
        console.log("Still working on this.");
        break;
    }
}