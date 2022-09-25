// First level: Задан массив:
let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
// Задачи:
// Добавьте в начало массива число 53. Затем удалите из конца массива последние 2 числа. Далее решайте задачи с обновленным массивом.
arr.unshift(53);
// arr.pop();
// arr.pop();
arr.length = arr.length -2;
console.log(arr);

// Сформируйте массив из положительных чисел меньше 50. Найдите сумму всех положительных чисел меньше 50.
let newArr = arr.filter(elem => elem <= 50 && elem > 0).reduce((total, elem) => total + elem);
console.log(newArr)

// Second level: 3. Сформируйте массив, состоящий только из положительных чисел, кончающихся на 3. Найдите сумму всех положительных чисел, кончающихся на 3.
let newArr1 = arr.filter(elem => elem > 0 && elem % 10 === 3).reduce((total, elem) => total + elem);
console.log(newArr1);

// Сформируйте массив, в котором положительные числа на строку '+', а отрицательные числа - на '-'

let newArr2 = arr.map(elem => elem > 0 ? '+' : '-');
console.log(newArr2);