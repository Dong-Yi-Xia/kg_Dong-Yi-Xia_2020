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
// loop through the array of integer and convert them into a string
// loop through string number and get its phonetic equivalent
//   within the second loop, string concatenate them
//   after the end of the second loop, push it into an new array
// convert the new array into a string format  