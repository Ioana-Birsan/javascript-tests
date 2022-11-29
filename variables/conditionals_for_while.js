/*

//SWITCH STATEMENT
const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Same');
        break;
    default:
        console.log('I am sleeping');   
}
console.log('Am iesit din switch');


//This example will output the error "Uncaught SyntaxError: Identifier 'message' has already been declared", 
//because the first const message = 'hello'; conflicts with the second const message = 'hi'
//this is due to thge fact that both const declarations re within the same block scope crated by the switch statememnt

const action = 'say_hello';
switch (action) {
  case 'say_hello':
    const message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    const message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
}

if (day === 'monday') {
    console.log('Plan course structure');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Same');
} else {
    console.log('I am sleeping'); 
}

 
// CONDITIONAL/TERNARY OPERATOR 
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I am not allowed to drink alcohol');
// condition ? if : else;

const drink = age >= 18 ? 'wine' : 'water'; //ternary operator is an expression, which means it produces a value, this value can be stored to a variable
console.log(drink);


//FOR LOOP
// expr 1 (initialization) - runs before the execution of the first loop & is used to create a counter)
// expr 2 (condition) - is checked each time before the loop runs; if true -> code is executed, if false -> loop stops
// expr 3 - executed after each iteration of the loop; used to increment a counter !!Can also be used to decrement a counter
// you can use break to exit the loop early, before the condition evaluates to false

for(let i = 1; i < 10; i+=2) { 
    // console.log(i);
    if (i === 7) {
        break;
    }
    console.log('Total elephants: ' + i);
}


// FOR... IN LOOP - iterates over the properties of an object
// for..in loop is not recommended to be used in arrays, because it may not access the array indexes in order
//this for loop returns all properties and inherited properties for an array, which can lead to unexpected behaviour.
const capitals = {
    a: "Bucharest",
    b: "Belgrade",
    c: "Budapest"
};

for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
}

// for... in - arrays (loops through the properties of an object/array without using a counter). the code is executed once for each property
let array = [1, 2, 3, 4, 5]
for (let key in array) {
    console.log(key + ': ' + array[key]);
}

//if something like a JS library you're using modifies the Array prototype directly, a for...in loop will iterate over that, too:
// const array2 = [1, 2, 3];
// Array.prototype.someMethod = true;
// for (const i in array2) {
//   console.log(i);
// }

// FOR...OF LOOP - iterates over values of many tipes of iterables, including arrays, set, map
// for each value in the iterable object, the code block is executed

const arr = ['Fred', 'Tom', 'Bob'];

for (let i of arr) {
    console.log(i);
}

//gets all the anchors in an array by using document.querySelectorAll("a"). Then it loops through them and changed their color to red.
// var elements = document.querySelectorAll("a");
// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.color = "red";
// }


// CONTINUE & BREAK
//continue - exit the current iteration of the loop and move to the next one
// break -- refers to the completely terminate the loop
console.log('--- only strings ---')
for (let i = 0; i < personArray.length; i++) {
    if (typeof personArray[i] !== 'string') continue; // if condition is true, continue will run and the block of code will not be executed
        console.log(personArray[i], typeof personArray[i]); // only strings are logged to the console
}

console.log('--- break with number ---')
for (let i = 0; i < personArray.length; i++) {
    if (typeof personArray[i] == 'number') break; // if condition is true, loop is exited with break
        console.log(personArray[i], typeof personArray[i]);
}

// Loop over an array backwards
const jonas = [
    'Jonas',
    'Xyz',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Laura']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//nested loops
for (let rep = 1; rep <= 3; rep++) {
    console.log(`--- Exercise number ${rep} ---`);
    for (let i = 1; i < 6; i++) {
        console.log(`Lifting number: ${i}`);
    }
}


//LOOPING THROUGH JSON
var json = {
    jsonData: {
    one: [11, 12, 13, 14, 15], //attribute-value pairs
    two: [21, 22, 23],
    three: [31, 32]
    }
    };

for (var key in json.jsonData) {
    for (var key1 in json.jsonData[key]) {
        console.log(json.jsonData[key][key1]);
    }
}


var json = {
    jsonData: [{
    one: [11, 12, 13, 14, 15]
    }, {
    two: [21, 22, 23]
    }, {
    three: [31, 32]
    }]
    };

for (let i = 0; i < json.jsonData.length; i++) {
    for (let key in json.jsonData[i]) {
        for (var j = 0; j < json.jsonData[i][key].length; j++) {
            console.log(json.jsonData[i][key][j]);
        }
    }
}

const personArray = [
    'Jonas',
    'Xyz',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Laura']
];

const types = [];

for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i], typeof personArray[i]);
    //filling types array
    // types[i] = typeof personArray[i];
    types.push(typeof personArray[i]);
}

console.log(types);


// WHILE LOOP  - starts by evaluating condition -  if cond is true --> code is executed; else loop ends
// neccessary to include the incrementl inside the code block, otherwise the code block might run infinitely
// The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. 

let i = 1;

while (i < 10) {
    console.log(i);
    i++;
}

//do... while. condition is evaluated after the loop runs first, even if the condition is false
// this is used when you want a piece of code to run at least once and then loop based on a specific condition
let i2 = 10;
do {
    console.log(i2);
    i2++;
} while (i2 < 10);

let rep = 1;

//roll the dice until 6 is hit
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...')
    }
}
console.log(dice);


// calculate the tips and totals of the following array of bills and save the results in 2 different arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ?  bill * 0.15 : bill *0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTips(bills[i]); // const poate fi utilizat in situatia asta pentru ca cu fiecare iteratie se creeaza o noua constanta tip, nu este aceeasi care se suprascrie
    const bill =  tip + bills[i];
    tips.push(tip);
    totals.push(bill);
}

console.log(bills, tips, totals);


let nums = []
for (let i = 1; i < 6; i++) { // If you tried that same snippet but with var i in the for loop header, you'd get 6,6,6,6,6 instead
  nums.push(function() {console.log(i)}); // 1,2,3,4,5
}
nums.forEach(fn => fn());


let a = [2,3,4];
let b = [1, ...a, 5 ]; //When ... is used in front of an array, it acts to “spread” it out into its individual values.
console.log(b);
*/

// Nested loops exercise
const bobsFollowers = ['Tom', 'Kevin', 'Laura', 'Maria'];
const tinasFollowers = ['Elena', 'Kevin', 'Laura'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);


// FOR EACH loop
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// forEach expects a synchronous function.
// forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(element => console.log("x"));

console.log('--- break with number ---')

const personArray = ['Ann', true, 23, 'x'];
for (let i = 0; i < personArray.length; i++) {
    if (typeof personArray[i] == 'number') { // if condition is true, loop is exited with break
        break;
        // console.log(personArray[i], typeof personArray[i]);
    } 
    console.log(personArray[i]);

}
