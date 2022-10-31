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

const result = sumArray([5,10]);
console.log(result);

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    const newArr = [];

    function onlyInOne(arr1, arr2){
        for (let i = 0; i < arr1.length-1; i++) {
            if (!arr2.includes(arr1[i])) {
                newArr.push(arr1[i]);
            }

            // if (arr2.indexOf(arr1[i]) === -1) {
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


//Example with empty return and loop
function square(x) {
    return x * x;
  }
  const demo = square(3);
  // demo will equal 9
  function counter() {
    for (let count = 1; ; count++) {  // infinite loop
      console.log(`${count}A`); // until 5
      if (count === 5) {
        return;
      }
      console.log(`${count}B`);  // until 4
    }
    console.log(`${count}C`);  // never appears
  }

  console.log(square(3));
  console.log(counter());


  //there are 2 gymnastic teams.
  // each team competes 3 times and then the average of the 3 scores is calculated
  // a team wins if it has at least DOUBLE the average score of the other team, otherwise no team wins
  // 1. create an arrow funct to calculate the average of the 3 scores
  // 2. use the function to calculate the average of the 2 teams
  // 3. funct 'checkWinner' that takes the avg scores of each team as a param and logs the winner to the console together with the points.
  // 4. use the checkWinner funct to  determine the winner for both data 1 and data 2

// DATA 1: Dolphins: 44, 23, 71 ; Koalas: 65, 54, 49

const avgTeam = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = avgTeam(44, 23, 71);
const avgKoalas = avgTeam(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2* avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins: ${avgDolphins} vs ${avgKoalas}`);
    }

}
checkWinner(avgDolphins, avgKoalas);

//DATA 2: Dolphins: 85, 54, 41 ; Koalas: 23, 34, 27

const avgDolphins2 = avgTeam(85, 54, 41);
const avgKoalas2 = avgTeam(23, 34, 27);

checkWinner(avgDolphins2, avgKoalas2);

