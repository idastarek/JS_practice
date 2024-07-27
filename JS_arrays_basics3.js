// AVOID MUTATIONS WITH ARRAY SPREAD 

// const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];
// const allMenuIdeas = lunchMenuIdeas;
// allMenuIdeas.push("Club Sandwitch");

// console.log('allMenuIdeas: ' + allMenuIdeas);
// console.log('lunchMenuIdeas: ' + lunchMenuIdeas);

// Club Sandwitch gets added to the end of lunchMenuItems as well
// arrays are just a subtype of objects, so they're also a reference type - we pass a reference to the array (not a copy)
// so, when we push to allMenuItems, we mutate the lunchMenuItems as well

// to fix this, we need to either:

// 1) use an array method other than push(),  that produces a new array rather than mutating the existing array (eg concat())

// 2) make a copy of the array fist, before trying to make changes to it = clone the previous array with the spread operator


// const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];
// const allMenuIdeas = [...lunchMenuIdeas];

// [] - creates a new array
// ... - spreads all the items to the new array and clones them

// when we clone the array, we can use whatever methods we like and be confident that we're not going to mutate the array that was copied


// MOLD ARRAYS WITH THE SPREAD OPERATOR

const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

// say we want to add breakfast and dinner to allMenuItems in a certain order (breakfast first)

// .unshift() method adds new elements to the beginning of an array; it overwrites the original array

// there is a much more intuitive way to add & order arrays - the spread operator
// ... - array spread operator - converts an array to a list of elements (spreads out the array); always spread elements of the array into a new one - [...]

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
console.log("otherMenuIdeas: " + otherMenuIdeas);

const allMenuItems = [
    ...breakfastMenuIdeas,
    "Harvest Salad",
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

// the spread operator only allows us to spread items of the array, you can't use it to remove things;
// but - as we're spreading our array, we can use methods on the array that we're spreading to enable us to edit our array content 

// when it comes to getting part of an array - a subarray, we can use a method called .slice() (immutable, non-mutating and it returns a brand new array)

console.log("allMenuItems(1,3): " + allMenuItems.slice(1,3));

// how to change "Harvest Salad" to "Garden Salad"
// let's assume we don't know where "Harvest Salad" is

const saladIndex = allMenuItems.findIndex(idea => idea === "Harvest Salad");

console.log(saladIndex);

const finalMenuItems = [
    ...allMenuItems.slice(0, saladIndex),
    "Garden Salad",
    ...allMenuItems.slice(saladIndex+1)
];

console.log("finalMenuItems: " + finalMenuItems);

// how to remove the meatloaf element?
const meatloafIndex = allMenuItems.findIndex(idea => idea === "Meatloaf");
console.log(meatloafIndex);

const finalMenuIdeas = [
    ...allMenuItems.slice(0, meatloafIndex),
    ...allMenuItems.slice(meatloafIndex+1)
];

// MORE FLEXIBLE ARRAYS WITH DESTRUCTURING 

// we want to take these values out of the array and put them into variables 

// listed in order of preference
const finalMenuItems2 = [
    "American Cheeseburger",
    "SouthernFriedChicken"
];

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

 // this works, but we can declare them on a single line
// const [first, second, third] = finalMenuItems2;

// we don't have to destructure every single value
const [first, second] = finalMenuItems2;

// to more easiy see the name of the variable that we're logging, as well as its respected value, we can use the object shorthand syntax

console.log({ first }, { second });