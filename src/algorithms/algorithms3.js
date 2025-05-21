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
// media([1, 2, 3, 4]);//CORRECTO



//6.- Calcular la mediana.
function mediana(arr) {
    let sortArr = arr.sort();
    if (sortArr.length % 2 == 0) {
        let dato1 = sortArr.length / 2;
        let dato2 = dato1 - 1;
        let dividendo = sortArr[dato1] + sortArr[dato2];
        let medianaPar = dividendo / 2;
        console.log(`El número de datos es par, por lo tanto el valor de la mediana es ${medianaPar}`);
    } else {
        let len = sortArr.length - 1;
        let medianaImpar = len / 2;
        console.log(`El número de datos es impar, por lo tanto el valor de la mediana es ${sortArr[medianaImpar]}`);
    }
    // console.log(sortArr);

}
// mediana([1, 4, 3, 6, 7, 8, 9, 5, 9, 2]); //CORRECTO



//7.-Dado 10 números enteros, calcular la suma de los números pares, cuántos numeros pares hay y la media de los números impares. 
function enteros(arr) {
    let pares = [];
    let impares = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            pares.push(arr[i]);
        } else {
            impares.push(arr[i]);
        }
    }
    let sumaImpares = impares.reduce((acc, el) => {
        return acc + el;
    }, 0);
    let divisor = impares.length;
    let mediaImpar = sumaImpares / divisor;
    let sumaPares = pares.reduce((acc, el) => {
        return acc + el;
    }, 0);
    let cuantosPares = pares.length; 
    console.log(`El valor de la suma de los números pares es ${sumaPares}`);
    console.log(`Existen ${cuantosPares} números pares.`);
    console.log(`El valor de la media de los números impares es ${mediaImpar}.`);
}
// enteros([23, 56, 3, 5, 2, 99, 87, 45, 20, 11]); //CORRECTO
 


//8.- Escribir la suma de los primeros 10 números pares.
function diezPares(arr) {
    let pares = [];
    if (arr.length >= 10) {
        for (let variable of arr) {
            if (variable % 2 == 0) {
                pares.push(variable);
            }
        }
        let suma = pares.reduce((acc, el) => {
            return acc + el;
        }, 0);
        console.log(`El valor de la suma de os números pares es ${suma}.`);
    } else {
        console.log("Se necesitan mínimo 10 números.");
    }
}
// diezPares([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 33, 44, 55, 66, 754, 3, 2,]); //CORRECTO



//9.- Dado 3 números deducir cual es el central. 
function central(arr) {
    let central = arr.length - 1;
    let centralIndex = central / 2 
    let centralValue = arr[centralIndex]; 
    console.log(centralValue);
}
// central([1, 2, 3]); //CORRECTO.



//10.- Escribir los diferentes métodos para deducir si una variable es par.
function Par() {
   this.usingForOf = function (arr) {
        for (let number of arr) {
            if (number % 2 == 0) {
                console.log(`Método for-of. ${number} es par.`);
            }
        }
    };

    this.usingWhile = function (initialValue, finalValue) {
        while (initialValue <= finalValue) {
            if (initialValue % 2 == 0) {
                console.log(`Método while. ${initialValue} es par.`);
            }
            initialValue++;
        }
    };

    this.usingFor = function (arr) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                console.log(`Método for. ${arr[i]} es par.`);
            }
        }
    };

    this.usingDoWhile = function (initialValue, finalValue) {
        do {
            if (initialValue % 2 == 0) {
                console.log(`Método do-while. ${initialValue} es par.`);
            }
            initialValue++;
        } while (initialValue <= finalValue)
    }
}
const esPar = new Par();
// esPar.usingForOf([1, 67, 54, 3, 45, 98, 99, 23, 37]); //array as argument. CORRECTO
// esPar.usingWhile(10, 20); //initial value and final value as argument. CORRECTO
// esPar.usingFor([1, 67, 54, 3, 45, 98, 99, 23, 37]); //array as argument. CORRECTO
// esPar.usingDoWhile(10, 19); //initial value and final value as argument. CORRECTO


