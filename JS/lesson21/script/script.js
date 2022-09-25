const data = [
    {
        id: 1,
        name: 'Antom',
        email: 'anton@mail.ru',
        avatar: 'media/face.jpeg'
    },

    {
        id: 2,
        name: 'Sergej',
        email: 'Sergej@mail.ru',
        avatar: 'media/face.jpeg'
    },

    {
        id: 3,
        name: 'Sveta',
        email: 'Sveta@mail.ru',
        avatar: 'media/face.jpeg'
    },

    {
        id: 4,
        name: 'Oleg',
        email: 'oleg@mail.ru',
        avatar: 'media/face.jpeg'
    },
];


const root = document.querySelector('#root');

function getCard(name, email, avatar) {
    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const email_elem = document.createElement('a');
    const avatar_elem = document.createElement('img');

    card.classList.add('card');

    email_elem.innerText = email;
    email_elem.href = 'mailto:' + email;
    name_elem.innerText = name;
    avatar_elem.src = avatar;
    card.append(avatar_elem, name_elem,email_elem);
    return card;
}

data.forEach(user => {
    const card = getCard(user.name, user.email, user.avatar);
    root.append(card);
});


// добавить почту (тег a) в котором внутри будет указана почта 
// и в качестве атрибута href
