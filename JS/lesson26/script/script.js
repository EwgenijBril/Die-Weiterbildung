const workers_form = document.querySelector('.workers_form');
const card_container = document.querySelector('.card_container');
let card_info = [];


// 2. из массива card_info достаем данные и рендерим из них карточки
const render = () => {
    card_container.innerText = '';
    card_info.forEach(({firstname, lastname, email, photo, progress}) => {
        const card = document.createElement('div');
        const name_elem = document.createElement('p');
        const email_elem = document.createElement('a');
        const photo_elem = document.createElement('img');
        const progress_elem = document.createElement('div');
        const progress_line = document.createElement('div');
        const progress_value = document.createElement('p');

        name_elem.innerText = `Name: ${firstname} ${lastname}`;
        email_elem.innerText = email;
        email_elem.href = `mailto: ${email}`;
        progress_value.innerText = progress + '%';
    
        photo_elem.setAttribute('src', photo);
        photo_elem.setAttribute('alt', 'photo');
    
        card.classList.add('card');
        progress_elem.classList.add('progress_elem');
        progress_line.classList.add('progress_line');
        progress_value.classList.add('progress_value');
        photo_elem.classList.add('photo');
    
        progress_line.style.width = progress + '%';
    
        if(progress <= 20) {
            progress_line.style.backgroundColor = 'red';
        } else if (progress <= 50) {
            progress_line.style.backgroundColor = 'yellow';
        } else {
            progress_line.style.backgroundColor = 'green';
        }
    
        progress_elem.append(progress_line, progress_value);
        card.append(name_elem, email_elem, photo_elem, progress_elem);
        card_container.append(card);
    });
};



// const render = ({firstname, lastname, email, photo, progress}) => {
//     const card = document.createElement('div');
//     const name_elem = document.createElement('p');
//     const email_elem = document.createElement('a');
//     const photo_elem = document.createElement('img');
//     const progress_elem = document.createElement('div');
//     const progress_line = document.createElement('div');
//     const progress_value = document.createElement('p');

//     name_elem.innerText = `Name: ${firstname} ${lastname}`;
//     email_elem.innerText = email;
//     email_elem.href = `mailto: ${email}`;
//     progress_value.innerText = progress + '%';
    
//     photo_elem.setAttribute('src', photo);
//     photo_elem.setAttribute('alt', 'photo');
    
//     card.classList.add('card');
//     progress_elem.classList.add('progress_elem');
//     progress_line.classList.add('progress_line');
//     progress_value.classList.add('progress_value');
//     photo_elem.classList.add('photo');
    
//     progress_line.style.width = progress + '%';
    
//     if(progress <= 20) {
//         progress_line.style.backgroundColor = 'red';
//     } else if (progress <= 50) {
//         progress_line.style.backgroundColor = 'yellow';
//     } else {
//         progress_line.style.backgroundColor = 'green';
//     }
    
//     progress_elem.append(progress_line, progress_value);
//     card.append(name_elem, email_elem, photo_elem, progress_elem);
//     card_container.append(card);

// };


//1. при отправке формы данные записываются в массив cards_info в виде объектов
workers_form.addEventListener('submit', event => {
    event.preventDefault();

    const {first_name, last_name, email, photo, progress} = event.target;

    card_info.push({
        firstname: first_name.value,
        lastname: last_name.value,
        email: email.value,
        photo: photo.value,
        progress: progress.value
    });

    first_name.value = '';
    last_name.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';

    render();
    // render(card_info[card_info.length -1]);
});




