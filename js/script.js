"use strict"
let userName = prompt('Your name', 'Admin');
if (userName == 'Admin') {
    let pass = prompt('Password', 'Я главный');
    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}