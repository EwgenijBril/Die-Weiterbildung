// Найти длину последнего элемента массива. Заранее не известна длина массива

let str = 'hello, world!!!!';
let elements = ['hello', 5, true, false, 23, 'bye', 76, true, undefined, null, str];

console.log(elements[elements.length -1].length);

let lastElem = elements[elements.length -1];
console.log(lastElem[lastElem.length -1]);


// Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
// Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Для начала пропишите аргументы функции.  
//Пример: [ 'one', 'two', 'three' ] => 'three'

const getString = (array) => {
    if(array.length === 0) {
        return null;
    }

    let result = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i].length > result.length) {
            result = array[i];
        }
    }
    return result;
}

console.log(getString([]));
console.log(getString(['one', 'two', 'three']));