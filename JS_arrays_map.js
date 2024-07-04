// map allows us to transform each element of the array
// map does NOT change the original array
// map creates a new aray from calling a function for every array element
// map does NOT execute the function for empty elements 

// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//   return arr.map(number => number*2);
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//   return arr.map(number => number.toString());
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
// function capitalizeNames(arr){
//    return arr.map(name => {
//         const firstLetter = name.charAt(0).toUpperCase();
//         const remainingLetters = name.slice(1).toLowerCase();
//         const capitalisedName = firstLetter + remainingLetters;
//         return capitalisedName;
//     });
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
// function namesOnly(arr) {
//   return arr.map(person => person.name);
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    return arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]