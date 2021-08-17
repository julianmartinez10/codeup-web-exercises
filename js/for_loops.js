"use strict";

// function showMultiplicationTable(num){
//     console.log(`${num} X 1 = ${(num*1)}`);
//     console.log(`${num} X 2 = ${(num*2)}`);
//     console.log(`${num} X 3 = ${(num*3)}`);
//     console.log(`${num} X 4 = ${(num*4)}`);
//     console.log(`${num} X 5 = ${(num*5)}`);
//     console.log(`${num} X 6 = ${(num*6)}`);
//     console.log(`${num} X 7 = ${(num*7)}`);
//     console.log(`${num} X 8 = ${(num*8)}`);
//     console.log(`${num} X 9 = ${(num*9)}`);
//     console.log(`${num} X 10 = ${(num*10)}`);
// }

// //  in for loop, increment is done at beginning of iteration
// //  therefore no additional iterations needed within if/else statement
// for(var i = 0; i < 10; i++){
//     console.log('iteration #' + i);
//     var randoNum = Math.floor(Math.random() * 200) + 20;
//     if(randoNum % 2 === 0){
//         console.log(`${randoNum} is even`);
//     }else{
//         console.log(`${randoNum} is odd`);
//     }
// }

//  question3 putting on hold
for(var i = 1; i < 10; i+=i){
    console.log();
}

for(var i = 100; i > 20; i-=5){
    console.log(i);
}