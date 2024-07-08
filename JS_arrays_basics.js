//creating an array
const todos = [];

const todo1 = "clean room";
const todo2 = "go for a walk";

// adding to an array
// todos[0] = todo1;
// todos[1] = todo2;

// push() method adds an element to the end of the array
todos.push(todo1, todo2);

// unshift() method adds an element to the beginning of an array
todos.unshift("sell clothes");
todos.unshift("wake up");

// length() returns number of elements in the array
console.log("num of elements in the array: " + todos.length);

// getting the last element of the array
console.log("last thing to do: " + todos[todos.length-1]);
// In JavaScript, array indices must be non-negative integers. Attempting to access an array element with a negative index (e.g., todos[-1]) will not retrieve elements from the end of the array as it might in some other languages or frameworks (such as Python). Instead, it will look for a property with the key -1, which usually does not exist, and will return undefined.
console.log("todos[-1] - " + todos[-1]);
console.log("todos[1] - " + todos[1]);

// slice() method slices up part of an existing array into a new array
// slice() creates a new array
// slice() doesn't remove any elements from the source array
console.log(todos.slice());


// pop() method removes last element from an array
// todos.pop();

// shift() removes first element from the array
// todos.shift();

console.log(todos);

// CHECK ELEMENT EXISTANCE IN ARRAYS

const temperatures = [69, 82, 73, 64];

// indexOf() finds an index of an element
console.log("temperatures.indexOf(82) - " + temperatures.indexOf(82));
// if an element doesn't exist, indexOf returns -1
console.log("temperatures.indexOf(50) - " + temperatures.indexOf(50));

// checking if element is in the array using indexOf()
console.log("temperatures.indexOf(50) > -1 - " + (temperatures.indexOf(50) > -1));
// checking if element is in the arrays using includes()
// includes() works with arrays whose elements are primitive values eg strings, numbers,boolenas
console.log("temperatures.includes(50) - " + temperatures.includes(50));

// to check an array of objects and see if one or more elements meets a given condition, we can use the method some()
const temperatures2 = [
    {degrees: 69, isRecordTemp: false},
    {degrees: 82, isRecordTemp: true},
    {degrees: 73, isRecordTemp: false},
    {degrees: 64, isRecordTemp: false}
];

// some() works by passing it a function
// at least 1 element needs to match condition we provided for it to return true (then it stops iterating)
const hasRecordTemp = temperatures2.some(temperature => temperature.isRecordTemp === true);
console.log(hasRecordTemp);

// every() checks if the condition is true for every element in the array
const result = temperatures2.every(temperature => temperature.isRecordTemp);
console.log(result);


//PERFORM ACTIONS ON ALL ELEMENTS

// map() allows us to transform each element of the array
// the result is a new array - it doesn't mutate the old one

const newTemps = temperatures2.map(temperature => {
    temperature.isRecordTemp = true;
    return temperature;
})

console.log(newTemps);

// besides modyfying existing array properties, we can add entirely new ones
const newTemps2 = temperatures2.map(temperature => {
    temperature.isHigh = true;
    return temperature;
});

console.log(newTemps2);

// mapping over an array based on a condition
const newTemps3 = temperatures2.map(temperature => 
    temperature.degrees > 70 ? {...temperature.isHigh = true} : temperature
);
    
console.log(newTemps3);