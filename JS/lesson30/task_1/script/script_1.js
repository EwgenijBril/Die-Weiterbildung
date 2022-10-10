// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json_data => console.log(json_data))

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(json => console.log(json))


// fetch('https://reqres.in/api/users?page=1')
// .then(resp => resp.json())
// .then(json => console.log(json.data))


const cards_container = document.querySelector('.cards_container');

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(resp => resp.json())
.then(json => render(json))


const render = (json) => {
    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const user_name_elem = document.createElement('p');
    const phone_elem = document.createElement('p');

    name_elem.innerText = `Name: ${json.name}`
    user_name_elem.innerText = `Username: ${json.username}`
    phone_elem.innerText = `Phone: ${json.phone}`

    card.append(name_elem, user_name_elem, phone_elem);
    cards_container.append(card);
}