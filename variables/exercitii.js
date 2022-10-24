// We'll pass you an array of numbers. Return the sum of those numbers.
function sumAll(arr) {
    let sumNumbers =  0;
    for (let i = 0; i <= arr.length-1; i++) {
        sumNumbers += arr[i];
    }
    return sumNumbers;   
}

console.log(sumAll([5, 10]));

// //We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
function sumArray(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumNumbers =  0;
    for (let i = min; i <= max; i ++) {
        sumNumbers += i;
    }
    return sumNumbers;
}

console.log(sumArray([5,10]));

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    const newArr = [];

    function onlyInOne(arr1, arr2){
        for (let i = 0; i < arr1.length-1; i++) {
            if (!arr2.includes(arr1[i])) {
                newArr.push(arr1[i]);
            }

            // if (arr2.indexOf(arr1[i]) === -1) {
            //     console.log('The following element is present in one array: ' + arr1[i]);
            //     newArr.push(arr1[i]);
            // }  
        }
    }
    onlyInOne(arr1, arr2);
    onlyInOne(arr2, arr1);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));