console.log("HELLO WORLD BORRADOR");

//DIFERENTES PRUEBAS
// let dividendo1 = 3;
// function prueba(dividendo) {
//     for (let i = 3; i <= 5; i++) {
//         dividendo++;
//         console.log(dividendo);
//     }
// }
// prueba(dividendo1);

const e = require("express");


// function boolean(a) {
//         let operacion = 
//         if ( a / a == 1) {
//             return true;
//         }
// }
// boolean(2);


//divide and conquer para algorito de mi numeros primos.

// let numeroA = 2;

// if (numeroA % numeroA == 0) {
//     let significa = "puede ser primo";
//     console.log(significa);
// }

// if (numeroA % 1 == 0) {
//     let significa = "puede ser primo";
//     console.log(significa);
// }

// if (numeroA % "3 o más" == "da un residuo de 0") {
//     let significa = "puede ser primo";
//     console.log(significa);
// }

// function primo(n) {
//     let divididoPorElmismo = true;
//     let divididoPor1 = true;
//     let divididoPorMasNumeros = true;
//     for (let i = 2; i <= n; i++) {
//         if (i % i == 0) {
//             return divididoPorElmismo;
//         }
//     };
//     for (let i = 2; i <= n; i++) {
//         if (i % 1 == 0) {
//             return divididoPor1;
//         }
//     };
//     let mas = 2;
//     for (let i = 2; i <= n; i++) {
//         mas++;
//         if (i % mas == 0) {
//             return divididoPorMasNumeros;
//         }
//     };

// }
// primo(7);

// function primo1(n1) {
//         let divididoPorElmismo = true;
//         let divididoPor1 = true;
//         let divididoPorMasNumeros = true;
//         for (let i = 2; i <= n; i++) {
//             if (i % i == 0) {
//                 for (let i = 2; i <= n; i++) {
//                     if (i % 1 == 0) {
//                         let mas = 2;
//                         for (let i = 2; i <= n; i++) {
//                             mas++;
//                             if (i % mas == 0) {
//                                 return divididoPorMasNumeros;
//                             }
//                         };
//                     }
//                 };
//             }
//         };
// }

// function primo3(n3) {
//     let mas = 2;
//     for(let i = 2; i <= n3; i++) {
//         mas++;
//         if (i % mas == 0) {
//             console.log("no es primo");
//         } else {
//             console.log("aquí ando");
//         }
//     }
// }
// primo3(5);
let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: false},
    {id: 3, activo: false},
];

// let every = usuarios.every(u => {
//     console.log(`Está activo ${u.id}`);
//     return u.activo;
// });

// console.log(every);


// let algunoActivo = usuarios.some(u => {
//     console.log(u.id);
//     return u.activo;
// })

// // console.log(algunoActivo);


// const usuarios1 = [
//     {edad: 14, name: "Chobe"},
//     {edad: 28, name: "Andrea"},
//     {edad: 60, name: "Grace"},
//     {edad: 17, name: "Kevin"}
// ];

// let mayores = usuarios1.filter(u => u.edad > 17);
// // console.log(mayores);

// const lista = usuarios1.map(u => u.name);
// console.log(lista);

// function palindromo(x) {
//     let string = x.toString();
//     let arr = [...string];
//     let inicio = arr[0];
//     let final = arr[arr.length - 1];
//     while (inicio < final) {
//         if (inicio == final) {
//             console.log(inicio, final);
//             inicio++;
//             final--;
//         } else {
//             console.log(inicio, final);
//             return false;
//         }
//     }
//     return true;
// }
// palindromo(121);


// let array = [0, 1];
// let length = array.length;
// console.log(length);

// function ocurrencias(word) {
//     let arr = [...word];
//     let foundLetter;
//     let timesFound = [];
//     let numberOfTimes;
//     for(i = 0; i < arr.length; i++) {
//         let foundLetter = arr.lastIndexOf(arr[i]);
//         console.log(foundLetter);
//     }
//     // console.log(arr);
// }
// ocurrencias("mortimer");+


// let arr = [1, 2, 3, 4];
// let suma = arr.reduce((acc, el) => {
//     return acc + el;
// }, 0);
// console.log(suma);

// let negativo = -1;
// if (negativo < 0) {
//     console.log("si es negativo");
// }

//media
// function media(arr) {
//     let sortArr = arr.sort();
//     let sum = sortArr.reduce((acc, el) => {
//         return acc + el;
//     }, 0);

//     if (sortArr.length % 2 == 0) {
        
//         console.log("par");
//     } else {
//         let arrLen = sortArr.length - 1;
//         let mediaI = arrLen / 2;
//         let media = sum / mediaI;
//         console.log(media);
//     }
//     console.log(sum);
// }
// media([1, 2, 3]);


// let nums = [2, 7, 11, 15];
// let target = 9;

// for (i = 0; i < nums.length; i++) {
//     if (nums[i] < target) {
//         map.set(nums[i]);
//     }
// }
// map.set("nums[i] + nums[i]", 10);
// console.log(map.size);
// console.log(map.get("nums[i] + nums[i]"));

// const map = new Map();
// map.set(1);
// map.set(2);
// map.set(3);

// console.log(map.has(2));

// const map1 = new Map();
// map1.set(2, 0);
// console.log(map1.size);
// console.log(map1.get(2));

// let integer = 121;
// let iterable = integer.toString();
// let array1 = [...iterable];
// console.log(array1);

// let string = "hola";
// let array2 = [...string];
// console.log(array2);

// let array3 = Array.from(string);
// console.log(array3);

console.log(false && false);