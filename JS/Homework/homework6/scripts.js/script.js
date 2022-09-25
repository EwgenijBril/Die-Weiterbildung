// Дан массив
//let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// let newArray = [];
// for(let i = 0; i <= array.length; i++) {
//     if (array[i] < 100) {
//         newArray.push(array[i]);
//     }
// }

// let newArray = [];
// array.forEach(elem => {
//     if(elem < 100) {
//         newArray.push(elem);
//     }
// });
//console.log(newArray);


// Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и метод .forEach).
// let newArray = [];
// for (let i = 0; i <= array.length; i++) {
//     if(array[i] % 2 === 0) {
//          newArray.push(array[i]);
//     }
// }
//      console.log(newArray);
// let newArray = [];
// array.forEach(elem => {
//     if(elem % 2 === 0) {
//        newArray.push(elem);
//     }
// });
//console.log(newArray);

// let newArray = [];
// array.forEach(elem => newArray.push(elem % 2 === 0));
// console.log(newArray); 

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).

// for(let i = 0; i <= array.length; i++) {
//     if(array[i] % 5 === 0  && array[i] % 10 != 0) {
//         console.log(array[i]);
//     }
// }

// let newArray = [];
// array.forEach(elem => {
//     if(elem % 5 === 0 && elem % 10 != 0 ) {
//         console.log(elem);
//     }
// });


// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).

// for(let i = 0; i <= array.length; i++) {
//     if(array[i] > 100) {
//         console.log(`${'> 100'}`);
//     } else {
//         console.log(`${'< 100'}`);
//     }
// }

let newArray = [];
array.forEach(elem => {
    if(elem > 100) {
        console.log('> 100');
    } else {
        console.log('< 100');
    }   
});