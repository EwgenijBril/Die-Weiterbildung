// 1. First level: 1. Напишите функцию, которая принимает в качестве аргумента имя (строку), а возвращает сообщение в формате: Dear ИМЯ, welcome. Выведите результат в консоль. Запишите функцию в двух форматах (function declaration и arrow function).
function getString(name) {
    return `Daer ${name}, welcome!`;
}

console.log(getString('Evgeny'));

const getString1 = name1 => `Daer ${name1}, welcome!`;

console.log(getString1('Jon'));

// 2. Напишите функцию, которая принимает в качестве аргументов два значения: имя и возраст. Если переданный возраст меньше 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are younger than 18. Если возраст больше или равен 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are adult. 
// Запишите функцию в двух форматах (function declaration и arrow function).

function getData(name, age) {
    if (age < 18) {
        return `Dear ${name}, you are younger than 18.`;
    } else {
        return `Dear ${name}, you are adult.`;
    }
}

console.log(getData('Mason', 17));
console.log(getData('Willam', 25));

const getData1 = (name2, age1) => {
    if (age1 >= 18) {
       return `Dear ${name2}, you are adult.`;
    } else {
       return `Dear ${name2}, you are younger than 18.`;
    }
}

console.log(getData1('Jacob', 15));
console.log(getData1('Noah', 30));

// Second level: 3. Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения. Значение второго аргумента должно быть указано по умолчанию 2. Запишите функцию в двух форматах (function declaration и arrow function).
function getMultip(num1, num2 = 4) {
    return num1 * num2;
}

console.log(getMultip(5));

const getMultip1 = (num1, num2 = 6) => num1 * num2;

console.log(getMultip1(7));



// 4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее значение. Выведите результат в консоль. Предложите два варианта решения. Запишите функцию в двух форматах (function declaration и arrow function).

function getMin(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(getMin(4, 1));
console.log(getMin(2, 6));

const getMin1 = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(getMin(3, 7));
console.log(getMin(8, -1));
