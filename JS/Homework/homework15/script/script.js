const cards_container = document.querySelector('.cards_container');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(resp => resp.json())
.then(json => render(json))


const render = (data_array) => {
    data_array.forEach(({title, completed }) => {
    
        const card = document.createElement('div');
        const title_elem = document.createElement('p');
        const completed_elem = document.createElement('p');

        card.classList.add('card');

        title_elem.innerText = `Task: ${title}`;
        completed_elem.innerText = `Status: ${completed}`;

        if(completed == true) {
            completed_elem.innerText = 'done';
        } else {
            completed_elem.innerText = 'not done';
        }

        card.style.backgroundColor = completed == true ? 'green' : 'grey';

        card.append(title_elem, completed_elem);
        cards_container.append(card);
    });
}