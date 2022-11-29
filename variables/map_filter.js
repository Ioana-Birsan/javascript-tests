// MAP method represents another way to loop over arrays
// this method generates a new array
// this new array will contain in each position, the results of applying the callback function on the original elements of the array
/*
let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * 3;
//   }

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]


let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

let userFullNames = users.map( (element) => element.firstName + element.lastName);
console.log(userFullNames);

let filterNames = users.map( (element) => element.lastName);
console.log(filterNames);

const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

const rebels = pilots.filter((pilot) => pilot.faction === 'Rebels');
console.log(rebels);

const empire =  pilots
  .filter((pilot) => pilot.faction === 'Empire')
  .map((pilotId) => pilotId.id);

  console.log(empire);



  // Square the value of every element in the array. Presume that you will only get numbers in the input array.
const input = [ 1, 2, 3, 4, 5 ];

const mapInput = input.map((element) => element**2);
console.log(mapInput);


// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
const input2 = [ 1, -4, 12, 0, -3, 29, -150];

const mapInput2 = input2
  .filter((element) => element > 0)
  .reduce((acc, element) => acc + element, 0);

console.log(mapInput2);

// Calculate the mean and median values of the number elements from the input array.
// const input3 = [12, 46, 32, 64];

// const filterInput3 = input3.filter((acc, value, index, array) => {
//   return array;
// })
// console.log(filterInput3);


// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
const input4 = 'George Raymond Richard Martin';
const words = input4
  .split(' ')
  .map((element) => element[0])
  .join(''); 
console.log(words);


// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const input5 = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];

const ages = input5.map((element) => element.age);
console.log(Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages));


// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
// You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
// Words that have less than 4 letters aren't abbreviated, because that would just be odd. 
// The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input6 = 'Every developer likes to mix kubernetes and javascript';

const createNumeronym = (elem) => elem[0] + (elem.length - 2) + elem[elem.length-1];

const array = input6
  .split(' ')
  .map(elem => (elem.length > 4) ? createNumeronym(elem) : elem)
  .join(' ');
console.log(array);


// If the given input is a number, you should return the factorial of that number. 
// The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const input7 = 6;



//foreach vs map method
const account1 = {
  owner: 'Jonas Brother',
  movements: [200, 450, -400, -300, 3000, 70],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = { 
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -1000],
  interestRate: 1.5,
  pin: 2222
}

const accounts = [account1, account2];
const createUserNames = function (accts) {
  accts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
} ;

createUserNames(accounts);
console.log(accounts);


// FILTER method -- used to filter elements that satisfly a certain condition
// a callback function is used for the condition

const deposits = account1.movements.filter(element => element >= 0);
console.log(deposits);


const withdrawals = account1.movements.filter(element => element < 0);
console.log(withdrawals);


// Customer object
let customers = [
  {
     'id': 001,
     'f_name': 'Abby',
     'l_name': 'Thomas',
     'gender': 'M',
     'married': true,
     'age': 32,
     'expense': 500,
     'purchased': ['Shampoo', 'Toys', 'Book']
  },
  {
     'id': 002,
     'f_name': 'Jerry',
     'l_name': 'Tom',
     'gender': 'M',
     'married': true,
     'age': 64,
     'expense': 100,
     'purchased': ['Stick', 'Blade']
  },
  {
     'id': 003,
     'f_name': 'Dianna',
     'l_name': 'Cherry',
     'gender': 'F',
     'married': true,
     'age': 22,
     'expense': 1500,
     'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
  },
  {
     'id': 004,
     'f_name': 'Dev',
     'l_name': 'Currian',
     'gender': 'M',
     'married': true,
     'age': 82,
     'expense': 90,
     'purchased': ['Book']
  },
  {
     'id': 005,
     'f_name': 'Maria',
     'l_name': 'Gomes',
     'gender': 'F',
     'married': false,
     'age': 7,
     'expense': 300,
     'purchased': ['Toys']
  }
];

// Use-Case 1: Get 'Senior Citizens' by Filtering out other customers
const seniorCitizens = customers.filter(citizen => citizen.age >= 60);
console.log(seniorCitizens);


// Use-Case 2: Transform the customer array with a new attribute
const custFullName = customers.map(customer => {
  let titple = '';
  if (customer.gender === 'M') {
    title = 'Mr.';
  } else if (customer.gender === 'F' && customer.married) {
    title = 'Mrs.';
  } else {
    title = 'Miss';
  }
  customer['full_name'] = title + ' ' + customer.f_name + ' ' + customer.l_name;
  return customer;
});

console.log(custFullName);


//  Use-Case 3: Get the average age of the Customers who purchased 'Book'
let count = 0;
const customerBoughtBook = customers
  .filter(element => element.purchased.includes('Book'))
  .map(element => element.age)
  .reduce((acc, customer) => {
    acc = acc + customer;
    count += 1;
    return acc;
  }, 0);

console.log(customerBoughtBook/count);


// Use-Case 4: Do we have a Young Customer(age less than 10 years)?
const ageYoungCustomer = customers.filter((element) => {
  if (element.age < 10) {
  console.log(`Yes, customer is aged: ${element.age}.`);
  }
});
console.log(ageYoungCustomer);

*/

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

// map -nume
const charactersNames = characters.map((element) => element.name);
console.log(charactersNames);

//filter mass> 100
const massCharacters = characters.filter( element => element.mass > 100);
console.log(massCharacters);


//map function
//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// new Map() - creates the map
// map.set(key, value) - stores the value by the key
// map.get(key) - returns the value by the key & undefined if the key does not exist in map
// map.has(key) - return true if the key exists and false otherwise
// map.delete(key) - removes the value by the key
// map.clear() - removes everything from the map
// map.size - returns the current element count
/*
const rest = new Map();
rest
  .set('name', 'Classico italiano')
  .set(1, 'Firenze, italy')
  .set(2, 'Lisbon, Portugal')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);
console.log(rest.get(2));

const time =  21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
rest.delete(2);
console.log(rest);
*/