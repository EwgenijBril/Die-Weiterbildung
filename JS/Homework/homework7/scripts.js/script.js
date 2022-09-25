// Дан массив с числами.
// let arr = [1, -6, 4, 0, 9, -5, 16];

// Создайте новый массив, состоящий только из отрицательных чисел.
let arr = [1, -6, 4, 0, 9, -5, 16];


let arrayNeg = arr.filter(elem => elem < 0);
console.log(arrayNeg);

// Создайте новый массив, состоящий только из четных чисел.

let newErray1 = [];
arr.forEach(elem => elem % 2 === 0 && elem != 0 ? newErray1.push(elem) : elem);
console.log(newErray1);

// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.

let negaCount = arrayNeg.length;
console.log(negaCount);

let amount = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
        amount += 1;
    }
}
console.log(amount);

// ЗАДАЧА 2
// Дан массив с числами.
// let arr2 = [1, -6, 4, 0, 9, -5, 16];
// Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
let arr2 = [1, -6, 4, 0, 9, -5, 16];

let newArray2 = arr2.filter(elem => elem > 0);
console.log(newArray2);
let newArray3 = newArray2.map(elem => elem ** 0.5);
console.log(newArray3);

let numbers = arr2.filter(el => el > 0).map(el => Math.sqrt(el));
// ЗАДАЧА 3
// Дан массив из разных типов данных.
// let arr = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)

let arr3 = [8, 'hello', true, false, 'bye', 122, undefined, 15];

let newArray4 = arr3.map(elem => typeof elem === 'number' ? elem : -1);
console.log(newArray4);

// ЗАДАЧА 4
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
let arr4 = [
  ['Максим', 'Грибов', true],
  ['Антон', 'Куликов', true],
  ['Светлана', 'Иванова', false],
  ['Ольга', 'Петрова', true],
  ['Сидр', 'Сидоров', false]
]


let newArray5 = arr4.filter(el => el[2] === true).map(el => `${el[0]} ${el[1]}`);

console.log(newArray5);

