// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// arrays aren't primitives but are instead Array objects with the following core characteristics:
//  - JavaScript arrays are resizable and can contain a mix of different data types.
//  - JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
//  - JavaScript arrays are zero-indexed: the first element of an array is at index 0 / last element -> array.length[-1]
 

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); //3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

// the empty slots lead to inconsistencies. the older methods will skip empty slots, while newer ones treat them as undefined.
fruits[6] = "strawberry";
console.log(fruits, fruits.length);

// decreasing the length propertyl deletes elements
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits, fruits.length);


// JOIN - creates and returns a new string by concatenating all of the elements in an array, separated by comma or by a specified separator
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'));

// CONCAT - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
console.log(array3.concat('g'))

// you can also concatenate nested arrays and the references are kept
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);
console.log(numbers);  //  [[1], 2, [3]]

num1[0].push(4);
console.log(numbers); // [[1, 4], 2, [3]]


// SLICE -returns a shallow copy of a portion of an array into a new array object selected from start to end (with indexes)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, -2)); // expected output: Array ["camel"]

const myHonda = {
    color: 'red',
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
const myCar = [myHonda, 2, 'cherry condition", "purchased 1997'];
myCar[0].color = 'purple';
console.log(myCar);
console.log(myHonda);


// indexOf -  returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2)); //start from index 2, result: 4
console.log(beasts.indexOf('bison', -1)); // to start the search from the end, result: 4 
console.log(beasts.indexOf('giraffe')); //  -1 / not found


// PUSH - adds new elements to an array
// you can also use the spread syntax to push all elemnts from a an array into a second one
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

vegetables.push(...moreVegs);
console.log(vegetables);


// SPLICE - method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1 and deletes nothing
months.splice(4, 1, 'May'); //inserts at index 4 and deletes 1 element
console.log(months);

//  REVERSE - elements order in the array will be turned towards the direction opposite to that previously stated


//  SORT - sorts the elements of an array  ascending/descending

// POP -  removes the last element from an array and returns that element. This method changes the length of the array.

// SHIFT - removes the first element from an array and returns that removed element. This method changes the length of the array.

//  FOR EACH - executes a provided function once for each array element.
const arr = ['a', 'b', 'c'];
arr.forEach(element => console.log(element));
console.log(arr);