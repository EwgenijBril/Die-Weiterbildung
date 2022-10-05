// Вывести текст, введенный в инпут, в консоль
const btn = document.querySelector('.show_text_btn');
const input = document.querySelector('.show_text_input');

btn.addEventListener('click', () => console.log(input.value));


//Поменять текст в инпуте с ??? на !!!

const btn2 = document.querySelector('.change_text_btn');
const input2 = document.querySelector('.change_text_input');

btn2.addEventListener('click', () => input2.value = '!!!');
    

//Поменять цвет фона на черный

const btn3 = document.querySelector('.click_btn')

btn3.addEventListener('click', () => document.body.style.backgroundColor = 'black');


const change_btn4 = document.querySelector('.change_mode')

// change_btn4.addEventListener('click', () => document.body.classList.toggle('black_mode'));


// classList.add('class') //добавляет класс
// classList.remove('class') // удаляет класс
// classList.toggle('class') // удаляет класс, если он есть. добавляет класс, если его нет


change_btn4.addEventListener('click', () => {
    const backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    document.body.style.backgroundColor = backgroundColor;
})


const random_color_btn = document.querySelector('.random_color_btn');

const get_rendom_num = () => Math.round(Math.random() * 255)

random_color_btn.addEventListener('click', (event) => event.target.style.backgroundColor = `rgb(${get_rendom_num()}, ${get_rendom_num()}, ${get_rendom_num()})`);


//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255


//Менять цвет фон на случайный

const random_mode_2 = document.querySelector('.random_mode_2');

const get_rendom_num_2 = () => Math.round(Math.random() * 255)

random_mode_2.addEventListener('click', () => document.body.style.backgroundColor = `rgb(${get_rendom_num_2()}, ${get_rendom_num_2()}, ${get_rendom_num_2()})`);


//Менять содержимое инпута на значение из массива

const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');
const symbols = ['...', '!!!', '+++'];
let symbols_idex = 0;

change_btn.addEventListener('click', () => change_input.value = symbols[symbols_idex++ % symbols.length])

// symbols_idex++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0



//Создать слайдер с фотографиями из массива


const photos = [
    'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
    'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
    'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
]

let photo_index = 0;
const img_slider = document.querySelector('.img_slider');

img_slider.addEventListener('click', event => event.target.src = photos[photo_index++ % photos.length]);


//Создать генератор бросаемых костей

const game_btn = document.querySelector('.game_btn');
const game_result = document.querySelector('.game_result');

const get_num = () => Math.round(Math.random() * 5 + 1);

//Math.random() => дробное от 0 до 1
//Math.random() * 5 => дробное от 0 до 5
//Math.random() * 5 + 1 => дробное от 1 до 6
//Math.round(Math.random() * 5 + 1) => целое от 1 до 6


game_btn.addEventListener('click', () =>  game_result.innerText = `${get_num()} X ${get_num()}`);


// Создать описанный в форме элемент

const add_form = document.querySelector('.add_form');
const form_result = document.querySelector('.form_result');

add_form.addEventListener('submit', event => {
    event.preventDefault();
    const { type, content, color } = event.target;

    form_result.innerText = '';

    const elem = document.createElement(type.value);
    elem.innerText = content.value;
    elem.style.color = color.value;

    form_result.append(elem);

    type.value = '';
    content.value = '';
    color.value = '';
})
