"use strict";

//  TODO: An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
var numCones = Math.floor(Math.random()*50)+50;
do{
    var amtConesBought = Math.floor(Math.random()*5)+1;
    console.log(`Thank you for purchasing ${amtConesBought} cones today!`);
}while( < numCones)