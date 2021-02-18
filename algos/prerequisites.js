// // 1. Write a program that would print all the numbers from 1 to 255
// function oneToTwoFiftyFive() {
//     for (let i = 1; i <= 255; i++) {
//         console.log(i);
//     }
// }
// oneToTwoFiftyFive();

// // 2. Write a program that would print all the odd numbers from 1 to 1000
// function odd() {
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 2 == 1) {
//             console.log(i)
//         }
//     }
// }
// odd();

// // 3. Write a program that would print the sum of all the odd numbers from 1 to 5000
// function sum() {
//     let sum = 0;
//     for (let i = 1; i <= 5000; i++) {
//         if (i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }
// sum();

// // or
// function summ() {
//     let sum = 0;
//     for (let i = 1; i < 5000; i = i + 2) {
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// summ();

// 4. Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen.  Being able to loop through each member of the array is extremely important. Do this over and over (under 2 minutes) before moving on to the next algorithm challenge.
// function iteratingThroughArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// iteratingThroughArray([1, 3, 5, 7, 9, 13]);

// 5. Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array. (The best way to do this is to have the computer go through each number, one at a time, and to update the value in a variable called 'maximum' (or whatever you want to name the variable);  imagine that if I gave you no number and asked you what a maximum number is.  What would you say?  Say the first number I gave you was -3 and asked you what a maximum number is.  What would you say? Say the next number I gave you was 3 and asked you again what a maximum number now is.  What would you say?  Have the computer imitate this behavior of updating the maximum number as you iterate through each number in the array).  Again you're not to use any of the pre-built functions

// function max(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(max([-3, 3, 5, 7, 45]));

// 6. Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.  Again you're not to do this by using of any of the pre-built functions in Javascript.  Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.
// function avg(arr) {
//     let avg = 0;
//     for (let i = 0; i < arr.length; i++) {
//         avg += arr[i];
//     }
//     avg /= arr.length;
//     return avg;
// }
// console.log(avg([1, 3, 5, 7, 20]));

// 7. Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255]. Again, make sure you come up with a simple base case and write instructions to solve that base case first and then test your instructions for other complicated cases. (you can do this using a simple for loop.  You are allowed to use .push method)
// function oddy() {
//     let newArr = [];
//     for (let i = 1; i < 256; i++) {
//         if (i % 2 != 0) {
//             newArr.push(i)
//         }
//     }
//     return newArr;
// }
// console.log(oddy());

// 8. Write a program that takes an array and returns the number of values in that array whose value is greater than y. For example, if array = [1,3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array whose value is greater than 3).  Again make sure you come up with a simple base case and write instructions to solve that base case first and then test your instructions for other complicated cases. You can use a count function with this assignment.

// function greaterThanY(arr) {
//   let y = 3;
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > y) {
//       counter += 1;
//     }
//   }
//   return counter;
// }
// console.log(greaterThanY([1, 3, 5, 7, 9]));

// 9. Given an array x(e.g. [1, 5, 10, -2]), create an algorithm(sets of instructions) that squares each value in the array.When the program is done x should have values that have been squared(e.g. [1, 25, 100, 4]).You're not to use any of the pre-built function in Javascript.  You could for example square the value by saying x[i] = x[i] * x[i];]

// function square(x) {
//     for (let i = 0; i < x.length; i++) {
//         x[i] = x[i] * x[i];
//     }
//     return (x);
// }
// console.log(square([1, 5, 10, -2]));

// 10. Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0. When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).

// function eliminate(x) {
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] < 0) {
//             x[i] = 0;
//         }
//     }
//     return (x);
// }
// console.log(eliminate([1, 5, 10, -2]));

// 11. Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array. 

// function values(x) {
//     let max = 0;
//     let min = x[0];
//     let avg = 0;
//     for (let i = 0; i < x.length; i++) {
//         // Find Maximum value
//         if (x[i] > max) {
//             max = x[i];
//         }
//         // Find minimum value
//         else if (x[i] < min) {
//             min = x[i];
//         }
//         // Find avg
//         avg += x[i]; // avg = avg + x[i]
//     }
//     console.log(max);
//     console.log(min);
//     console.log(avg /= x.length);
// }
// values([-9, -34, 1, 3, 5, 8, -8]);