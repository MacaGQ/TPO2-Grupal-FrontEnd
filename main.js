/* Ejercicio 1: Contar vocales en una cadena */

function contarVocales(cadena) {
    console.log("Cadena Ingresada: " + cadena);
    vocales = cadena.match(/[aeiou]/gi);
    cantVocales = vocales.length;
    return "Cantidad de Vocales: " + cantVocales;
}

console.log("Solución Ejercicio 1: Contar vocales en una cadena")
console.log(" ")
console.log(contarVocales("Javascript"))
console.log(" ")
console.log(contarVocales("Humahuaca es un lugar copado"))
console.log(" ")
console.log(contarVocales("Hola"))
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")

/*
    En primer lugar la función necesitara recibir la cadena a procesar:

        function console.log(contarVocales(cadena)

    Luego se obtienen las vocales de la cadena ingresada utilizando una expresión regular y el método match:

        cadena.match(/[aeiou]/gi);

    Se guardan las vocales en un array:

        vocales = cadena.match(/[aeiou]/gi);

    Se cuentan los elementos del array vocales usando el metodo lenght:

        cantVocales = vocales.length;

    Se retorna la cantidad de vocales:

        return "Cantidad de Vocales: " + cantVocales;
)
*/



/* Ejercicio 2: Muestra el mayor número de un array */

function mostrarMayor(array) {
    console.log("Array Ingresado: " + array)
    mayorNum = array[0];
    for (i=0; i < array.length; i++) {
        if (array[i] > mayorNum) {
            mayorNum = array[i];
        }
    }
    return "Mayor número del array: " + mayorNum;
}

console.log("Solución Ejercicio 2: Muestra el mayor número de un array")
console.log(" ")
console.log(mostrarMayor([34, 4, 8, 9, 333, 7, 707, 34, 8]))
console.log(" ")
console.log(mostrarMayor([99, 69, -43, 111, 41, 9]))
console.log(" ")
console.log(mostrarMayor([0.33, 0.11, -0.77, 0.0404]))
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")


/* 
    En primer lugar la función necesitara recibir como parámetro el array a procesar:

        function mostrarMayor(array)
    
    Luego se crea la variable "mayorNum" que guardará el contenido de la primer posición del array:

        mayorNum = array[0];

    El bucle "for" iterará uno a uno cada elemento del array:

        for (i=0; i < array.length; i++) {

    En caso de evaluar que el número de la posición actual del array es mayor que el depositado 
    en la variable "mayorNum" lo guardará en la variable "mayorNum":

        if (array[i] > max) {
            mayorNum = array[i];
        }

    Finalmente se retorna el mayor número del array:

        return "El mayor número del array es: " + mayorNum;


*/




/* Ejercicio 3: Calcular la media de un array de números */

function calcularMedia(array) {
    console.log("Array Ingresado: " + array)
    sum = 0
    array.forEach(e => {
        sum += e;
    });
    return "Media del array: " + (sum/array.length);
}

console.log("Solución Ejercicio 3: Calcular la media de un array de números")
console.log(" ")
console.log(calcularMedia([10, 20, 30, 40]))
console.log(" ")
console.log(calcularMedia([1, 2, 3, 4, 5]))
console.log(" ")
console.log(calcularMedia([10, 10, 10]))
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")

/* 
    En primer lugar la función necesitara recibir el array a procesar:

        function calcularMedia(array)

    Luego se inicializa en 0 la variable sum que será la encargada de almacenar la suma de todos los valores del array:

        sum = 0

    Luego se utiliza el método forEach para realizar la suma de todos los elementos del array:

        array.forEach(e => {
            sum += e;
        });

    Luego se calcula el promedio o media realizando la división entre la suma de todos los valores y la cantidad de elementos en el array y se retorna el resultado:

        return "Media del array: " + (sum/array.length);
*/


/* Ejercicio 4: Invertir los elementos de un array */

function invertirArray(array) {
    console.log("Array Ingresado: " + array)
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        aux = array[i];
        array[i] = array[array.length - 1 - i];
        aux = array[array.length - 1 - i];
    }
    return "Array invertido: " + array; 
}


console.log("Solución Ejercicio 4: Invertir los elementos de un array")
console.log(" ")
console.log(invertirArray([11, 12, 13, 14, 15]));
console.log(" ")
console.log(invertirArray([77, 718, 79, 114, 45]));
console.log(" ")
console.log(invertirArray([5, 0, -22, 71]));
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")


