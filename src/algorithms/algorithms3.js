console.log("HELLO WORLD 3");

//1.- Calcular independiente la suma de los números pares e impares comprendidos entre 1 y 200.
function sumaParesImpares() {
    let numero = 1;
    let pares = [];
    let impares = [];

    while (numero <= 200) {
        if (numero % 2 == 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
        numero++;
    }
    let sumaPares = pares.reduce((acc, el) => {
        return acc + el;
    }, 0);
    let sumaImpares = impares.reduce((acc, el) => {
        return acc + el;
    }, 0);
    console.log(`La suma de los números pares es ${sumaPares}.`);
    console.log(`La suma de los números impares es ${sumaImpares}.`);
    
}
// sumaParesImpares(); //CORRECTO.



//2.- Calcular y visualizar la suma y el producto de los números pares comprendidos entre 20 y 40.
function sumaMultiplicacion() {
    let number = 20;
    let sum = 0;
    let mult = 1;
    while (number <= 40) {
        if (number % 2 == 0) {
            let numberSum = number; //también funciona sin esta variable. Utilizando solo number, en sum y mult. 
            sum = numberSum + sum;
            mult = numberSum * mult;
        }
        number++;
    }
    console.log(sum);
    console.log(mult);
}
// sumaMultiplicacion(); //CORRECTO.



//3.- Sumar los numeros pares del 2 al 100 e imprimir su valor. Utilizando la variable suma. 
function sumMethod() {
    let number = 2;
    let sum = 0;
    while (number <= 100) {
        if (number % 2 == 0) {
            sum = number + sum;
        }
        number++;
    }
    console.log(sum);
}
// sumMethod(); //CORRECTO

//3.1 Sumar los numeros pares del 2 al 100 e imprimir su valor. Utilizando el método reduce.
function reduceMethod() {
    let number = 2;
    let pares = [];
    while (number <= 100) {
        if (number % 2 == 0) {
            pares.push(number);
        }
        number++;
    }
    let sum = pares.reduce((acc, el) => {
        return acc + el;
    }, 0);
    console.log(sum);
}
// reduceMethod(); //CORRECTO



//4.- Sumar 10 números introducidos por teclado. ARRAY.
function sumArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    console.log(sum);
}
// sumArr([1, 2, 3, 5, 6, 7, 8, 9, 10]); //CORRECTO



//5.- Calcular la media de 10 números.
function media(arr) {
    let sum = arr.reduce((acc, el) => {
        return acc + el;
    }, 0);
    let len = arr.length;
    let media = sum / len;
    console.log(media);
}
media([1, 2, 3, 4]);//CORRECTO