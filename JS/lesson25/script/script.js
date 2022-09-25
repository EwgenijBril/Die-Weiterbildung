const form = document.querySelector('#add_product_form');
const product = document.querySelector('#product');

// создать функцию getCard, которая в качестве вргументов получает title и price 
// и возвращает div с указанными внутри title и price

function getCard(title, price) {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    title_p.innerText = title;
    price_p.innerText = price;
    container.append(title, price);
    return container;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const {title, price} = event.target;

    const card = getCard(title.value, price.value);
    product.append(card);

    // console.log(title.value, price.value);
});



