// const arr = [12, 34, -5, 6, -78, 4, -3, 4];

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         console.log(arr[i]);
//     }

// }

// вывести из массива arr только положительные числа

// arr[0] = -1;
// console.log(arr);

// написать цикл, который позволяет преобразовать все отрицательные числа в 
// положительные
// после цикла выведите массив

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0 ) {
//         arr[i] *=-1
        
//     }
    
// }

// console.log(arr);

// написать цикл, который преобразует все нечетные числа в четные (прибавляет 1)
// в конце выведите массив

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0 ) {
//         arr[i] += 1;
            
//     }
        
// }

// console.log(arr);

// написать цикл, который выводит только числа, квадрат которых меньше 1000


// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] ** 2 < 1000) {
//          console.log(arr[i]); 
//     }
        
// }

// найти сумму чисел из массива и вывести ее

// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];     
// }
// console.log(sum);

// доработать цикл таким образом, чтобы он рассчитывал сумму чутных чисел
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         sum += arr[i];
//     }
         
// }
// console.log(sum);

// написать цикл (один), который находит сумму четных чисел и сумму нечетных
// после цикла выведите эти значения
// let sumEven = 0;
// let sumOdd = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         sumEven += arr[i];
//     } else {
//         sumOdd += arr[i];
//     }
         
// }
// console.log(sumEven);
// console.log(sumOdd);

// найти сумму положительных чисел и отрицательных из массива
// использовать только один цикл
// сумму отрицательных чисел нужно посчетать без минуса


// let sumPos = 0;
// let sumNeg = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0){
//         sumPos += arr[i];
//     } else {
//         arr[i] *=-1
//         sumNeg += arr[i];
//     }
         
// }
// console.log(sumPos);
// console.log(sumNeg);

// найти максимальное число из массива
// все числа в массиве потожительные


// const arr = [12, 34, 5, 6, 78, 4, 3, 4];

// let tempMax = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(tempMax < arr[i]) {
//         tempMax = arr[i];
//     }
// }
// console.log(tempMax);


// найти максимальное число из массива

// const arr = [-12, -34, -5, -6, -78, -4, -3, -4];

// let rasult = arr[0];
// for(let i = 1; i < arr.length; i++) {
//     if(rasult < arr[i]) {
//         rasult = arr[i];
//     }
// }
// console.log(rasult);

// написать цикл, который находит индекс максимального числа
// если максим альных чисел несколько, то в мы сохраняем индекс 
// первого максимального числа

// const arr = [12, 34, 5, 6, 78, 78, 4, 3, 4];

// let maxResult = arr[0];
// let idexMax = 0;
// for(let i = 1; i < arr.length; i++) {
//     if(maxResult < arr[i]) {
//         maxResult = arr[i];
//         idexMax = i;
//     }
// }
// console.log(idexMax);

// найти в массиве преднеибольшое число

const arr = [12, 34, 5, 6, 78, 4, 3, 4];

let maxResult = 0;
let rasult = 0;
for(let i = 1; i < arr.length; i++) {
    if(maxResult < arr[i]) {
      rasult =  maxResult;
      maxResult = arr[i];
    } else if (arr[i] > rasult){
        rasult = arr[i];
    }
}
console.log(rasult);
