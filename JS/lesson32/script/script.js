const cards_container = document.querySelector('.cards_container');

fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(json => render(json.data))

//json.data => data_array (переменная, может быть любое название)

const render = (data_array) => {
    data_array.forEach(({first_name, email, avatar }) => {
        const card = document.createElement('div');
        const avatar_elem = document.createElement('img');
        const firstname_elem = document.createElement('p');
        const email_elem = document.createElement('a');

        firstname_elem.innerText = first_name;
        email_elem.innerText = email;

        card.classList.add('card');

        avatar_elem.src = avatar;
        avatar_elem.setAttribute('src', avatar);
        email_elem.href = `mailto: ${email}`;

        card.append(avatar_elem, firstname_elem, email_elem);
        cards_container.append(card);
    })

}