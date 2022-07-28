/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // method 1: use array.forEach()  
  let count = 0;
  objArray.forEach(function(obj) {
    if (keyString in obj === true) {
      count++;
    }
  });
  return count > 0;

  // method 2: use array.map()
  // return objArray.map(function(obj) {
  //   return keyString in obj;
  // }).includes(true);

  // method 3: use array.filter()
  // return objArray.filter(function(obj) {
  //   return keyString in obj;
  // }).length > 0;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;