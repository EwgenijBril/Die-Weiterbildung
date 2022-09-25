const root_elem = document.querySelector('.root');

const card = document.createElement('div');
const id_elem = document.createElement('p');
const first_name_elem = document.createElement('p');
const last_name_elem = document.createElement('p');
const age_elem = document.createElement('p');
const img_elem = document.createElement('img');
const email_elem = document.createElement('a');
const salary_elem = document.createElement('p');

id_elem.innerText = 'ID: 1'
first_name_elem.innerText = 'First name: Elena';
last_name_elem.innerText = 'Lanst name: Bril';
age_elem.innerText = 'Age: 18';
email_elem.innerText = 'example@mail.com';
salary_elem.innerText= 'Salary: 1500';

card.classList.add('card');
img_elem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg');
img_elem.setAttribute('alt', 'poto')
email_elem.setAttribute('href', 'mailto: example@mail.com');

card.append(id_elem, first_name_elem, last_name_elem, age_elem, salary_elem, email_elem, img_elem);
root_elem.append(card);

