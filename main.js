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
