console.log("HELLO WORLD");

//1.-Imprimir la cantidad de ceros en un array
const array = [5, 6, 8, 0, 2, 3, 4, 1, 0, 0, 0, 7, 0];

function contarCeros(array) {
    let totalCeros = 0;
    for(i = 0; i <= array.length; i++) {
        if(array[i] === 0) {
            totalCeros++; // totalCeros = totalCeros + 1;
        }
    }
    console.log(totalCeros);
}
// contarCeros(array); //CORRECTO



//2.-Determinar si la suma de una pareja de números el es igual al 3er número. 
function sumarParejas(A, B, C) {
    if(A + B == C) {
        console.log("IGUALES con A + B");
    }
    if(B + C == A) {
        console.log("IGUALES con B + C");
    }
    if(A + C == B) {
        console.log("IGUALES con A + C");
    }
    else {
        console.log("DISTINTOS con las otras operaciones");
    }
}
// sumarParejas(9, 6, 3); //CORRECTO



//3.-Sumar números pares comprendidos entre 2 y 100; 
function sumarPares() {
    let suma = 2;
    let numero = 4;
    while(numero <= 100) { //while funciona como loop, que se repite hasta ser false.
        suma = suma + numero;
        numero = numero + 2;
    }
    console.log(suma);
}
// sumarPares(); //CORRECTO



//4.- Suma, resta, multiplicación y división de 2 números enteros.
function suma(num1, num2) {
    let total = num1 + num2;
    console.log(total);
}
// suma(2, 3);

function resta(num1, num2) {
    let total = num1 - num2;
    console.log(total);
}
// resta(19, 6);

function multi(num1, num2) {
    let total = num1 * num2;
    console.log(total);
}
// multi(34, 78);

function dividir(num1, num2) {
    let total = num1/num2;
    console.log(total);
}
// dividir(24, 2); //CORRECTOS



//5.- Determinar el máximo común divisor (mcd) mediante el algoritmo de Euclides. 
function mcd(num1, num2) {
    let residuo = 0;
    let operacion = 0;
    let divisor = num2;
    if(num1 > num2) {
        residuo = num1 % num2;
        if(residuo === 0) {
            console.log("existe mcd")
        } else {
            console.log("no existe mcd")
        }
    } else {
        console.log("num1 debe ser mayor a num2");
    }
}
// mcd(4855, 1058); //NO ME SALIÓ ESTÁ PERRO



//6.- Imprimir números distintos de cero.
const numeros = [5, 6, 3, 0, 0, 7, 5, 1, 2, 3, 4, 0];

function numerosDistintosCero(array) {
    for(i = 0; i <= array.length; i++) {
        if(array[i] != 0) {
            console.log(array[i]);
        }
    }
}
// numerosDistintosCero(numeros); //imprime undefined.



//7.- Visualizar y sumar la serie de números 3, 6, 9, 12 .... 99.
function sumaTres() {
    let suma = 3;
    let numero = 3;
    while(numero <= 99) {
        suma = suma + numero;
        numero = numero + 3;
        console.log(suma);
    }
}
// sumaTres(); //NO IMPRIME EL NUMERO 9



//8.- Leer 4 números y visualizar el mayor de los cuatro. Método por array.
const cuatroNumeros = [5, 3, 9, 8];

function mayor(array) {
    let primero = array[0];
    let esMayor = 0;
    if(primero > array[1]) {
        for(i = 2; i <= array.length; i++) {

        }
    } else {
        for(i = 3; i <= array.length; i++) {
            console.log("ahora por aquí");
        }
    }
    console.log(`El número ${esMayor} es el mayor de los cuatro.`);
}
// mayor(cuatroNumeros);


// function mayor1(array) {
//     let primerIndice = array[0];
//     let segundoIndice = array[1];
//     if(primerIndice > segundoIndice) {
//         console.log("ando aquí");
//             if(primerIndice > array[2]) {
//                 console.log("primer indice es mayor 3er índice");
//             } else {
//                 for(i = 3; i <= array.length; i++) {
//                     if (array[2] > array[3]) {
//                         console.log(`el número ${array[2]} es mayor`);
//                     } else {
//                         console.log(`el número ${array[3]} es mayor`)
//                     }
//                 }
//             }
//     }
// }
// mayor1(cuatroNumeros);

// function mayor2(array) {
//     let primerIndice = array[0];
//     let segundoIndice = array[1];
//     for(i = 2; i < array[0]; i++ ) {
//         if(array[i] > array[0]) {
//             console.log("indice 2 mayor a indice 0 y 1");
//         }
//     }
// }
// mayor2(cuatroNumeros);

function mayor3(array) {
    let primero = array[0];
    let mayor = 0;
    for(i = 0; i <= array.length; i++) {
        mayor = array[i];
        if(mayor > array[i]) {
        }
    }
    
}
// mayor3(cuatroNumeros);



//9.- Tamaño máximo de carga
let tamaño = 6;
let tamañoMax = 5;

function tamañoArchivo(archivo) {
    if (archivo <= tamañoMax) {
        console.log("El archivo cumple con el tamaño permitido");
    } else {
        console.log("EL archivo ha excedido el tamaño máximo permitdo");
    }
}
// tamañoArchivos(tamaño); //CORRECTO

