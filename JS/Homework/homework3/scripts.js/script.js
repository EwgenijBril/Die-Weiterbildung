// Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль. 
function getLength(string ) {
    return string.length
}

console.log(getLength('Hello'));

let getLength1 = (string2) => string2.length;

console.log(getLength1('Hello'));
   
// Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. 

function getExp(num1, num2 = 2) {
    return num1 ** num2 // return  Math.pow(num1, num2)
}

console.log(getExp(2, 3));
console.log(getExp(2));

let getExp1 = (num1, num2 = 2) => num1 ** num2; // return  Math.pow(num1, num2)

console.log(getExp1(2, 5))
console.log(getExp1(2))

// Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).
function getMax(a, b ) {
    return Math.max(a, b)
}

console.log(getMax(9, 7));

function getMax(a, b ) {
    if(a > b){
        return a
    } else {
        return b
    }
}

console.log(getMax(9, 7));

let getMax1 = (num1, num2) => Math.max(num1, num2);

console.log(getMax(9, 7));

let getMax3 = (a, b ) => {
    if(a > b){
        return a
    } else {
        return b
    }
}

console.log(getMax3(9, 7));
 

// Second level: 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.

function sortNums(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
        if(num2 > num3){
            console.log(num1, num2, num3);
        } else {
            console.log(num1, num2, num3);
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 >num3) {
            console.log(num2, num1, num3);
        }else {
            console.log(num2, num3, num1);
        }
    } else {
        if( num1 > num2) {
            console.log(num3, num1, num2);
        } else {
            console.log(num3, num2, num1);
        }
    }
    
}

sortNums(3, 8, 2); // 8, 3, 2
sortNums(-3, 88, 12); // 88, 12, -3

let sortNums1 = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3) {
        if(num2 > num3){
            console.log(num1, num2, num3);
        } else {
            console.log(num1, num2, num3);
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 >num3) {
            console.log(num2, num1, num3);
        } else {
            console.log(num2, num3, num1);
        }
    } else {
        if( num1 > num2) {
            console.log(num3, num1, num2);
        } else {
            console.log(num3, num2, num1);
        }
    }
    

}
sortNums1(3, 8, 2); // 8, 3, 2
sortNums1(-3, 88, 12); // 88, 12, -3
    

// Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. Используйте условный оператор.
function maxOfFive(a, b, c, d, e) {
    let max = a;
    if (b > a) {
        max = b;
    } 
    if (max < c) {
        max = c;
    } 
    if (max < d) {
        max = d;
    }
    if (max < e) {
        max = e;
    }
    
    return max;
}

console.log(maxOfFive(1, 2, 3, 4, 5));

function getMaxNum_3(a, b, c, d, e) {
    return Math.max(a, b, c, d ,e)
}
console.log(getMaxNum_3(9, 7, 1, 5, 10));

