function pow(value, p) {
    const result = value ** p;
    return result;
}

const hip = pow(pow(3, 2) + pow(4, 2), 0.5);
// console.log(hip);

// const result_1 = pow(3, 4);
// const result_2 = pow(2, 2);
// const result_3 = pow(3, 5);
// const result_4 = pow(4, 2);

// console.log(result_1);
// console.log(result_2);
// console.log(result_3);
// console.log(result_4);

// опишите функцию, которая в качестве аргументов получает два числа
// и возвращает наибольшее


function max(num1, num2) {
  if(num1 > num2) {
    return num1
  } else {
   return num2
  }
}
  
// console.log(max(4, 6))
// console.log(max(7, 6))

// описать функцию, которая получает в качестве аргумента число и 
// возрващает true, если оно больше или равно нулю и false в ином случае


function number(num) {
    if (num >= 0) {
        return true
    } else {
        return false
    }
}

// console.log(number(4))
// console.log(number(-2))

function number(num) {
  return  num >= 0
    
}

// console.log(number(12));
// console.log(number(-13));

// написать функцию, которая принимает 3 числовых аргумента и проверяет возможность
// построения треугольника с указанными сторонами

// Если построить можно, функция возвращает true, а в ином случае false

function triangle(a, b, c) {
    if (a + b > c && c + b > a && c + a > b ) {
        return true
    } else {
        return false
    }

}

// console.log(triangle(3, 4, 5))
// console.log(triangle(4, 5, 3))

// console.log(triangle(4, 3, 15))
// console.log(triangle(4, 3, 9))

// c использованием Math.random() и Math.round() реализуйте функцию, которая возвращает
// случайное число от 1 до 6

function random () {
    return Math.round (Math.random() * 5 + 1)
}

// console.log(random())