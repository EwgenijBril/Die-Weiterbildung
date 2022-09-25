// Коллбэк (callback) - это функция, переданная в другую функцию в качестве аргумента
// const multThree = () => {
//     return 3 * 2;
// }

// const multFour = () => {
//     return 4 * 2;
// }

// const multNumber =  (num) => {
//     return num * 2;
// }

// multNumber(6);
// multNumber(7);
// multNumber(8);

// let nums = [1, 2, 3, 4, 5];
// let nums2 = [1, 2, 3, 4, 5];

// const divideNums = (arr) => {
//     let array = [];
//     for(let i = 0; i < arr.length; i++) {
//         array.push(arr[i] / 2)

//     }
//     return array;
// }

// console.log(divideNums(nums));

// const multNums = (arr) => {
//     let array = [];
//     for(let i = 0; i < arr.length; i++) {
//         array.push(arr[i] * 2)

//     }
//     return array;
// }

// console.log(multNums(nums2));

let nums2 = [1, 2, 3, 4, 5];

const changeNums = (arr, callback) => {
    let array = [];
    for(let i = 0; i < arr.length; i++) {
        array.push(callback(arr[i])); // Передаем инструкцию и работаем по инструкции с каждым элементом массива.

    }
    return array;
}

const divide = num => num / 2;
const mult = num => num * 2;
const plus = num => num + 2;

console.log(changeNums(nums2, divide));
console.log(changeNums(nums2, mult));
console.log(changeNums(nums2, plus));
