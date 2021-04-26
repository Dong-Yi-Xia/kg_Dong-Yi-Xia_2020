let numbers = require('./input_arg')

// Question:
// Convert an array of integers into an array of strings representing the phonetic equivalent of the
// integer.

// For example:
// Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
// Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

// console.log(numbers)

// pseudocode
// create a map to match the number to its phonetic 
// loop through the array of integers and convert them into a string
// loop through the string number and get its phonetic equivalent
//   within the second loop, string concatenate them
//   after the end of the second loop, push it into an new array
// convert the new array into a string format  


const integersToPhonetic = (arr) => {
    let map = {
        "0" : "Zero",
        "1" : "One",
        "2" : "Two",
        "3" : "Three",
        "4" : "Four",
        "5" : "Five",
        "6" : "Six",
        "7" : "Seven",
        "8" : "Eight",
        "9" : "Nine",
    }

    let strWord = []

    for(let num of arr){
        let strNum = num.toString()
        let word = ''
        for(let char of strNum){
            word += map[char]
        }
        strWord.push(word)
    }

    return strWord.join(',')
} 


console.log( integersToPhonetic(numbers) )