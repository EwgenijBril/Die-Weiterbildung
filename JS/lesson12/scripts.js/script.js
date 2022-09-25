

// lst.forEach(elem => console.log(elem ** 2));

// lst.forEach(elem => {
//     if (elem % 2 === 0){
//         console.log(elem);
//     }
// });

// let newLst = lst.map(elem => elem < 0 ? elem * -1 : elem);
    
// console.log(newLst);

// let newLst1 = lst.map(elem => {
//     if(elem % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(newLst1);
const lst = [12, 4, 32, 45, 43, 3];

// const newLst2 = lst.filter(elem => elem < 10);
// console.log(newLst2);

//используя метод reduce найдите произведение всех чисел массива
// const newArr3 = lst.reduce((prev, value) => prev * value);
// console.log(newArr3);

// используя метод reduce найдите максимальное значение в массиве
// const newArr4 = lst.reduce((prev, value) => {
//     if(prev > value) {
//        return prev;
//     } else {
//        return value;
//     }

// })
// console.log(newArr4);

// const newArr4 = lst.reduce((prev, value) => prev > value ? prev : value)
// console.log(newArr4);

const newArr3 = lst.reduce((prev, value) => prev + value );
// console.log(newArr3);