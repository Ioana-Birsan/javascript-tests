// Promise object contains both the producing code and calls to the consuming code
// a promise obj can be pending, fulfilled or rejected
// when a promise is in the pending state, it can either be fulfilled with a value ot rejected with a reason error (.then)
// a promise is settled when it is fulfilled or rejected
// Pending is the initial STATE of the promise. And it changes to either fulfilled => resolve is called for or rejected => reject is called for 
// RESULT - initially undefined, then changes to VALUE when resolve(value) is called or ERROR when reject(error) is called
// when a new promise is created, the executor runs automatically
/*
let promise = new Promise(function(resolve, reject) { // the function passed to the promise is called an EXECUTOR
    // the producing code, the executor
});

// when the executor obtains the result, it should call one of the callbacks: resolve, reject
// there can only be a single result or error; all futher calls of resolve and reject are ignored
//resolve/reject expect only one argument(or none) and will ignore additional arguments

//resolve(value) -----> if the job is finished successfully, with result value
//reject(error)  -----> if an error has occured, error is the error object


let promise1= new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 sec signal that the jpb is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});


let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('Whoops!')), 1000);
});

let promise3 = new Promise(function(resolve, reject) {
    resolve("done");

    reject(new Error("..."));
});
*/

// The code written in the finally method is executed after a promise is settled (fulfilled or rejected)
const isTrue =  true;
const newPromise = new Promise((resolve, reject) => {
    if(isTrue) {
        resolve('x');
    } else {
        reject('abc');
    }
});

newPromise.then((resolve) => {
    console.log('Everything went fine');
});
newPromise.catch((reject) => {
    console.log('isTrue variable is not true')
});
newPromise.finally(() => {
    console.log('Experiment completed\n');
});

console.log(newPromise);


// 
const x = 3;
let y;

const compareXY = new Promise((resolve, reject) => {
    if (x === undefined || y === undefined) {
        reject(new Error('You must provide two parameters'));
    } else {
        resolve(x + y);
    }
});

compareXY.catch((reject) => {
    console.log('The operation could not be completed');
})

console.log(compareXY);