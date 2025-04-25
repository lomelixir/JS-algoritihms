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
// contarCeros(array);



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
// sumarParejas(9, 6, 3);



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
// sumarPares();



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
// dividir(24, 2);



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