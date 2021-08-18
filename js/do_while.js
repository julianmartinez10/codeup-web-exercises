"use strict";

//  TODO: An ice cream seller can't go home until she sells all of her cones.
//   First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
//   Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
//   Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//  OUTPUT SHOULD LOOK LIKE BELOW:
//  5 cones sold...  // if there are enough cones
//  Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//  Yay! I sold them all! // If there are no more cones

var numConesToSell = Math.floor(Math.random()*50)+50;
console.log(numConesToSell);
do{
    var amtConesBought = Math.floor(Math.random()*5)+1;
    console.log(`${amtConesBought} cones sold...`);
    numConesToSell -= amtConesBought;
    if(amtConesBought > numConesToSell){
        console.log(`Cannot sell you 6 cones I only have ${numConesToSell}...`);
    }else{
        if(numConesToSell === 0){
            console.log(`Yay! I sold all ${numConesToSell} cones!`)
        }
    }
}while( amtConesBought !== numConesToSell)