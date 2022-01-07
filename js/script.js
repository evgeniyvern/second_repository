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

/* const str = 'test';

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
console.log(parseFloat(test)); */


// Callback-функции

/* function first() {
    setTimeout(function() {
        console.log(1);
    }, 500)
}

function second() {
     console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done); */


// Объекты, деструктуризация объектов 

/* const options = { // мы создали объект
    name: 'test', // name - ключ или свойство, 'test' - значение ключа/значения
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    } 
};

options.makeTest();

const {border, bg} = options.colors;
console.log(options.colors);

// console.log(options.colors.border);

// delete options.name;

// console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length); */


// Массивы и псевдомассивы

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

/* arr.forEach(function(item, i, arr) {
    console.log(`${i} : ${item} внутри массива ${arr}`);
}); */

/* const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; ')); */

/* arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let value of arr) {
    console.log(value);
} */


// Spread-оператор

let a = 5,
    b = a;

b = b + 5;  

console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Передаёт ссылку

copy.a = 10;

console.log(copy);
console.log(obj);

const testObj = {
    a: 5,
    b: 3,
    c: {
      f: 10,
      s: 23
    }
};

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadsdsd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newArray2 = [...array];
console.log(newArray2);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};


// ООП 

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100
};

Object.setPrototypeOf(john, soldier);

john.sayHello();