const form_elem = document.querySelector('.form');
const card_container = document.querySelector('.card_container')

form_elem.addEventListener('submit', (event) => {
    event.preventDefault(); //запрещает обновлять страницу после отправки формы
    //console.log(event);// событие
    //console.log(event.target);// элемент с которым происходит событие
    //console.log(event.target.city);// конкретный инпут по атрибуту name
    //console.log(event.target.city.value);// данные из инпута

    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const age_elem = document.createElement('p');
    const city_elem = document.createElement('p');

    const {name, age, city} = event.target;

    name_elem.innerText = `Name: ${name.value}`;
    age_elem.innerText = `Age: ${age.value}`;
    city_elem.innerText = `City ${city.value}`

    card.classList.add('card');

    card.append(name_elem, age_elem, city_elem);
    card_container.append(card);

    name.value = '';//чтобы поля очищались после нажатия кнопки
    age.value = '';//чтобы поля очищались после нажатия кнопки
    city.value = '';//чтобы поля очищались после нажатия кнопки
});

