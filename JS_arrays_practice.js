// creating an array
// const array_name = [item1, item2, ...];  or

// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";

// console.log(cars);

// Accessing array elements
// let car = cars[0]
// console.log(car)


// changing an array element
// cars[0] = "Opel";
// console.log(cars);

// convert an array to a string
// JS method toString() converts an array to a string of (comma separated) array values
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits_string = fruits.toString();
// console.log(fruits_string)

// arrays are objects
// console.log(typeof(fruits)); 

// // objects use names to access its "members"
// const person = {firstName: "John", lastName: "Doe", age:46};
// console.log(person.firstName);

// array elements can be objects
// because of this, you can have variables of different types in the same Array
// you can have objects in an Array, you can have functions in an Array, you can have arrays in an Array

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// arrays are not constants 
// the keyword const is a little misleading 
// it does NOT define a constant array - it defined a constant reference to an array
// because of this we can still change the elements of a constant array

// you can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);

// you can change the elements of a constant array:
// cars[0] = "Toyota";

// you can add an element:
// cars.push("Audi");
// console.log(cars);


// assigned when declared
//JS const variables must be assigned a value when they are declared
// meaning: an array declared with const must be initialised when it is declared 
// using const without initialising the array is a syntax error

// const cars;
// cars = ["Saab", "Volvo", "BMW"];

// arrrays declared with var can be initialised at any time
// you can even use the array before it is declared

// cars = ["Saab", "Volvo", "BMW"];
// var cars;

// const block scope 
// an array declared with const has Block Scope
// an array declared in a block is not the same as an array declared outside the block:

// const cars = ["Saab", "Volvo", "BMW"];
// here cars[0] is "Saab"

// {
//     const cars = ["Toyota", "Volvo", "BMW"];
//     // here cars[0] is "Toyota"
// }
// here cars[0] is "Toyota"


// an array delcared with var does not have block scope
// var cars = ["Saab", "Volvo", "BMW"];
// here cars[0] is "Saab"

// {
//     var cars = ["Toyota", "Volvo", "BMW"];
//     here cars[0] is "Toyota"
// }
// here cars[0] is "Toyota"

// redeclaring or reassigning an array to const, in the same scope, or, in the same block, is not allowed
// redeclaring an array declared with var is allowed anywhere in the programme
// var cars = ["Volvo", "BMW"];
// var cars = ["Toyota", "BMW"];
// cars = ["Volvo", "Saab"];

// redeclaring or reassigning an array to const, in the same scope, or in the same block, in not allowed:
// var cars = ["Volvo", "BMW"];     // Allowed
// const cars = ["Volvo", "BMW"];   // Not allowed
// {
//   var cars = ["Volvo", "BMW"];   // Allowed
//   const cars = ["Volvo", "BMW"]; // Not allowed
// }

// redeclaring or reassigning an existing const aray, in the same scope, or in the same block, is not allowed:
// const cars = ["Volvo", "BMW"];   // Allowed
// const cars = ["Volvo", "BMW"];   // Not allowed
// var cars = ["Volvo", "BMW"];     // Not allowed
// cars = ["Volvo", "BMW"];         // Not allowed

// {
//   const cars = ["Volvo", "BMW"]; // Allowed
//   const cars = ["Volvo", "BMW"]; // Not allowed
//   var cars = ["Volvo", "BMW"];   // Not allowed
//   cars = ["Volvo", "BMW"];       // Not allowed
// }

// redeclaring an array with const, in another scope, or in another block, is allowed:
// const cars = ["Volvo", "BMW"];   // Allowed
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// }
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// }


let x = "5" + 2 + 3;
console.log(x);


// array properties and methods

