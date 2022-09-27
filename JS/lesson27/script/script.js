const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },

    {
        id: 2,
        title: 'ролики',
        price: 15000
    },

    {
        id: 3,
        title: 'самокат',
        price: 12000
    },

    {
        id: 4,
        title: 'лыжи',
        price: 23000
    },

    {
        id: 5,
        title: 'сноуборд',
        price: 20000
    },
];

const root_elem = document.querySelector('#root');
const product_container = document.createElement('div');
product_container.classList.add('product-container');
root_elem.append(product_container);


// создать функцию, которая на вход получает title и price и возвращает
/*
    <div>
        <p>сноуборд</p>
        <p>20000</p>
    </div>
*/


function create_products (title, price) {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');

    title_p.innerText = title;
    price_p.innerText = price;

    container.append(title_p, price_p);

    container.classList.add('product-item');

    return container
}


// создать еще один div и залить в него карточки с продуктами
// этот div добавить в #root

function render () {
    product_container.innerText = '';
    products.forEach(product => {
        const product_element = create_products(product.title, product.price);
        product_container.append(product_element);
    });
}




// внешнему div элементу добавьте класс product-container
// div элементу, который является карточкой, присвойте класс product-item


// написать функцию, которая получает id товара и удаляет его из массива

function delete_id (id) {
    products = products.filter(product => product.id !==id);
    render();
}

render();