//9.1.- Tamaño máximo de carga con varios archivos.
let archivos = [1, 2, 3, 4, 5, 6];

function tamañoArchivos(tamaños) {
    for (let arch of tamaños) {
        if (arch <= 5) {
            console.log(`El archivo ${arch} cumple con el tamaño permitido`);
        } else {
            console.log("EL archivo ha excedido el tamaño máximo permitdo");
        }
    }
}
// tamañoArchivos(archivos); //CORRECTO



//10.- Contraseña más segura
const password1 = "micontra123";
const passwordLength = 12;

function passwordSecurity(password) {
    if (password.length <= passwordLength) {
        console.log(`Constraseña ACEPTADA. Número de caracteres ${password.length}`);
    } else {
        console.log(`Constraseña RECHAZADA. Número de caracteres ${password.length}`);
    }
}
// passwordSecurity(password1); //CORRECTO



//11.- Pasos para utilizar un calentador de agua elećtrico. Utilizando for-loop
const tempInicial = 0;
let encendido = false;

function calentador(agua) {
    if (agua === true) {
        encendido = true;
        console.log(`Calentador encendido. ${encendido}`)
        for (let i = tempInicial; i <= 100; i = i+25) {
            console.log(`Calentando agua. Temperatura de ${i} grados.`);
        }
        console.log(`Temperatura máxima. Calentador apagado. ${!encendido}`);
    } else {
        console.log(`Calentador sin agua. No puede encender. ${encendido}`)
    }
}
// calentador(true); //CORRECTO



//12.- Batería portátil
let potencia;

function bateria(dispositivo) {
    if (dispositivo === "telefono") {
        potencia = 25;
        console.log(`Potencia de ${potencia} Watts.`);
    }
    else if (dispositivo === "celular") {
        potencia = 25;
        console.log(`Potencia de ${potencia} Watts.`);
    }
    else if (dispositivo === "laptop") {
        potencia = 65;
        console.log(`Potencia de ${potencia} Watts.`);
    } 
    else if (dispositivo === "lampara") {
        potencia = 5;
        console.log(`Potencia de ${potencia} Watts."`);
    } 
    else {
        potencia = 0;
        console.log(`Potencia de ${potencia} Watts.`);
    }
}
// bateria("telefono"); //CORRECTO

//12.1.- Batería portátil utilizando switch.
let potencia1;

function bateria1(dispo) {
    switch (dispo) {
        case "telefono":
            potencia1 = 25;
            console.log(`Potencia de ${potencia1} Watts.`);
            break;
        case "celular":
            potencia1 = 25;
            console.log(`Potencia de ${potencia1} Watts.`);
            break;
        case "laptop":
            potencia1 = 65;
            console.log(`Potencia de ${potencia1} Watts.`);
            break;
        case "lampara":
            potencia1 = 5;
            console.log(`Potencia de ${potencia1} Watts.`);
            break;
        default:
            potencia1 = 0;
            console.log(`Dispositivo no reconocido. Potencia de ${potencia1} Watts.`);
    }
}
// bateria1("tele"); //CORRECTO



//13.- Molino de café 
let contenedor = true;
let tiempo = 50;

function molino(contenedor1, tazas) {
    if (contenedor1 === true) {
        if (tazas > 0) {
            tiempo *= tazas;
            console.log(`Iniciando Proceso. ${tazas} tazas. ${tiempo} segundos.`)
        } else {
            console.log("No se ha seleccionado el número de tazas.");
        }
    } else {
        console.log("Nose puede encender. Falta contenedor.");
    }
}
// molino(true, 3); //CORRECTO



//14.- Préstamos
let tasa = 0;

function prestamo(cuenta, puntaje) {
    if (cuenta == true) {
        if (puntaje >= 750) {
            tasa = 10;
            console.log(`Préstamo aprobado. Tasa del ${tasa} %.`);
        } 
        else if (puntaje >= 700) {
            tasa = 15;
            console.log(`Préstamo aprobado. Tasa del ${tasa} %. Descuento del 10 % en préstamo.`)
        }
        else if (puntaje >= 650) {
            tasa = 10;
            console.log(`Préstamo aprobado. Tasa del ${tasa} %.`);
        }
    } else {
        console.log("Usuario no tiene cuenta.");
    }
}
// prestamo(true, 650); // CORRECTO    



//15.- Alimentador mascota
let comida;

function alimentador(mascota, peso) {
    switch (mascota) {
        case "perro": 
        if (peso >= 20) {
            comida = 400;
            console.log(`Cantidad de comida: ${comida} gramos.`)
        } else if (peso >= 10) {
            comida = 300;
            console.log(`Cantidad de comida: ${comida} gramos.`)
        } else if (peso >= 5) {
            comida = 200;
            console.log(`Cantidad de comida: ${comida} gramos.`)
        } else {
            comida = 100;
            console.log(`Cantidad de comida: ${comida} gramos.`)
        }
        break;
        case "gato":
            if (peso >= 6) {
                comida = 150;
                console.log(`Cantidad de comida: ${comida} gramos.`)
            } else if (peso >= 3) {
                comida = 100;
                console.log(`Cantidad de comida: ${comida} gramos.`)
            } else {
                comida = 50;
                console.log(`Cantidad de comida: ${comida} gramos.`)
            }
            break;
    }
}
// alimentador("gato", 2); //CORRECTO

