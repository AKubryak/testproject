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
promotion(convert(500, usdCurr));
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
function doNoting() { };
console.log(doNoting() === undefined);
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
    if (typeof (times) !== 'number' || times <= 0) {
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
/* 5 test */
// Место для первой задачи
function calculateVolumeAndArea(edge) {
    if (typeof (edge) == 'number' && edge > 0 && Number.isInteger(edge)) {
        return `Объем куба: ${edge * edge * edge}, площадь всей поверхности: ${6 * edge * edge}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

calculateVolumeAndArea(-5);

// Место для второй задачи (номер и вагон)
function getCoupeNumber(num) {
    if (typeof (num) == 'number' && num > 0 && num <= 36 && Number.isInteger(num)) {
        return Math.ceil(num / 4);
    } else if (num == 0 || num > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}

getCoupeNumber(30);
/* 6 test */
// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal !== 'number' || minutesTotal < 0 || !Number.isInteger())) {
        return 'Ошибка, проверьте данные';
    };

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (x) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} ${minutes} минут`;
}

getTimeFromMinutes(180);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || 
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

findMaxNumber();