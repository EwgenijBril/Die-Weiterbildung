// const square = document.querySelector('.square');
// const container = document.querySelector('.container')

// square.addEventListener('click', () => container.innerText = 'Hello');


const btn = document.querySelector('.btn');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    const text = document.createElement('p');
    text.innerText = 'hello';
    text.classList.add('text');
    text.style.color = 'blue';
    container.append(text);
});