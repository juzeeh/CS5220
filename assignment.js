/*Problem 1 
Write a function called printerInkLevel
This function takes one argument which is an object
This function should determine the maximum number of pages a printer can print based on low ink levels
A page cannot be printed unless all the colors have ink levels remaining
This function returns a number*/

const inkColor = {cyan: 100, magenta: 55, yellow: 50, black: 90 };

const printerInkLevel = (colorObj) => {
    let maxPages = 0;
    const values = Object.values(colorObj);
    maxPages = Math.min(...values);
    return maxPages;
};
console.log('output: ' , printerInkLevel(inkColor) , '\n');

/*Problem 2 
Write a function called evenOddSums
This function takes one argument which is an array of numbers
This function returns an array with two elements:
The first element is a number which is the sum of all even numbers from the array.
The second element is a number which is the sum of all odd numbers from the array.*/
 
const evenOddNum = [2, 1, 9, 4, 8, 7];
const evenOddSums = (numberArr) => {
    let evenSum = 0;
    let oddSum = 0;
    let totalArr = [];
    for (let i = 0 ; i < numberArr.length ; i++) {
        if (numberArr[i] % 2 == 0) {
            evenSum += numberArr[i];
        }
        else {
            oddSum += numberArr[i];
        }
    };
    totalArr.push(evenSum);
    totalArr.push(oddSum);
    return totalArr;
};
console.log('output: ' , evenOddSums(evenOddNum) ,'\n');

/*Problem 3
Write a function called arrayObjectSum
This function takes one argument is a 2D array
Each nested array contains mixed data types with arbitrary lengths
This function is able to remove data types that are not numbers and then sum the array of numbers
This function returns an array of objects. Where each object contains the following:
A key called array and the value is the cleaned array containing only numbers
A key called sum and the value is the sum of all the numbers in that array*/

const mixedArr = [
    [1, 'x', 2, true, 3, 4, 0, 5],
    [0, 'y', 'z', 2],
    [1, 3, 5, false, 'hello']
   ];

   const arrayObjectSum = (arr) => {
   const res = [];

    for (let i = 0; i < arr.length; i++) {
        let obj = { array: [], sum: 0 };
        let total = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof (arr[i][j]) == 'number') {
                obj.array.push(arr[i][j]);
                total += arr[i][j];
            }
        }
        obj.sum = total;
        res.push(obj);
    }
    return res;
}     
console.log('output: ', arrayObjectSum(mixedArr), '\n');

/*Problem 4 - (25 points)

Write a function called reverseStartingAt
This function takes two arguments - the first is an array and the second is a string
This function should find the starting letter in the array and then reverse all the remaining letters after it
This function returns an array */

const firstArr = ['a', 'b', 'c', 'd', 'e'];
const reverseStartingAt = (inputArr, char) => {
    let original = [];
    let newReverse = [];
    for (let k = 0; k < inputArr.length; k++) {
        const letter = inputArr[k];

        if (char.includes(letter.toLowerCase())) {
            newReverse = inputArr.slice(k);
            break;
        }
        else {
            original.push(letter);
        }
    }
    return original.concat(newReverse.reverse());
}
const result = reverseStartingAt(firstArr,'c');
console.log('output: ' , result , '\n');

/*Problem 5
Write a function called cleanCorruptedData
This function takes one argument which is a string
The string will always have the same format, first name, last name and age with random amount of * in-between.
This function returns an object containing the keys: first, last, age (age should be a number and not a string) */
 
const dataStr = 'Peter****Parker**21';
const cleanCorruptedData = (text) => {
    const arrayOfString = text.split('*');
    let first = '';
    let last = '';
    let age = '';
    for (let a = 0; a < arrayOfString.length; a++) {
        if (typeof arrayOfString[a] == 'string' && first == '' ) {
            first = arrayOfString[a];
        }
        else if (typeof arrayOfString[a] == 'string' && last == '') {
            last = arrayOfString[a];
        }
        else if (typeof arrayOfString[a] == 'string' && age == '') {
            age = Number(arrayOfString[a]);
        }
    }
    const dataObj = { 'first': first, 'last' : last, 'age': age };
    return dataObj;
}
console.log('output: ' , cleanCorruptedData(dataStr) ,'\n');
