"use strict";

// Циклы

/* if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
} */

/* const num = 50;

 if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */


/* const num = 50;

switch (num) {
    case 49:
        console.log('Неверно!');
        break;
    case 100: 
        console.log('Неверно!');
        break;
    case 50: 
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз :(');
        break; 
}   */


//let num = 50;

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
} */



// Функции 

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello!');
};

logger();

const bebebe = (a,b) => { 
    return a + b 
}; */


// Методы и свойства строк и чисел

/* const str = 'test';
const arr = [1, 2, 4];

console.log(arr.length); */

const str = 'test';

console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some       fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
//console.log(parseInt(test));
console.log(parseFloat(test));