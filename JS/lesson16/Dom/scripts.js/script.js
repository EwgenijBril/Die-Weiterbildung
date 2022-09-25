
const header = document.querySelector('h2');
const poragrof = document.querySelector('#par');
const container = document.querySelector('.container');


// console.log(header);
// console.log(poragrof);

header.style.color = 'red';
poragrof.style.backgroundColor = 'green';

header.classList.add('class_added');
header.classList.remove('class_deleted');

const text = document.createElement('p');
text.innerText = 'Ich bin hier';

const divElem = document.createElement('div');
divElem.innerText = 'Text ist hier';


container.append(text, divElem);