console.log("HELLO WORLD ALGO2");

//1.- Leer TRES números y descubrir si UNO es la suma de los otros DOS.
function suma(a, b, c) {
    if (a + b == c) {
        console.log(`Se cumple el ejercicio. ${c} es igual a ${a} + ${b}`);
    } else if (a + c == b) {
        console.log(`Se cumple el ejercicio. ${b} es igual a ${a} + ${c}`);
    } else if (b + c == a) {
        console.log(`Se cumple el ejercicio. ${a} es igual a ${b} + ${c}`);
    } else {
        console.log("No se cumple el ejercicio.");
    }
}
// suma(45, 6, 35); //CORRECTO



//2.- Números primos iguales o menores que N.
function primo(n) {
    for (let i = 2; i <= n; i++) {
        if (i % i === 0)  {
            console.log(i);
            console.log("es primo");
        } else {
            console.log(i);
            console.log("no es primo");
        }
    }
    for (let i = 2; i <= n; i++) {
        if (i % 1 == 0) {
            console.log("es primo 2");
        } else {
            console.log("es primo 2");
        }
    }
    let dividendo = 3;
    for (let i = 2; i <= n; i++) {
        dividendo++;
    }
}
// primo(3); //AÚN NO ME SALE, TENGO IDEAS.



//3.- Calcular la superficie de un triángulo 
function superficie(base, altura) {
    let basePorAltura;
    let superficieTriangulo;
    basePorAltura = base * altura;
    superficieTriangulo = basePorAltura / 2;
    console.log(`La superficie del triángulo es ${superficieTriangulo}`);

}
// superficie(10, 5); //CORRECTO.



//4.- Calcular la longitud de la circunferencia y el área de un círculo de radio dado.
function circuloAreaCircuferencia(radio) {
    const pi = 3.1416;
    let circunferencia = 2 * pi * radio;
    let area = pi * radio**2;
    console.log(`El valor de la circunferencia es ${circunferencia} y el valor del área es ${area}.`);
}
// circuloAreaCircuferencia(20); //CORRECTO    



// 5.- Palíndromo //PENDIENTE
function palindromo(palabra) {
   let arr = Array.from(palabra);
   console.log(arr);

   let newArray = [...palabra];
   console.log(newArray); 

   let inicio = newArray[0];
   let final = newArray.length - 1;
   
   while (inicio < final) {
      if (inicio === final) {
        inicio++;
        final++;
        console.log("true");  
      } 
    }
}
palindromo("radar");//PENDIENTE 



//6.- Calcular promedio 
const precios = [100, 200, 300, 400, 500];

function promedio(array) {
    if (array.length == 0) {
        console.log("No se puede obtener el promedio.")
    }
    let reducido = array.reduce((acc, el) => {
        return acc + el;
    }, 0);
    let resultado = reducido / array.length;
    console.log(`El precio promedio es de ${resultado}`);
}

// promedio(precios); //CORRECTO



//7.- Invertir Array
const numeros = [1, 2, 3, 4, 5];

function invertirArray(array) {
    let newArray = []; //Bien 
    for (let i = array.length - 1; i >= 0; i--) { //Me faltó agregar -1 a i. La condición estaba mal.
        newArray.push(array[i]);//No necesito asignar esto a nueva variable. 
    }
     console.log(newArray); //si pongo return no aparece
}
// invertirArray(numeros);// CORRECTO



//8.- Combinar y ordenar arrays.
const numeros1 = [10, 5, 8];
const numeros2 = [2, 7, 3];

function combinarOrdenar(array1, array2) {
    let combinado = array1.concat(array2);
    console.log(combinado);
    let ordenado = combinado.sort();
    console.log(ordenado);
}
// combinarOrdenar(numeros1, numeros2); //NO ME SALIÓ
function combinarOrdenar2(array1, array2) {
    let ordenado1 = array1.sort();
    let ordenado2 = array2.sort();
    let combinado = array1.concat(array2);
    console.log(combinado);
}
// combinarOrdenar2(numeros1, numeros2);//NO ME SALIÓ



//9.- Eliminar duplicados 
const duplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6];
function eliminarDuplicados(arr) {
    let sinDuplicados = [];
    for (i = 0; i < arr.length; i++) { //TRABAJA CON EL ARRAY VACÍO
        if (!sinDuplicados.includes(arr[i])) { //NO ME SALIÓ 
            sinDuplicados.push(arr[i]);
        }
    }
    console.log(sinDuplicados);
}
// eliminarDuplicados(duplicados);//CORRECTO, PERO VI LA SOLUCIÓN. 



