// function pow(value, p) {
//     const result = value ** p;
//     return result;
// }

// const pow = (value, p) => {
//     const result = value ** p;
//     return result
// }

// const pow = (value, p) => value ** p;

// console.log(pow(3, 2))
// console.log(pow(4, 2))

// необходимо написать стрелочную функцию, которая получает в качестве аргумента число
// и возвращает true, если оно больше 0 и false в ином случае

// const number  = num => num > 0;

// console.log(number(12));
// console.log(number(-3));


// написать стрелочную функцию, которая в качестве аргумента получает число (год)
// и возвращает true если год високосный и false в ином случае

const leapYear = year => year % 4 === 0 && year % 100 != 0 || year % 400 === 0;

// console.log('2000', leapYear(2000));
// console.log('2001', leapYear(2001));
// console.log('2022', leapYear(2022));
// console.log('2024', leapYear(2024));


// написать функцию, которая получает в качестве аргумента число и возвращает true, 
// если оно четное
// и false если нечетное

// const evenNumber = number => number % 2 === 0;

// console.log(evenNumber(6));
// console.log(evenNumber(9));

// const a = evenNumber;

// console.log(a(9));

const compare = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const runWithInputData = (func) => {
    const value_1 = + prompt('укажите число');
    const value_2 = + prompt('укажите число');
    return func(value_1, value_2);
}

const result = runWithInputData(compare);
console.log(result);