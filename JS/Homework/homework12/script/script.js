//Задан массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фамилия, Возраст, Зарплата, фото. Зарплата рассчитывается через умножение ставки на количество дней. Карточки должны включать отображение фотографии. Примените стили к карточкам: width, padding, border, background-color.

const workers = [
    {
      id: 1,
      first_name: "Olga",
      last_name: "Petrova",
      age: 18,
      rate: 100,
      days: 15,
      photo: "https://reqres.in/img/faces/12-image.jpg",
      progress: 50
    },
    {
      id: 2,
      first_name: "Petr",
      last_name: "Ivanov",
      age: 46,
      rate: 70,
      days: 22,
      photo: "https://reqres.in/img/faces/4-image.jpg",
      progress: 10
    },
    {
      id: 3,
      first_name: "Oleg",
      last_name: "Orlov",
      age: 32,
      rate: 34,
      days: 10,
      photo: "https://reqres.in/img/faces/10-image.jpg",
      progress: 75
    },
    {
      id: 4,
      first_name: "Irina",
      last_name: "Medvedeva",
      age: 22,
      rate: 85,
      days: 17,
      photo: "https://reqres.in/img/faces/2-image.jpg",
      progress: 30
    },
  ];

  const root_elem = document.querySelector('#root');

  workers.forEach(({id, first_name, last_name, age, rate, days, photo, progress}) => {
    const card = document.createElement('div');
    const id_elem = document.createElement('p');
    const name_elem = document.createElement('p');
    const age_elem = document.createElement('p');
    const salary_elem = document.createElement('p');
    const photo_elem = document.createElement('img');
    const progress_container = document.createElement('div');
    const progress_line = document.createElement('div');
    const progress_value = document.createElement('p');


    id_elem.innerText = `ID: ${id}`;
    name_elem.innerText = `Name: ${first_name, last_name}`;
    age_elem.innerText = `Age: ${age}`;
    salary_elem.innerText = `Salary ${rate * days}`;
    progress_value.innerText = progress + '%';
   

    photo_elem.setAttribute('src', photo);
    photo_elem.setAttribute('alt', 'photo');


    card.classList.add('card');
    progress_container.classList.add('progress-container');
    progress_line.classList.add('progress-line');
    progress_value.classList.add('progress-value');

    progress_line.style.width = progress + '%';
    // progress_line.style.backgroundColor = progress < 50 ? 'red' : 'green';
  // progress >= 50 ? progressLine.style.backgroundColor = 'green' : progressLine.style.backgroundColor = 'red';

    if (progress <= 20) {
        progress_line.style.backgroundColor = 'red';
    } else if (progress <= 50) {
        progress_line.style.backgroundColor = 'yellow';
    } else {
        progress_line.style.backgroundColor = 'green';
    }


    progress_container.append(progress_line, progress_value)
    card.append(id_elem, name_elem, age_elem, salary_elem, photo_elem, progress_container);
    root_elem.append(card);

  }); 