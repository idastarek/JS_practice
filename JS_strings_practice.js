//makes prompt work in node.js
const prompt = require("prompt-sync")({sigint: true});


// Exercise 1: String Length 
// Write a program that takes a user's input and calculates the length of the input string using the length property.

// const string = prompt("Hi there! Please write something and we'll tell you the length of your string: "); 
// const string_length = string.length
// console.log("The length of this string is: ", string_length)

// let test = "kubek"
// length = test.length
// console.log(length);

// Exercise 2: Character at Index 
// Create a program that prompts the user for a string and an index. Then, use the charAt() method to display the character at that index.

// First attempt:
// const string = prompt("Hi there! Please write something so that I can practice the charAt() method: ")
// const value1 = string.charAt(0);
// const value2 = string.charAt(8);
// // using charAt with negative indexing
// const value3 = string.charAt(string.length -1);
// console.log("Thanks! Here are the letters indexed 0, 8 and -1: ", value1, value2, value3)  

// Corrected version:
// const string = prompt("Hi there! Please write something so that I can practice the charAt() method: ")
// const index = prompt("Amazing, now please write which index you'd like me to check: ")
// const charAtindex = string.charAt(index)
// console.log(`The charater at index ${index} is ${charAtindex}`)

// let text = "I am practicing the charAt method!"
// let char3 = text.charAt(2);
// let char5 = text.charAt(6);
// console.log(`The third character is ${char3}, while the fifth character is ${char5}.`);

// let text = "Hello it's me"
// let char = text.charAt(1);
// console.log(char);

// Exercise 3: Extract Substring 
// Write a program that takes a string and two indices (start and end). Use the substring() method to extract and display the substring between the given indices.

// const string = prompt("Hey there, please write a string: ")
// const start = prompt("Please let me know at which index you'd like to begin the substring: ")
// const end = prompt("Please let me know at which index you'd like to end the substring: " )
// const string_indices = string.substring(start, end)
// console.log(`Here's the substring you requested: ${string_indices}`)



// Exercise 4: Split and Count Words

// const sentence = prompt("Enter a sentence:");

// const words = sentence.split(" ");

// console.log(`Number of words: ${words.length}`);


// Exercise 5: Reverse string

// function reverse(str) {
//     return str.split("").reverse(str).join("");
// }

// console.log(reverse("Hola !"))


// slice vs substring

// str = "Hello, world"
// const part1 = str.slice(-5);
// console.log(part1);

// const part2 = str.slice(-5, -1);
// console.log(part2);

// const part3 = str.substring(-5);
// console.log(part3);

// const part4 = str.substring(-5, -1);
// console.log(part4);

