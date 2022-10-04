let products = [
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

// function create_delete_button () {
//     const button = document.createElement('button');
//     button.innerText = 'X';
//     button.classList.add('delete-btn');
//     return button;
// }

function create_delete_button () {
    const button = document.createElement('button');
    button.innerText = 'X';
    button.classList.add('delete-btn');
    return button
}

// создать функцию emptyList которая возвращает параграф с текстом "Товаров нет."

function emptyList () {
    const p_elem = document.createElement('p');
    p_elem.innerText = 'Hier sind keine Ware.';
    return p_elem;
}

function create_products (id, title, price) {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const delete_btn = create_delete_button();

    delete_btn.addEventListener('click', () => delete_product(id));

    title_p.innerText = title;
    price_p.innerText = price;

    container.append(title_p, price_p, delete_btn);

    container.classList.add('product-item');

    product_container.addEventListener('click', event => {
        event.target.classList.add('active');
    });

    return container
}


// создать еще один div и залить в него карточки с продуктами
// этот div добавить в #root

function render () {
    product_container.innerText = '';

    if(products.length === 0) {
        product_container.append(emptyList());
    } else {
        products.forEach(product => {
        const product_element = create_products(product.id, product.title, product.price);
        product_container.append(product_element);
        });
    }
    
}

// внешнему div элементу добавьте класс product-container
// div элементу, который является карточкой, присвойте класс product-item


// написать функцию, которая получает id товара и удаляет его из массива


function delete_product(id) {
    products = products.filter((product) => product.id !== id);
    render();
}

render();


// 1) создать переменную с ссылкой на форму
const add_form = document.querySelector('#add_form');

// 2) повесить обработчик submit на форму add_form и при отправке формы выводить
// что-нибудь в консоль
add_form.addEventListener('submit', event => {
    event.preventDefault();

    const input_title = event.target.title;
    const input_price = event.target.price;

    const new_product = {
        id: Date.now(),
        title: input_title.value,
        price: input_price.value
    }

    products.push(new_product);
    render();

    input_title.value = '';
    input_price.value = '';
});

// повесить на карточки обработку события click и выводить какой-нибудь 
// текст в консоль

