const cards_container = document.querySelector('.cards_container');

let id_num = 1;

const request = num => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(resp => resp.json())
        .then(json => render(json))
}

request(id_num);


const render = ({title, completed}) => {
    cards_container.innerText = '';
    const card = document.createElement('div');
    const title_elem = document.createElement('p');
    const completed_elem = document.createElement('p');

    const status = completed ? 'done' : 'not done';
    const background = completed ? 'lightgreen' : 'linhtgray'

    title_elem.innerText = `Task: ${title}`;
    completed_elem.innerText = `Status: ${status}`;

    card.classList.add('card');

    card.style.backgroundColor = background;

    card.append(title_elem, completed_elem);
    cards_container.append(card); 
}

const [left_btn, right_btn] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () =>{
    if ( id_num === 1) {
        id_num = 201
    }
    request(--id_num)
});

right_btn.addEventListener('click', () => {
    if ( id_num === 200) {
        id_num === 0
    }
    request(++id_num)
});