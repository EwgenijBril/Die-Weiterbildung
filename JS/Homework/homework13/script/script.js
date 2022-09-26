const workers_form = document.querySelector('.workers_form');
const card_container = document.querySelector('.card_container');

workers_form.addEventListener('submit', event => {
    event.preventDefault();

    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const email_elem = document.createElement('a');
    const photo_elem = document.createElement('img');
    const progress_elem = document.createElement('div');
    const progress_line = document.createElement('div');
    const progress_value = document.createElement('p');

    const {first_name, last_name, email, photo, progress} = event.target;

    name_elem.innerText = `Name: ${first_name.value} ${last_name.value}`;
    email_elem.innerText = email.value;
    email_elem.href = `mailto: ${email.value}`;
    progress_value.innerText = progress.value + '%';

    photo_elem.setAttribute('src', photo.value);
    photo_elem.setAttribute('alt', 'photo');


    card.classList.add('card');
    progress_elem.classList.add('progress_elem');
    progress_line.classList.add('progress_line');
    progress_value.classList.add('progress_value');

    progress_line.style.width = progress.value + '%';

    if(progress.value <= 20) {
        progress_line.style.backgroundColor = 'red';
    } else if (progress.value <= 50) {
        progress_line.style.backgroundColor = 'yellow';
    } else {
        progress_line.style.backgroundColor = 'green';
    }


    progress_elem.append(progress_line, progress_value);
    card.append(name_elem, email_elem, photo_elem, progress_elem);
    card_container.append(card);

    first_name.value = '';
    last_name.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';
});