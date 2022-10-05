const incr_btn = document.querySelector('.incr_btn');
let btn_params = 30;

const incr_btn_render = (params) => {
    incr_btn.style.width = params + 'px';
    incr_btn.style.height = params + 'px';
}

incr_btn_render(btn_params);


incr_btn.addEventListener('click', () => {
    btn_params += 10;
    incr_btn_render(btn_params);
});


const photos = [
    'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
    'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
    'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
]

const img_slider_1 = document.querySelector('.img_slider_1');
const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');

let photoIndex_1 = 0;

right_btn.addEventListener('click', () => img_slider_1.src = photos[++photoIndex_1 % photos.length]);

left_btn.addEventListener('click', () => {
    if (photoIndex_1 === 0 ) {
        photoIndex_1 = photos.length
    }

    img_slider_1.src = photos[--photoIndex_1 % photos.length]

});

