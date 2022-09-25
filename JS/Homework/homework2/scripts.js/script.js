// 1. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov    '. Выведите переменную user в консоль, но без лишних пробелов по краям.
let user = '  Ivan Ivanov  ';
console.log(user.trim());

// 2. Напишите программу, которая выводит в консоль рандомное/случайное число от 0 до 1 и округляет его до третьего знака после точки. Воспользуйтесь методом toFixed().

let ramdom = Math.random();
console.log(+ramdom.toFixed(3));
// 3. Выведите на экран первую и последнюю буквы предложения, записанного в константу text (текст строки произвольный), в следующем формате:
// First: <первая буква строки>
// Last: <последняя буква строки></последняя>

const text = 'I want to work in the IT field.';
console.log(text[0]);
const index = text.length -1;
console.log(text [text.length -1]);

