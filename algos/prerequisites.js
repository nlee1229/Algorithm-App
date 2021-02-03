// 1. Write a program that would print all the numbers from 1 to 255
function oneToTwoFiftyFive() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}
oneToTwoFiftyFive();

// 2. Write a program that would print all the odd numbers from 1 to 1000
function odd() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}
odd();

// 3. Write a program that would print the sum of all the odd numbers from 1 to 5000
function sum() {
    let sum = 0;
    for (let i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
}
sum();

// or
function summ() {
    let sum = 0;
    for (let i = 1; i < 5000; i = i + 2) {
        sum = sum + i;
    }
    console.log(sum);
}
summ();

