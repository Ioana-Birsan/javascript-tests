// Promise object contains both the producing code and calls to the consuming code
// a promise obj can be pending, fulfilled or rejected
// a promise is settled when it is fulfilled or rejected
// Pending is the initial STATE of the promise. And it changes to either fulfilled => resolve method is called for or rejected => reject is called for 
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
    console.log(resolve);
});
newPromise.catch((reject) => {
    console.log('isTrue variable is not true')
});
newPromise.finally(() => {
    console.log('Experiment completed\n');
});

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

compareXY.then((data) => console.log(data));
compareXY.catch((reject) => console.log('The operation could not be completed'));

*/
// The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
//The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data

const job = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello world'), 2000);
});

job.then((data) => console.log(data));
job.then((data) => console.log(data + ' 1'));
job.catch((data) => console.log(data + ' error'));


// your function receives a parameter data. You must modify the code below based on the following rules:
// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)


function job2(data) {
    // const numPromise = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {    
        if (typeof data != 'number') {
            reject(new Error("error"));
        } else if (data % 2 === 0) {
            setTimeout(() => reject("even"), 2000);
        } else {
            setTimeout(() => resolve("odd"), 1000);
        }
    }).then((value) => {
        console.log(value);
    }).catch(err => console.log(err));
}
console.log(job2(3));
console.log('nana');

// Promise chaining
const promiseChain = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); //initial promise resolves in 1 sec

}).then(function(result) { //every call to .then returns a new promise, which resolves with the corresponding value
    console.log(result); //1
    return result * 2;
}).then(function(result) { // gets the result of the prev promise and processes the result
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
})

console.log(promiseChain);
//adding multiple .then to a single promise is not chaining  - ex: promise.then - this resolves each process independenty, without passing the result to the other