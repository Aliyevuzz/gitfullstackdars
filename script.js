// let counter = 0;


// let interval = setInterval(() => {
//     counter++;
//     console.log("interval ishladi ", counter);
// }, 100);

// setTimeout(() => {
//     clearInterval(interval);
//     console.log("interval to'xtadi");
// }, 9500);


// const data = [1, 2, 3, 4];

// const promise = new Promise((resolve, reject ) => {
//     setTimeout(()=> {
//         if (data) {
//             resolve(data);
//         }else{
//             reject("something wentr wrong");

//         }
//     },3000)
// })


// promise
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })

// const fruit = ['olma', 'banan', 'nok' ]

// const promise = new Promise ((resolve, reject) => {
//     if (fruit.length > 0) {
//         resolve(fruit)
//     }else {
//         reject('Sotuvda yoq')
//     }
// });

// promise
// .then((value)=>{
//     console.log(value);

//     return value.length;
// })

// .then((count)=> {
//     console.log('mevalar soni:', count);

//     return 'Tekshiruv tugadi'
// })

// .then((message)=> {
//     console.log(message)
// })

// .catch((error)=>{
//     console.log(error)
// });

// const products = ['olma', 'banan', 'shaftoli', 'nok', 'tarvuz'];

// const promise = new Promise ((resolve, reject) => {

//     if (products.length > 0){
//         resolve(products)
//     } else {
//         reject('Vaqtinchalik  mahsulot sotuvda yoq')
//     }
// });

// promise
// .then((value) => {
//     console.log(value);

//     return value.length;
// })
// .then((count) =>{
//     console.log('Ombordagi mahsulotlar soni: ',count);

//     return 'Mahsulotlar soni tekshirildi';
// })

// .then((message)=>{
//     console.log(message)
// })

// .catch((error)=>{
//     console.log(error)
// });\
// 
// const smartphones = ['Samsung', 'Iphone', 'xiaomi', 'Oppo', 'Realme'];

// const promise = new Promise ((resolve, reject) =>{
//     if (smartphones.length > 0){
//         resolve (smartphones)
//     }else {
//         reject ('Smartfonlar sotuvda yoq')
//     }
// });

// promise
// .then((value)=>{
//     console.log(value)

//     return value.length;
// })

// .then((count)=>{
//     console.log('Barcha smarfonlar soni:', count, 'ta');

//     return 'Bular barcha smartfonlar soni'
// })

// .then((message)=>{
//     console.log(message)
// })

// .catch((error)=>{
//     console.log(error)
// })


// console.log('boshlandi');

// setTimeout(()=>{
//     console.log('3 soniyadan keyin ishlaydi');
// },3000);

// console.log('Tugadi');


// console.log("Boshladi");

// setTimeout(() => {
//     console.log("3 soniya o'tdi");
// }, 3000);

// console.log("Tugadi");

// const data = [1 ,2, 3, 4, 5, ];

// const promise = new Promise ((resolve, reject)=>{
//     if (data.length > 0) {
//         resolve(data)
//     }else {
//         reject('Sana xato')
//     }
    
// });

// promise
// .then((value)=>{
//     console.log(value);

//     return value.length;
// })

// .then((count)=>{
//     console.log('Sana soni:', count, 'ta');

//     return 'sanalar tekshirilgan'
// })

// .then((message)=>{
//     console.log(message)
// })

// .catch((error)=>{
//     console.log(error)
// })

// console.log("A");

// setInterval(() => {
//     console.log("B");
// }, 2000);

// console.log("C");


// const promise1 = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 1 fullfiled');
//     },4000);
// });

// const promise2 = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 2 fullfiled');
//     },4000);
// });

// async function main (){
//     console.log('work 1');

//     const result1 = await promise1;
//     const result2 = await promise2;
//     const result3 = await promise2;

//     console.log(result1);
//     console.log(result2);
    
// };

// main()



// async function getProducts (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Promise 1 products fullfilled')

//         },2000);
//     });
// };
// async function getUsers (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Promise 2 Users fullfilled')

//         },2000);
//     });
// };
// async function getImages (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Promise 3 Images fullfilled')

//         },2000);
//     });
// };

// async function handlePromise (){
//     const promies = await Promise.all([getProducts(), getUsers(), getImages()]);
//     console.log(promies[0]);
//     console.log(promies[1]);
//     console.log(promies[2]);
// }

// handlePromise()

// const container = document.getElementById('users-container');

// async function fetchUsers(){
//     const response = await fetch('https://dummyjson.com/users');
//     const data
// }

// const promise1 = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 1 fullfiled');
//     },4000);
// });

// const promise2 = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 2 fullfilled');
//     },4000);
// });

// async function main (){
//     console.log('work 1');

//     const result1 = await promise1;
//     const result2 = await promise2;

//     console.log(result1);
//     console.log(result2);
// }

// main()


// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 2 yakunlandi');
//     },2000);
// });

// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 3 ham yakunlandi')
//     },2000);
// });

// async function main (){
//     console.log('work 1');

//     const result2 = await promise2;
//     const result3 = await promise3;

//     console.log(result2)
//     console.log(result3)
// }

// main()


async function getUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('promise 2 users fullfilled');
        },2000)
    });
}
async function getProducts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('promise 3 products fullfilled');
        },2000)
    });
}
async function getImages(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('promise 4 images fullfilled');
        },2000)
    });
}

async function handlePromise(){
    const promies = await  Promise.all([getUsers(), getProducts(), getImages()]);
    console.log(promies[0]);
    console.log(promies[1]);
    console.log(promies[2]);
}

handlePromise()