/*
    En primer lugar la función necesitara recibir el array a procesar:

        function invertirArray(array) 

    Luego dentro de este buclee "for" se divide el array a la mitad y se recorre el primer tramo:
    
    for (let i = 0; i < Math.floor(array.length / 2); i++)

    Se intercambian  los elementos de los extremos hacia el centro.
    Se usa la variable "aux" como almacenamiento auxiliar del valor de un elemento
    mientras se intercambian los valores de los extremos:

        aux = array[i];
        array[i] = array[array.length - 1 - i];
        aux = array[array.length - 1 - i] 
 
    Se retorna el mismo array pero volteado:
    
        return "Array invertido: " + array; 

*/



/* Ejercicio 5: Eliminar elementos duplicados de un array */

function eliminarDuplicados(array) {
    console.log("Array ingresado: " + array);
    set = new Set(array);
    return "Array sin duplicados: " + Array.from(set);
}

console.log("Solución Ejercicio 5: Eliminar elementos duplicados de un array")
console.log(" ")
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(" ")
console.log(eliminarDuplicados(['Manzana', 'Banana', 'Manzana', 'Pera', 'Sandia', 'Banana']));
console.log(" ")
console.log(eliminarDuplicados([1, 'a', 2, 'a', 3, 1, 'b']));
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")


/* 
    En primer lugar la función necesitara recibir el array a procesar:

        function eliminarDuplicados(array)

    Luego se transforma el array ingresado a set para eliminar los duplicados:

        set = new Set(array);

    Finalmente se transforma el set en array nuevamente y se retorna el resultado:

        return "Array sin duplicados: " + Array.from(set);
*/




/* 6. Convertir la primera letra de cada palabra en mayúscula
Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript */

function capitalizarPalabras(cadena) {
    console.log("Cadena ingresada: " + cadena);
    palabras = cadena.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
    }
    return "Nueva cadena: " + (palabras.join(" "));
}

console.log("Solución Ejercicio 6: Convertir la primera letra de cada palabra en mayúscula")
console.log(" ")
console.log(capitalizarPalabras("vamos que falta poco para las vacaciones"));
console.log(" ")
console.log(capitalizarPalabras("la mar estaba serena"));
console.log(" ")
console.log(capitalizarPalabras("me compré una salchipapa"));
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")

/*

En primer lugar la función necesitara recibir el array a procesar:

    function capitalizarPalabras(cadena) {

Luego se secciona la cadena usando el método "split", generando con sus elementos el array "palabras":

    palabras = cadena.split(" ");


Dentro de este bucle "for" se itera sobre el array "palabras", letra por letra,
y se transforma en mayuscula el primer elemento con el método "toUpperCase".
Con el método "slice" se le añade el resto de la palabra:

    for (i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
    }

Finalmente se unifican todos los elementos del array "palabras" formando una nueva cadena
y se retorna el resultado:
    
    return palabras.join(" ");

*/



/* 7. Generar los primeros N números de la sucesión de Fibonacci  */

function fibonacci(num) {
    console.log("Numero ingresado: " + num)

    if (num <= 0) return "Sucesión de Fibonacci: " + []; 
    if (num === 1) return "Sucesión de Fibonacci: " + [0]; 
    
    sucesion = [0, 1]; 
    
    for (i = 2; i < num; i++) {
        sucesion.push(sucesion[i - 1] + sucesion[i - 2]);
    }

    return "Sucesión de Fibonacci: " + sucesion;
}

console.log("Solución Ejercicio 7: Generar los primeros N números de la sucesión de Fibonacci ")
console.log(" ")
console.log(fibonacci(4));
console.log(" ")
console.log(fibonacci(1));
console.log(" ")
console.log(fibonacci(9));
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")


/*

En primer lugar la función necesitara recibir un número:

    function fibonacci(num) 

Luego se especifican los resultados en el caso de que el número recibido sea 0 o negativo o 1:
    if (num <= 0) return []; 
    if (num === 1) return [0];
    
Se comienza la sucesión con los dos primeros números de Fibonacci:
    sucesion = [0, 1]; 
    
Luego dentro de este bucle "for" se generan los números de Fibonacci partiendo desde el tercer elemento 
hasta llegar a la cantidad de elementos coincidente con el numero ingresado. 
Cada número es la suma de los dos anteriores.
Con el método "push" se inyecta el número generado dentro del array "sucesion":

    for (i = 2; i < num; i++) {
        sucesion.push(sucesion[i - 1] + sucesion[i - 2]);
    }

Finalmente se devuelve el array con los elementos de la secuencia generada:
    return "Sucesión de Fibonacci: " + sucesion;

*/