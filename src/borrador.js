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

function ocurrencias(word) {
    let arr = [...word];
    let foundLetter;
    let timesFound = [];
    let numberOfTimes;
    for(i = 0; i < arr.length; i++) {
        let foundLetter = arr.lastIndexOf(arr[i]);
        console.log(foundLetter);
    }
    // console.log(arr);
}
ocurrencias("mortimer");