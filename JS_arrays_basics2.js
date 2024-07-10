// GET SUBSETS OF ARRAYS

// .filter() method is for searching arrays for different subsets of data
// like map(), filter() creates a new array, doesn't mutate the original one

const restaurants = [
    {name: "Cap City Diner", milesAway: 2.2},
    {name: "Chop Shop", milesAway: 4.1},
    {name: "Northern Star", milesAway: 0.9},
    {name: "City Tavern", milesAway: 0.5},
    {name: "Shake Shack", milesAway: 5.3}
];

const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'));
console.log(results);
// if condion not matched, an empty array is returned []

//  filter() with multiple conditions
const results2 = restaurants.filter(restaurant => 
    restaurant.name.startsWith('C')&restaurant.milesAway<3);
    
console.log(results2);

// searching for name which includes 'north', changing all letters to lowercase
const results3 = restaurants.find(restaurant => 
    restaurant.name.toLowerCase().includes('north')&&restaurant.milesAway<2);
    
console.log(results3);



// TRANSFORM ARRAYS WITH REDUCE()
// compared to map(), which always returns an array, reduce() can give us any type of value we need

const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];
  
  // syntax - array.reduce(() => {}, 0);
  
  // .reduce() needs one additional argument on the top of the callback function - initial value of the operator we want to perform
  //  0 - because we'll be adding up all the prices, so the initial value is 0
  // what's different about reduce() is the way it iterates over each element
  // unlike the other array methods, where we just got the element itself, before we get each element in the parameters of callback, we have a special value called an accumulator
  