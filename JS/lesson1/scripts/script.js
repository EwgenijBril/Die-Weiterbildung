let a = Math.pow(10, 3);

let b = Math.abs(5);
let c = Math.abs(-5);

let d = Math.ceil(4.33); // округление до потолка целого значения
let e = Math.floor(4.33); // округление до нижнего значение
let f = Math.round(4.33); // округление по правилам матемантике

let min = Math.min(5, 34, 56, -100, 256);
let max = Math.max(5, 34, 56, -100, 256);

let random = Math.random(); //возрощает случайное дробное число




//Напишите программу, которая выводит случайное число от 0 до 10

let step_1 = Math.random();
let step_2 = step_1 * 10;
let step_3 = Math.round(step_2);

console.log(step_1);
console.log(step_2);
console.log(step_3);

let random_num = Math.round(Math.random() * 10);
let random_num1 = Math.round(Math.random() * 10 + 1); //выводит случайное число от 1 до 11
let random_num2 = Math.round(Math.random() * 9 + 1); //выводит случайное число от 1 до10
let random_num3 = Math.round(Math.random() * 9); //выводит случайное число от 0 до 9

console.log(random_num);
console.log(random_num1);
console.log(random_num2);
console.log(random_num3);

//Напишите программу, которая выводит случайное число от 15 до 25

let random_num4 = Math.round(Math.random() * 10 + 15);

let random_num5 = 15 + Math.round(Math.random() * 10);

console.log(random_num4);
console.log(random_num5);
