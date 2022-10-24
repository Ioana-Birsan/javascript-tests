// console.log('this is my first test');
/*
let firstName = 'Ioana';
console.log(firstName);

const lastName = 'birsan';

lastName = 'X';
console.log(lastName);

console.log(typeof alert);
*/

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

const birthYear = 1994;
const futureYear = 2032;
let age = futureYear - birthYear;

console.log('In ' + futureYear + ' I\'ll be either ' + age + ' or ' + (age -1) + '.\n'); 

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge =  28;
const maxAge =  80;
const estimatedAmount = 2;
let totalAmountLifetime = (maxAge - currentAge) * (estimatedAmount * 365);

console.log('I will need ' + totalAmountLifetime + ' of my favorite snack until the end of time.\n');

// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const numberOfChildren =  2;
const partnerName =  'Xyz';
const geographicLocation = 'Cluj';
const jobTitle = 'teacher';

console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + ', ' + 'and married to ' + partnerName + ' with ' + numberOfChildren + ' children.\n');


// Functions
function sum(x, y) {
    console.log('The sum is:');
    return x + y;
}
console.log(sum(1, 2));


// display my current age
function myAge(a, b) {
    return a - b;
}
console.log(myAge(2022, 1994));


//Convert minutes into seconds
function convert(minutes) { 
    return minutes * 60;
}
convert(5);


// Write a function that returns the string "something" joined with a space " " and the given argument a.
function something(a) {
    return 'something ' + a;
}
console.log(something('nice'));

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function sum(a, b) {
    if ((a + b) < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(sum(1, 2));


//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function totalLegs (chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}
console.log(totalLegs(23, 5, 14));

//with arrow function
const totalLegs2 = (chickens, cows, pigs) => (chickens * 2) + (cows * 4) + (pigs * 4);
console.log(totalLegs2(1,1,1));

// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
// Consider a && b:
// Make a function using the && operator.

function climbing(chef, oboseala) {
    if (chef >= 50 && oboseala < 60) {
        return 'Azi merg la sala.';
    } else {
        return 'Azi nu merg la sala.'
    }
}
console.log(climbing(50, 40))

// with arrow function and ternary operator
const climbing2 = (chef, oboseala) => (chef >= 50 && oboseala <60) ? 'Azi merg la sala' : 'Azi stau acasa'
console.log(climbing2(50, 61));


// this challenge, you must verify the equality of two different values given the parameters a and b.
// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
// Implement a function that returns true if the parameters are equal, and false if they are not.

function verifyEquality(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log('Are the two numbers equal? ' + verifyEquality(1, '1'));

//with arrow function
const verifyEquality2 = (a, b) => (a === b) ? 'true': 'false';
console.log('verificare: ' + verifyEquality2('1', 1));


//Create a function that takes a boolean variable flag and returns it as a string.
function boolToString(flag) {
    return flag.toString();
}
console.log(boolToString(true));


//Create a function that will handle simple math expressions. The input is an expression in the form of a string.
function calculator(str) { 
    return eval(str);
}
console.log(calculator('2 + 3'));

//Immediately invoked Function Expression
(function test(){console.log("hello");})();

// We'll pass you an array of numbers. Return the sum of those numbers.
function sumAll(arr) {
    const max =  arr.length;
    console.log(max);
    let sumNumbers =  0;
    for (let i = 0; i <= max-1; i++) {
        console.log(arr[i]);
        sumNumbers += arr[i];
    }
    return sumNumbers;   
}

console.log(sumAll([5, 10]));


age = 17;
let welcome = (age < 18) ? () => console.log("hello") : () => console.log('greetings');
welcome();

// We'll pass you an array of two numbers. Return the sum of those two numbers, plus the sum of all the numbers between them. The lowest number will not always come first.

//Anonymous function with immediate execution
(function() {
    console.log('Invoke function immediately.');
})();

// anonymous functions as arguments to another function
setTimeout(function () {
    console.log("Welcome");
    }, 2000);


const person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);  //motivul pentru care as pune person ca argument al functiei. mai ales ca nu schimba output-ul

let anonymousF = () => console.log(person.firstName + ' ' + person.lastName);
anonymousF();

( () => { console.log(person.firstName + ' ' + person.lastName); })();




