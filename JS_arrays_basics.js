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

// slice() method slices up part of an existing array into a new array
// slice() creates a new array
// slice() doesn't remove any elements from the source array
console.log(todos.slice());


// pop() method removes last element from an array
// todos.pop();

// shift() removes first element from the array
// todos.shift();

console.log(todos);
