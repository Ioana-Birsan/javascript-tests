// There are 5 ways to create objects:
// 1. object literal:
let log = console.log;

let obj1 = {
  prop1: 'val1',
  prop2: 'val2',
  prop3: function() {
    console.log(this.prop1)
  }
}
log(1, obj1)
obj1.prop3();
log("-----------");


// 2.Object.create() method
let proto = {
    prop3: function() {
      console.log(this.prop1)
    }
  }
  let obj2 = Object.create(proto, {
    prop1: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: 'val1'
    },
    prop2: {
      writable: true,
      enumerable: false,
      configurable: true,
      value: 'val2'
    }
  })
  
  log(2, obj2);
  obj2.prop3 = function() { console.log(this.prop1) };
  console.log("--------------")


  // 3. 
  let Obj = function(v1, v2) {
    this.prop1 = v1;
    this.prop2 = v2;
    this.prop3 = function() {
      console.log(this.prop1)
    }
  }
  let obj3 = new Obj('val1', 'val2');
  log(3, obj3);
  obj3.prop3();
  console.log("--------------")


  // 4. closure - is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
  let ObjFF = function(v1, v2) {
    let _prop1 = v1;
    let _prop2 = v2
    return {
      prop1: _prop1,
      prop2: _prop2,
      prop3: function() {
        console.log(_prop1)
      }
    }
  }
  let obj4 = ObjFF('val1', 'val2');
  log(4, obj4);
  obj4.prop3();


  //another example
function showName (firstName, lastName) { 
    const nameIntro = "Your name is ";
    function makeFullName () {
        return nameIntro + firstName + ' ' + lastName;
    }
    return makeFullName ();
}
console.log(showName('Michael', 'Jackson'));
console.log("--------------")


  // 5. Classes
  class ObjC {
    constructor(v1, v2) {
      this.prop1 = v1;
      this.prop2 = v2
    }
    prop3() {
      console.log(this.prop1)
    }
  }
  
  let obj5 = new ObjC('val1', 'val2');
  log(5, obj5);
  obj5.prop3()
  console.log("--------------")


/*
const jonas = {
     firstName: 'Jonas',
     lastName: 'Schmedtman',
     age: 2022 - 1994,
     job: 'tester',
     friends: ['x', 'y', 'z']
};

console.log(jonas);

// . & [] notation for referencing an object property
console.log(jonas.lastName);
console.log(jonas['lastName']);

// [] notation is useful if we want to specify an expression, instead of the actual name of the property
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


// add new properties to the object using . and [] notation
jonas.location = 'Cluj';
jonas['twitter'] = '@xyz';
console.log(jonas.location);
console.log(jonas);

// challenge : 'Jonas has three friends and his best friend is called Michael'
console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends and his best friends is ' + jonas.friends[0]);

 */

// functions can also be integrated in an object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1994,
    job: 'tester',
    friends: ['x', 'y', 'z'],
    hasDriversLicence: true,

    // calcAge: function () {
    //     this.age = 2022 - this.birthYear;
    //     return this.age;
    // }

    calcAge: function() {
        return 2022 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`;
    }
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas.age);
// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1994));
// console.log(jonas.getSummary());

console.log(Object.keys(jonas)); // returns an array of the given obj prop names
console.log(Object.getOwnPropertyNames(jonas)); // displays all properties of an object
console.log(Object.isFrozen(jonas));
console.log(Object.values(jonas)); // displays all the values of the properties listed
console.log(Object.entries(jonas)); // used to return an array consisting of enumerable property [key, value] pairs
console.log('Object is ' + Object.is(jonas, jonas));
delete jonas.job; // used to remove a property
jonas.job = 'teacher';


// We can also use multiword property names, but then they must be quoted:
// For multiword properties, the dot access doesn’t work and the [] need to be used
jonas["likes birds"] = true;

let key = 'likes dogs';
jonas[key] = true; // different than joans.key
console.log(jonas);


// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = "apple";
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
//   [fruit] means that the property name should be taken from fruit.
    [fruit + 'Computers']: 6
};

//groups the key-value pairs in arrays
const makePairs = (object) => Object.keys(object).map((x) => [x, object[x]]);
console.log(makePairs(jonas));



