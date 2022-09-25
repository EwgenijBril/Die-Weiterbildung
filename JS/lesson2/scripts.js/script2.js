// alert('Hello');

// const firstName = prompt('What is your name?');
// const lastName = prompt('What is your last name?');
// const age = prompt('What is you age?')

// if (age < 18) {
//     console.log(`Hello, ${firstName} ${lastName}. Your age is ${age}`);
// } else if (age > 18) {
//     console.log(`Hello, ${firstName} ${lastName}.`);
// } else {
//     console.log(`Dear, ${firstName} ${lastName}.  Your age is ${age}`);
// }

// Сгенерируйте случайное число от 0 до 1. Округлите его до одного знака после точки, тип выводимых данных должен быть number. 
// Напишите условный оператор. Если случаное число больше 0.5, то выводить в консоль сообщение "Победа". Если случаное число меньше 0.5, то выводить в консоль сообщение "Поражение". Если случаное число равно 0.5, то выводить в консоль сообщение "Ничья".

let rondom = + Math.random().toFixed(1);

console.log(rondom);

if (rondom > 0.5) {
    console.log ('Победа');
} else if (rondom < 0.5) {
    console.log('Поражение');
}; 