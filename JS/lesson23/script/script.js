// 1) создать параграф
// 2) записать в него текст
// 3) добавить его в root

const root_elem = document.querySelector('#root');

// const p_elem = document.createElement('p');
// p_elem.innerText = 'Hello';

// root_elem.append(p_elem);

// создать массив из текстов (минимум 3 элемента)
// для каждого элемента создать параграф и записать в него текст
// параграфы необходимо добавить в root элемент


const words = ['rad', 'auto', 'wasser']
   


words.forEach(word => {
    const p_elem = document.createElement('p');
    p_elem.classList.add('card');
    p_elem.innerText = word;
    root_elem.append(p_elem);

    p_elem.addEventListener('click', () => console.log(word));

    p_elem.addEventListener('click', event => {
        event.target.classList.toggle('active');
    });

});

// повесить обработчик события клика на параграфы 
// при клике на параграф в консоль должно выводиться слово


// по нажатию на параграф ему должен присваиваться 
// класс active

// преобразовать процесс таким образом, чтобы по нажатию на 
// p_elem active добавлялся, если его нет и удалялся, если он есть
