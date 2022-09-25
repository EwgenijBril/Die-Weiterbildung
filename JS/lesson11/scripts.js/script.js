// .reduce() - служит для того, что мы получили какое-то финальное значение, совершив итерацию по массиву. Возвращает финальное занчение, число.

// let numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];

// }
// console.log(sum);

// let result = numbers.reduce(total, elem => total + elem);
// console.log(result);

// Дан массив
//let nums = [3, 6, 7, 1]; // 
// (3 + 6 + 7 + 1) / 4 = 4.25

//Найти среднеарифмитическое всех элементов массиов

let nums = [3, 6, 7, 1];
let coun = nums.reduce((total, elem) => total + elem) / nums.length;
console.log(coun);