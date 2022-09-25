// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.


const root = document.querySelector('.root');

root.style.width = '300px';
root.style.backgroundColor = 'grey';
root.style.border = '1px solid black';
root.style.borderRadius = '10px';
root.style.padding = '50px';
root.style.margin = '25px';

const card = document.createElement('div');

const text = document.createElement('h1');
text.innerText = 'Car: BMW-X1';
text.style.padding = '10px';

const article = document.createElement('i');
article.innerText = 'N-3546';
article.style.padding = '10px';

const price = document.createElement('p');
price.innerText = '25 599 EUR';
price.style.padding = '10px';

card.append(text, article, price);
root.append(card);


