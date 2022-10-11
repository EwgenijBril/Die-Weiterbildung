


// написать функцию, которая получает в качестве аргумента объект с данными пользователя 
// и возвращает div с картинкой, именем и почтой пользователя



// const user = {
//     data: {
//         avatar: "https://reqres.in/img/faces/1-image.jpg",
//         email: "george.bluth@reqres.in",
//         first_name: "George"
//     }
// }

const root = document.querySelector('#root');

function add_user(user) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const p = document.createElement('p');

    img.src = user.data.avatar;
    a.innerText = user.data.email;
    a.href = `mailto: ${user.data.email}`;
    p.innerText = user.data.first_name;

    card.append(img, a, p);
    root.append(card);
}




function get_user(user_id) {
    fetch(`https://reqres.in/api/users/${user_id}`)
    .then(
        resp => resp.json(),
        err => console.log(err)
    )
    .then(
        resp => add_user(resp),
        err => console.log(err)
    );
}
    