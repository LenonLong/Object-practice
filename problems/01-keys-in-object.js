/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  let keyArr = []
  for (let key in obj) {
    keyArr.push(key)

  }
  return keyArr
}


let animals = {
  dog: 'Wolfie',
  cat: 'Jet',
  bison: 'Bilbo'
}

let food = {
  apple: 'tart',
  lemon: 'sour',
  mango: 'sweet'
}
console.log(keysInObject(animals))
console.log(keysInObject(food))

console.log(Object.keys(animals))
console.log(Object.keys(food))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
