const cards_container = document.querySelector('.cards_container');
const [firts_btn, second_btn] = document.querySelectorAll('.triggers button');

const render = (data) => {
    cards_container.innerText = '';
  const cards = data.map(({avatar, first_name}) => {
    const card = document.createElement('div');
    const avatar_elem = document.createElement('img');
    const name_elem = document.createElement('p');

    avatar_elem.src = avatar;
    avatar_elem.alt = 'avatar';

    name_elem.innerText = first_name;

    card.append(avatar_elem, name_elem);
    return card;
  })
  cards_container.append(...cards);
}

const request = (num) => {
    fetch(`https://reqres.in/api/users?page=${num}`)
    .then(resp => resp.json())
    .then(json => render(json.data))
}

request(1)


firts_btn.addEventListener('click', () => request(1) )
second_btn.addEventListener('click', () => request(2) )




// const array = [1, true, 'hello', 56]; пример спред-оператора

// console.log(array);
// console.log(...array);


// const triggers = document.querySelectorAll(".triggers button");

// triggers.forEach((e, i) =>  e.addEventListener("click", () => request(i + 1));

