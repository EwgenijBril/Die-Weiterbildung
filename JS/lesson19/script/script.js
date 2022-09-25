const root = document.querySelector('#root');
// console.log(root);


// const div_elem = document.createElement('div');
// const img_elem = document.createElement('img');
// const text_elem = document.createElement('p');
// img_elem.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg'
// text_elem.innerText = 'Inhalt';
// // div_elem.innerText = 'Hello';
// // console.log(div_elem);
// root.append(div_elem);
// div_elem.append(img_elem, text_elem);

// div_elem.classList.add('card');

// root.append(div_elem);

// добавить div и 4 параграфа внутри него с каким-либо текстом
// созданный div должен быть помещен в #root

// const div_1 = document.createElement('div');
// const text_1 = document.createElement('p');
// const text_2 = document.createElement('p');
// const text_3 = document.createElement('p');
// const text_4 = document.createElement('p');

// text_1.innerText = 'Hello';
// text_2.innerText = 'Evgeny';
// text_3.innerText = 'Bril';
// text_4.innerText = '35 Jahr';

// div_1.append(text_1, text_2, text_3, text_4);
// root.append (div_1);

// const container = document.createElement('div')
// const texts = ['Hello', 'Evgeny', 'Bril', '35 Jahr'];

// texts.forEach (text => {
//     const p_elem = document.createElement('p');
//     p_elem.innerText = text;
//     container.append(p_elem)
// });

// root.append(container);

const container = document.createElement('div')
const texts = ['Hello', 'Evgeny', 'Bril', '35 Jahr'];

const p_list = texts.map(text => {
    const p_elem = document.createElement('p');
    p_elem.innerText = text;
    return p_elem
});

container.append(...p_list);
root.append(container);


