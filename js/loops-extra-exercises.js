/**
 * TODO:
 * Add up the Numbers from a Single Number
 * Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 *
 * Examples
 *
 * >> addUp(4) ➞ 10
 * >> addUp(13) ➞ 91
 * >> addUp(600) ➞ 180300
 *
 * Notes
 * Expect any positive number between 1 and 1000.
 */
function addUp(num){
    var add = 0;
    for(var i=1; i <= num; i++){
        add += i;
    }
    return add;
}

/**
 * TODO:
 * Count Instances of a Character in a String
 * Create a function named charCount that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
 *
 * Examples
 * >> charCount("a", "edabit") ➞ 1
 * >> charCount("c", "Chamber of secrets") ➞ 1
 * >> charCount("b", "big fat bubble") ➞ 4
 *
 * Notes
 * Your output must be case-sensitive (see second example).
 */
function charCount(singChar, str){
    var count = 0;
    for(var i = 0; i <str.length; i++){
        if(str[i] === singChar){
            count += 1;
        }else{
            continue;
        }
    }
    return count;
}
console.log(charCount('a', 'edabit'));
console.log(charCount('c', 'Chamber of secrets'));
console.log(charCount('b', 'big fat bubble'));
/**
 * TODO:
 * Return the Index of the First Vowel
 * Create a function named firstVowel that returns the index of the first vowel in a string.
 *
 * Examples
 * >> firstVowel("apple") ➞ 0
 * >> firstVowel("hello") ➞ 1
 * >> firstVowel("STRAWBERRY") ➞ 3
 * >> firstVowel("pInEaPPLe") ➞ 1
 *
 * Notes
 * Input will be single words.
 * Characters in words will be upper or lower case.
 * "y" is not considered a vowel.
 * Input always contains a vowel.
 */
//  isVowel Function
function isVowel(input){
    if(input === 'a' || input === 'A'){
        return true;
    }else if(input === 'e' || input === 'E'){
        return true;
    }else if(input === 'i' || input === 'I'){
        return true;
    }else if(input === 'o' || input === 'O'){
        return true;
    }else if(input === 'u' || input === 'U'){
        return true;
    }else if(input === true || input === false){
        return false;
    }
    return typeof input === 'boolean';
}

function firstVowel(str){
    for(var i=0; i<str.length; i++){
        if(isVowel(str[i])){
            console.log(str[i]);
            return i;
        }
    }
}

console.log(firstVowel("apple")); // 0
console.log(firstVowel("STRAWBERRY")); // 3
console.log(firstVowel("pInEaPPLe")); // 1


/**
 * TODO:
 * Integer Digits Count
 * Create a function named count that counts the integer's number of digits.
 *
 * Examples
 *
 * >> count(318) ➞ 3
 * >> count(-92563) ➞ 5
 * >> count(4666) ➞ 4
 * >> count(-314890) ➞ 6
 * >> count(654321) ➞ 6
 * count(638476) ➞ 6
 *
 * Notes
 * For an added challenge, try to solve this without using strings.
 */
function counting(num){
    var numString = num.toString();
    var counter = 0;

    for(var i = 0; i < numString.length; i++){
        if(numString[i] === '-'){
            continue;
        }
        counter += 1;
    }
    return counter
}
// counting(318);
// console.log(counting(318)); // 3
// console.log(counting(-92563)); // 5
// console.log(counting(4666)); // 4
// console.log(counting(-314890)); // 6
// console.log(counting(654321)); // 6
// console.log(counting(638476)); // 6

/**
 * TODO:
 * Remove the Letters ABC
 * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the
 *  given string does not contain "a", "b", or "c", return null.
 *
 * Examples
 * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
 * >> removeABC("hello world!") ➞ null
 * >> removeABC("") ➞ null
 *
 * Notes
 * If the given string does not contain "a", "b", or "c", return null.
 */
// function removeABC(str){
//     if(str == null){
//         return null;
//     }
//     var lowercaseStr = str.toLowerCase();
//     var includesABC = lowercaseStr.includes('a') || lowercaseStr.includes('b') || lowercaseStr.includes('c');
//
//     if(!includesABC){
//         return null;
//         }
//     console.log('This string contains an a or b or c!');
//
//     for(var i=0; i<lowercaseStr.length; i++){
//         if(lowercaseStr[i] == 'a' || lowercaseStr[i] == 'b' || lowercaseStr[i] == 'c'){
//             console.log(`removing ${lowercaseStr[i]} at index ${i}`);
//             lowercaseStr.replace('a', '');
//             lowercaseStr.replace('b', '');
//             lowercaseStr.replace('c', '');
//             console.log(lowercaseStr);
//         }
//     }
//
//     return null;
// }

/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */


/**
 * TODO:
 * Convert a Number to Base-2
 * Create a function named binary that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
 *
 * Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
 *
 * Examples
 * >> binary(1) ➞ "1"   // 1*1 = 1
 * >> binary(5) ➞ "101"   // 1*1 + 1*4 = 5
 * >> binary(10) ➞ "1010"   // 1*2 + 1*8 = 10
 *
 * Notes
 * Numbers will always be below 1024 (not including 1024).
 * The && operator could be useful.
 * The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
 * If a binary conversion for 0 is attempted, return "0".
 */