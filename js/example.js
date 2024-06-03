'use strict'
/* 1 */
const usdCurr = 16;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}

convert(500, usdCurr);
promotion( convert(500, usdCurr) );
/* 2 */
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();
/* 3 */
function doNoting() {};
console.log( doNoting() === undefined );
/* 4 test */
// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}