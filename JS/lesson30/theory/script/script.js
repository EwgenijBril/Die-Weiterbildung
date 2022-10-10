//let a = 10;

// setTimeout(() => {
//     a = 34;
//     console.log(a);

// }, 2000);

// console.log(a);


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve(a = 34); 
//     }, 2000)
// })

// promise.then(() => console.log(a));

const random_num = new Promise ((resolve, reject) => {
    let a = Math.random();
    if (a >= 0.5) {
        resolve(a)
    } else {
        reject(a)
    }
});

random_num.then(
    (value) => console.log(`${value} >= 0.5`),
    (value) => console.log(`${value} < 0.5`)
);
