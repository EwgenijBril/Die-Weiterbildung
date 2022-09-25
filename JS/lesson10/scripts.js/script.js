// const lst =[12, 4, 32, 45, 43, 23];
// написать forEach, который выводит только четные числа в консоль


// lst.forEach(elem => {
//     if(elem % 2 === 0){
//         console.log(elem);
//     }
   
// });

// написать forEach который выводит в консоль наибольше значения из массива

// let max = 0;
// lst.forEach(elem => {
//     if(elem > max) {
//         max = elem;
//     }

// });
// console.log(max);

// const lst =[-12, -4, -32, -45, -43, -23];

// let max = lst[0];
// lst.forEach(elem => {
//     if(elem > max) {
//         max = elem;
//     }

// });
// console.log(max);

// const lst =[12, 4, 32, 45, 43, 23];

// const result = lst.map(elem => elem ** 2);
// console.log(result);


// написать метод map, который возвращает массив, в котором все отрицательные значения преобразованы в положительные

// const lst =[-12, 4, -32, 45, 43, -23];

// const item = lst.map(elem => {
//     if(elem < 0) {
//         elem *= -1
//     }
//     return elem;
// });
// console.log(item)



// 1) написать функцию, которая преобразовывает нечетное в четное
// 2) встаивть функцию в map


// const lst =[12, 4, 32, 45, 43, 23];

// function func (value) {
//     if (value % 2 !== 0) {
//         value += 1
//     }
//     return value;
// };

// const result = lst.map(func);
// console.log(result);
// переписать данный процесс с использованием тернарного оператора

// const lst =[-12, 4, -32, 45, 43, -23];

// const item = lst.map(elem => elem < 0 ? -elem : elem );
// console.log(item);

let words =['rad', 'handy', 'tisch', 'laterne', 'auto'];
// console.log(words.filter(elem => elem.length <= 6));

// const add = word => words = [...words, word];
// const del = word => words = words.filter(elem => elem !== word);
// const read = () => words.forEach(elem => console.log('Word:'+ elem));
const search = (substr) => words.filter(word => word.startsWith(substr));


//  add('stuhl');
// del('tisch');
// read();


console.log(search('l'));