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


const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];
const allMenuIdeas = [...lunchMenuIdeas];

// [] - creates a new array
// ... - spreads all the items to the new array and clones them

// when we clone the array, we can use whatever methods we like and be confident that we're not going to mutate the array that was copied


// MOLD ARRAYS WITH THE SPREAD OPERATOR