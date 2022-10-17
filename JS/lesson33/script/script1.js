// Имя фамилия, возраст, пол. В зависимости от пола цвет заднего фона

const userForm = document.querySelector('.user_form');
const usersContainer = document.querySelector('.users_container')

const request = num  => {
    fetch(`https://dummyjson.com/users/${num}`)
.then(resp => resp.json())
.then(json => render(json))
}

const render = ({firstName, lastName, age, gender}) => {
    usersContainer.innerText = '';
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const genderElem = document.createElement('p')

    nameElem.innerText = `Name: ${firstName} ${lastName}`;
    ageElem.innerText = `Age: ${age}`;
    genderElem.innerText = `Gender: ${gender}`;

    const cardBackground = gender === 'male' ? 'lightgreen' : 'lightpink'
    cardElem.style.backgroundColor = cardBackground;
    cardElem.classList.add('card_elem');


    cardElem.append(nameElem, ageElem, genderElem);
    usersContainer.append(cardElem);

};



userForm.addEventListener('submit', event => {
    event.preventDefault();
    const id  = event.target.id_number.value
    request(id)
    event.target.id_number.value = '';
});