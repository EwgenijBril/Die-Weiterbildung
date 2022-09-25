// Задан массив:
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.
// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.
// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.

arr.unshift(67);
arr.push(56);
console.log(arr);

let newArray = arr.filter(elem => elem < 100);
console.log(newArray);

let newArray1 = arr.filter(elem => elem % 10 == 7 );
console.log(newArray1);  

// 4. Найдите сумму чисел, которые меньше 100.

let sum = newArray.reduce((total, elem) => total + elem);
console.log(sum)
// 5. Найдите сумму чисел, которые заканчиваются на 7.

let sum1 = newArray1.reduce((total, elem) => total + elem );
console.log(sum1);


