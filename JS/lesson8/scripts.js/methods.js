// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)

// let age = [47, 34, 75, 23, 6, 4];

// let newAge = [];
// for (let i = 0; i <= age.length; i++) {
//     if(age[i] >= 18) {
//         console.log(age[i]);
//     }
// }

// age.forEach(el => {
//     if(el >= 18) {
//         console.log(el)
//     }
// });

// let ageArr = [];
// age.forEach(el => ageArr.push(el * 2));
// console.log(ageArr);

// .filter() - возращает новый массив со всеми элементами, прошедшими проверку

// Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).

// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// let newArray = array.filter(el => el < 100);

// console.log(newArray);

// let users = ['Ivan', 'Victoria', 'Olga', 'Elena', 'Anton'];

// let newUsers = users.filter(el => el.length >= 5);

// console.log(newUsers);

// Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения

// let newArray = array.filter(el => el % 2 === 0 && el !== 0);

// console.log(newArray);

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения

// let newArray = array.filter(el => el % 10 === 5);

// console.log(newArray);


// Дан массив из строк. Вывести только слова, длиннее 10 символов

// let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

// let newArray = arr.filter(el => el.length > 10);

// console.log(newArray);

// .map() - возвращает новый массив с результатом вызова указанной функции для каждого элемента (изменяет каждый элемент)

// Вернуть новый массив с каждым элементом, умноженным на 2

// let multOn2 = array.map(el => el * 2);
// console.log(multOn2);

// let age = [23, 15, 18, 56, 43, 28];
// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100
// let ageAdult = age.filter(el => el >= 18).map(el => el = 100);
// console.log(ageAdult);

// Сформировать массив, где несовершеннолетние заменены на 'child', а совершеннолетние на 'adult'

// let adults = age.map(el => {
//     if(el < 18) {
//         return el = 'child';
//     } else {
//         return el = 'adult'
//     }
// });

// console.log(adults);

// let adults = age.map(el => el < 18 ?'child' : 'adult'); 
// console.log(adults);

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения 
// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// let newArray = array.map(el => el > 100 ? '>100' : '<100');
// console.log(newArray);

// Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]

let age = [23, 15, 18, 56, 43, 28];

let newAge = age.map(el => el % 10)
console.log(newAge);







