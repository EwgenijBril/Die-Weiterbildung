//функции 

//Функция - это всегда какое-то действие

// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

// function sum() {
//     let a = 4 + 5;
//     return a
// }
  
//   console.log (sum());
  
  
    
  

    // function sum(num1, num2) {
    //     let a = num1 + num2;
    //     return a
    // }

    // console.log(sum(1, 3));
    // console.log(sum(4, 3));
    // console.log(sum(6, 3));

    //NaN - not a number
    // 5 + undefined = NaN
    // 5 + '5' = 55
    // 5 + true = NaN


    // function getGeeting(firstName){
    //     return `Hello, ${firstName}`
    // }

    // console.log(getGeeting('Olga'))
    // console.log(getGeeting('Evgeny'))
    // console.log(getGeeting('Olga'))

    //Правила наименования функций
//1. использовать настоящие английские слова
//2. использовать snake_case или camalCase
//3. первое слово глагол (get, show, sum, divide и т.д.)

// function sum(num1 = 5, num2 = 5) {
//      return num1 + num2;
        
// }

// console.log(sum(1, 3));
// console.log(sum(4, 3));
// console.log(sum(6, 3));
// console.log(sum());


//Напишите функцию, принимающую 3 аргумента и возвращающую результат умножения чисел друг на друга. Значение последнего аргумента по умолчанию должно быть равно 1.
//Выведите в консоль результат вызова функции

// function getMultip(num1, num2, num3 = 1) {
//     return num1 * num2 * num3;
// }

// console.log(getMultip(3, 5,));
// console.log(getMultip());

//Напишите функцию, принимающую 2 аргумента firstname и age и возвращающую сообщение в формате "Hello, FIRSTNAME. Your age is AGE". По умолчанию указать значения 'name' для firstname и 'age' для age




function getString(firstName = 'Xsenjia', age = 25) {
    return `Hello ${firstName}. Your age is ${age}.`

}

console.log(getString('Evgeny', 35))
console.log(getString(undefined, 45))
console.log(getString('Sacha'))

//Напишите функцию, которая принимается в себя 2 аргумента и возвращает результат деления большего числа на меньшее.

function getDivis(a, b) {
  if(a > b){
    return a / b
  } else {
    return b / a 
  }
}

console.log(getDivis(2, 4));
console.log(getDivis(6, 2));

function getDivis1(num1, num2) {
  return Math.max(num1, num2) / Math.min(num1, num2)
}

console.log(getDivis1(5, 10))
console.log(getDivis1(36, 6))

function greetingDeclaration(name, lastName) {
  return `Hello ${name} ${lastName}!`
}

//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
let greeting  = function getHello(name, lastName) {
  return `Hello ${name} ${lastName}!`
}

console.log(greeting('Olga', 'Petrova'));


//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)

let greetingArrow = (name, lastName) => `Hello ${name} ${lastName}!`;

console.log(greetingArrow('Olga', 'Petrova'));

