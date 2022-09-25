// Дан массив с данными
const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia',
      active: true,
    },

    {
      first_name: 'dmitry',
      last_name: 'Petrov',
      age: 7,
      city: 'Berlin',
      country: 'Germany',
      active: true,
    },

    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France',
      active: false,
    },

    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 10,
      city: 'Rome',
      country: 'Italy',
      active: false,
    }
  ];
  //1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]
  const new_arr = people.map(elem => `${elem.first_name} ${elem.last_name} (${elem.city}, ${elem.country})`);
  console.log(new_arr);


  // 2. Сформируйте массив из активных людей
  const new_arr1 = people.filter(elem => elem.active === true);
  const new_array = people.filter(elem => elem.active );


  console.log(new_arr1);
  console.log(new_array);


  //3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)
  const new_arr2 = people.filter(elem => elem.first_name[0] == 'D' || elem.first_name[0] == 'd');

  console.log(new_arr2)


  //4. Получите из массива объект, где страной проживания человека является 'Germany'
  const new_arr3 = people.filter(elem => elem.country === 'Germany');

  console.log(new_arr3);



  // 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]
  const new_arr4 = people.filter(elem => elem.age >= 18).map(elem => `${elem.first_name} ${elem.last_name} ${elem.age}, ${elem.country} ${elem.city},`);

  console.log(new_arr4);


  // 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

  people[0].first_name = 'Petr';
  people[0].age = 99;

  console.log(people);

  //Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

const user = { 
  first_name: 'Evgeny',
  last_name: 'Bril'
}

const get_value = (obj, key) => obj[key];


console.log(get_value(user, 'last_name'));
console.log(get_value({ first_name: 'Evgeny', last_name: 'Bril', age: 35 }, 'age'));
  
console.log(people[0].age);
console.log(people[0].hasOwnProperty('age'));
console.log('age' in people[0]);