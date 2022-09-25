// Напишите функцию, которая принимает два числовых аргумента a и b (a > b), и выводит в консоль числа от a до b кратные 3.
// Пример 10, 3 => 9, 6, 3

// const getNums = (a, b) => {
//     for(let i = a; i >= b; i--) {
//         if (i % 3 === 0 ) {
//             console.log(i);
//         }
//     }  
// }
// getNums(10, 3);

// Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 или 5. Выведите сумму в консоль.

// const getSum = () => {
//     let sum = 0;
//     for(let i = 0; i <= 100; i++){
//         if(i % 3 === 0 || i % 5 === 0) {
//             sum += i; 
//         }  
//     }
//     return sum
// }

// console.log(getSum());

// Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// const getArray = () => {
//     let result = [];
//     for(let i = 0; i <= 50; i++) {
//         if(i % 5 === 0 && i !== 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(getArray());

// Напишите функцию, формирующую массив из чисел от a до b (b > a) кратных 2.

// const getArray2 = (a, b) => {
//     let result  = [];
//     for(let i = a; i <= b; i++) {
//         if(i % 2 === 0) {
//             result.push(i);

//         }
//     }
//     return result;
// }

// console.log(getArray2(0, 20));


// Write a function that reverses a string. The input string is given as an array of characters s.

// const reverseStr = (arr) => {
//     let reverseArr = [];
//     for(let i = arr.length -1; i >= 0; i--) {
//         reverseArr.push(arr[i]);
//     }
//     return reverseArr;
// }

// const reverseStr1 = (arr) => arr.reverse();

// console.log(reverseStr(['H','e','l','l','o']));
// console.log(reverseStr1(['H','e','l','l','o']));
