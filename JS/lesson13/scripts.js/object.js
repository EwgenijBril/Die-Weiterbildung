let object = {
    firstname: 'Evgeny',
    lastname: 'Bril',
    age: 35,
    active: true 
}

let a = 'firstname'

//console.log(`Hello ${object.firstname}! You are ${object.age} years old.`);
// console.log(`Hello ${object[a]}! You are ${object['age'] } years old.`);
// 1. если ключ состоит из двух и более слов
// 2. если ключ - это переменная

//================================================================================

const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
];


//   console.log(users);

//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль


// users.forEach(elem => console.log(elem));

//2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта

//users.forEach(elem => console.log(elem.first_name));

//3. Добавить в конец массива объект со следующими значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

users.push({
    first_name: 'Anton',
    last_name: 'Gribov',
    age: 36,
    salary: 1760
});

// console.log(users);


// 4. Сформируйте массив из совершеннолетних пользователей

// const users2 = users.filter(elem => elem.age > 18);
// console.log(users2);

// 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']

// const users3 = users.map(elem => elem = elem.last_name);
// console.log(users3);

// 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']

// const users4 = users.map(elem => `${elem.first_name} ${elem.last_name}`);
// console.log(users4);

// 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()

// const userOlga = users.find(elem => elem.first_name ==='Olga');
// console.log(userOlga);

// 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i

// const userI = users.filter(elem => elem.first_name[0] === 'I' || elem.first_name[0] === 'i');
// console.log(userI);

// const userI1 = users.filter(elem => elem.first_name[0].toLowerCase() === 'i');
// console.log(userI1);

// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];

const users5 = users.filter(elem => elem.age >= 18).map(elem => `${elem.first_name} ${elem.last_name} ${elem.age}: ${elem.salary}.`);
console.log(users5);