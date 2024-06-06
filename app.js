// JavaScript Medium Challenges

// *****Given two values, return the first one if it is falsy, otherwise return the second one.
function filterOutFalsy(val1, val2) {
    return (!val1) ? val1 : val2;
}
console.log(filterOutFalsy(0, 5));

// *****Given an array, return its length.
function arrLength(arr) {
    return arr.length;
}
console.log(arrLength([1, 2, 3, 4]));

// *****Given an array, return the last element.
function arrLength(arr) {
    return (arr[arr.length-1]);
}
console.log(arrLength([0, 1, 2, 3, 4]));

// *****Given an array, return the sum of every element.
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
       sum += arr[i];
    }
    return sum;
}
console.log(arrSum([2, 2, 2]));

// *****Given a number, add up all the numbers from one to the number that is given.
// ex: An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(progressiveSum(3))

// *****Given a number in seconds, return this number in mm:ss format.
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(70))

// *****Given an array of numbers, return the largest number of that array.
    // Long way:
    function getMax(arr) {
        let max = arr[0];
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    console.log(getMax([1,2,10,6]))
    
    // Short way:
    function getMax(arr) {
        return Math.max(...arr);
    }
    console.log(getMax([1,2,10,6]))

    // *****Given a string, return the reversed string.
    // incrementing
    function reverseString(str) {
        let reversed = '';
        for (let i = 0; i < str.length; ++i) {
            reversed += str[i];
        }
        return reversed;
    }
    console.log(reverseString('abc'))

    // decrementing 
    function reverseString(str) {
        let reversed = '';
        for (let i = str.length -1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
    console.log(reverseString('abc'))

    // array reverse property; you split the string into an array, 
    // then reverse the array, then join it back together into a string again.
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    console.log(reverseString('abc'))

    // *****Given an array of elements, return the same length array filled with 0's.
    // Solution 1: For Loop
    function convertToZeros(arr) {
        for (let i = 0; i < arr.length; ++i) {
            arr[i] = 0;
            }
        return arr;
    }
    console.log(convertToZeros([1, 2, 3]));

    // Solution 2: Array fill
    function convertToZeros(arr) {
        return new Array(arr.length).fill(0);
    }
    console.log(convertToZeros([1, 2, 3, 4]));

    // Solution 3: Array map
    function convertToZeros(arr) {
         return arr.map(arr => 0);
    }
    console.log(convertToZeros([1, 2, 3]));

    // *****Given an array of fruits, if it is an apple, remove it from the array.
    // Solution 1: For loop
    function removeApples(arr) {
        let noApples = []
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] !== 'apple') {
                noApples.push(arr[i]);
            }
        }
            return noApples;
    }
    console.log(removeApples(['banana', 'apple', 'orange', 'apple']));

    // Solution 2: Array filter
    function removeApples(arr) {
        return arr.filter(elem => elem !== 'apple')
    }
    console.log(removeApples(['banana', 'apple', 'orange', 'apple'])); 

    // *****Given an array of values, filter out all falsy values and only return the truthy values.
    // Solution 1: For loop
    function filterOutFalsy(arr) {
        let noFalsy = []
        for (let i = 0; i < arr.length; ++i) {
            if (!!arr[i] === true) {
                noFalsy.push(arr[i])
            }
        }
        return noFalsy;
    }
    console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

    // Solution 2: Array filter
    function filterOutFalsy(arr) {
        return arr.filter(elem => !!elem === true);
    }
    console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))

    // *****Given an array of truthy and falsy values, return the same array of elements into it boolean value.
    function convertToBoolean(arr) {
        return arr.map(elem => !!elem)
    }
    console.log(convertToBoolean([500, 0, "David", "", []]));