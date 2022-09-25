//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.


const workers_form = document.querySelector('.workers_form');
const card_container = document.querySelector('.card_container');


workers_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const age_elem = document.createElement('p');
    const salary_elem = document.createElement('p');
    const photo_elem = document.createElement('img');

    const {firstname, lastname, age, rate, days, photo} = event.target

    name_elem.innerText = `Name: ${firstname.value} ${lastname.value}`;
    age_elem.innerText = `Age: ${age.value}`;
    salary_elem.innerText = `Salary: ${rate.value * days.value}`

    photo_elem.setAttribute('src', photo.value);
    photo_elem.setAttribute('alt', 'photo');

    card.classList.add('card');


    card.append(name_elem, age_elem, salary_elem, photo_elem);
    card_container.append(card);

    firstname.value = '';
    lastname.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    photo.value = '';

    // ссылки на фото https://reqres.in/img/faces/7-image.jpg
});


//Добавьте к форме поле ввода почты.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.
//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.
