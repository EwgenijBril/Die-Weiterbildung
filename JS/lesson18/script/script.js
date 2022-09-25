// querySelector метод, возвращающий элемент по селектору
// const main_p = document.querySelector('.main');
// console.log(main_p);

// querySelectorAll метод, возвращающий итерируемый объект (NodeList) по селектору
// const p_list = document.querySelectorAll('p');
// console.log(p_list);

// getElementsByClassName метод, возвращающий итерируемый объект 
// (HTMLCollection) по селектору
// const main_p = document.getElementsByClassName('main')[0];
// console.log(main_p);


// const prod_p = document.getElementsByClassName('products')[0].getElementsByTagName('p')[0];
// console.log(prod_p);

// const prod_p = document.querySelector('.products p');
// prod_p.innerText = 'Waren';
// console.log(prod_p);

// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p
// и при этом событии выполнится callback функция
// prod_p.addEventListener('click', () => {
//     prod_p.innerText = 'Waren';
// });


// 1) найти параграф с тектом "Важный текст" и заменить его на "Не такой уж и важный текст"


// const text = document.querySelector('.main p');
// text.innerText = "Не такой уж и важный текст";
// console.log(text);



// const text = document.querySelector('.media .fb  a');
// text.innerText = 'facebook';
// console.log(text);

// const point_1 = document.querySelector('.point_1');

// point_1.addEventListener('click', () => {
//     point_1.innerText = 'Ponit_1';
// });

// const main_elem = document.querySelector('.main'); 
// const random_color = () => {
//     const r = Math.round(Math.random() * 255);
//     const g = Math.round(Math.random() * 255);
//     const b = Math.round(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// main_elem.addEventListener('click', () => {
//     main_elem.style.color = random_color();
//     main_elem.style.bachgroundColor = random_color();
//     main_elem.style.padding = '20px';

// });

// реализовать функцию random_color, которая возвращает случайный цвет в формате rgb
// 'rgb(124, 23, 45)'


const main_elem = document.querySelector('.main');

main_elem.addEventListener('click', () => {
    const value = main_elem.innerText;
    main_elem.innerText = + value + 1;
})



// console.log(+ value + 1);