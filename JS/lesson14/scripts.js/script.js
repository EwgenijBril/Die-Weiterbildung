// let lst = [12, 4, 23, 45, 423]
// console.log(lst[3]);

// let user = {
//     name: 'Anatolij',
//     lastName: 'Yshacov',
//     age: 28,
//     salary: 130000
// };

// // console.log(user.lastName);

// user.lastName = 'Culicov';
// user.id = 1;

// console.log(user);
// delete user.salary;
// console.log(user);

// создать объект product со свойствами id, title и price

// увеличить стоимость на 20 процентов
// добавить свойство description с каким-то описанием
// вывести объект

// let product = {
//     id: 1,
//     title: 'banane',
//     price: 25
// };

// product.price  *= 1.2;

// product.description = 'aktiv';

// console.log(product);

// const products = [
//     {
//         id: 1,
//         title: 'Rad',
//         price: 55000
//     },
//     {
//         id: 2,
//         title: 'Tisch',
//         price: 10000
//     },
//     {
//         id: 2,
//         title: 'Lampe',
//         price: 15000
//     }
// ];

// console.log(products);

// используя forEach вывести каждый объект отдельно

// products.forEach(elem => console.log(elem));

// вывести при помощи forEach только названия продуктов

// products.forEach(elem => console.log(elem.title));

// сформировать новый массив, который состоит только из тех товаров, цена на которые больше 12000
// выести получившийся массив

// let newArr = products.filter(elem => elem.price > 12000)
//                     .map(elem => elem.title)
// console.log(newArr);

// найти общую сумму стоимостей товаров


// let ProdSum = products.reduce((totale, elem) => totale + elem.price, 0);
// console.log(ProdSum);


// реализомать новый массив, в котором будут поля
// id, name, order_total

const customers = [
    {
        id: 1,
        name: 'Максим',
        orders: [10000, 23000, 19000]
    },
    {
        id: 2,
        name: 'Олег',
        orders: [12000, 43000, 9000]
    },
    {
        id: 3,
        name: 'Ольга',
        orders: [22000, 44000, 6000]
    },
    {
        id: 4,
        name: 'Семен',
        orders: [32000, 65000, 11000]
    }
];

let newArr = customers.map(cust => {
    return {
        id: cust. id,
        name: cust.name,
        orderTotal: cust.orders.reduce((prev, value) => prev + value)
    }
});
console.log(newArr);

