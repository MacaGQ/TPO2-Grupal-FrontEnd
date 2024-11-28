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

/* Ejercicio 6: Convertir la primera letra de cada palabra en mayúscula */

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


/* Ejercicio 7: Eliminar elementos duplicados de un array */

function fibonacci(n) {
    console.log("Número ingresado: " + n);
    serie = []
    if (n > 0) {
        serie.push(0)
    }
    if (n > 1) {
        serie.push(1)
    }
    if (n > 2) {
        index = 0
        while (serie.length < n) {
            num1 = serie[index]
            index += 1
            num2 = serie[index]
            serie.push(num1 + num2);
        }
    }
    return serie;
}

console.log("Solución Ejercicio 5: Generar los N primeros números de la sucesión de Fibonacci")
console.log(" ")
console.log(fibonacci(5));
console.log(" ")
console.log(fibonacci(2));
console.log(" ")
console.log(fibonacci(10));
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")


/*
    En primer lugar la función necesitará recibir un número para generar la secuencia de fibonacci:

        function fibonacci(n)

    Luego se inicializa la variable serie que alojara la secuencia de fibonacci, comienza como un array vacío:

        serie = []

    La secuencia de fibonacci empieza con 0 y 1 y luego se realiza la suma de estos dos números para obtener el tercero, luego el segundo número con el tercero y así sucesivamente. 

    Siguiendo esta lógica, lo primero que se debe hacer es ingresar los primeros dos números, pero primero se debe tener en cuenta qué número fue el ingresado al llamar a la función:

    - Si el número ingresado fue 0, se debe retornar el array vacío
    - Si el número ingresado fue 1, se debe retronar solo el primer número de la serie
    - Si el número ingresado fue 2 o más ya se pueden ingresar los primeros dos números de la serie y a partir de esto (si el número fuera mayor a 2) continuar los cálculos para obtener los siguientes números de la serie.

    Considerando lo mencionado, entonces, la función en primer lugar tiene un if que revisa si el número ingresado es mayor a 0 y si lo es agrega el primer número de la secuencia de fibonacci (0):
    
        if (n > 0) {
            serie.push(0)
        }

    Luego se utiliza un segundo if para averiguar si el número ingresado es mayor a 1 (es decir, 2 o más) y si lo es, agregará el segundo número de la secuencia de fibonacci (1):

        if (n > 1) {
            serie.push(1)
        }

    Posteriormente, se utiliza un tercer if para averiguar si el número es mayor a 2, para realizar los cálculos y averiguar el resto de la serie. Esto se realiza utilizando un ciclo while:

        if (n > 2) {
            index = 0
            while (serie.length < n) {
                num1 = serie[index]
                index += 1
                num2 = serie[index]
                serie.push(num1 + num2);
            }
        }
    
    En primer lugar se inicializa la variable index que alojara el índice para poder ingresar a los números de la secuencia ya guardada en la variable serie:

        index = 0

    Luego se inicia el ciclo while que iterará siempre que la cantidad de elementos en el array serie sea menor que el número deseado (n):

        while (serie.length < n)

    Luego se aloja el primer número que se utilizará en la suma (num1), este número se obtiene buscando en el array el índice deseado, en la primer iteración será el índice 0, por lo tanto se guardará en num1 el primer elemento del array serie, es decir, 0.

        num1 = serie[index]

    Luego se suma 1 a index, siguiendo el ejemplo ahora índex = 1.

                index += 1

    Y se aloja el número obtenido de ese índice, siguiendo el ejemplo será también 1, en la variable num2, que también se utilizará para realizar la suma. 

                num2 = serie[index]

    Luego se agrega a la serie el resultado de sumar num1 y num2:

        serie.push(num1 + num2);

    En la siguiente iteración del ciclo while, la variable index es igual 1, por lo que tomará el valor del elemento en el índice 1 (es decir, 1) para num1 y luego de sumar 1 a la varible index tomará el siguiente valor de la serie para num2 (1 nuevamente). Posteriormente relizará la suma agregando un nuevo número a la serie: 2. Este proceso continuará repitiendose hasta alcanzar los n números de la secuencia de fibonacci.

    Finalmente se retorna el array serie (si el número ingresado fue 0, nunca se ingresará a ninguno de los if y por lo tanto se retornará el array vacio tal como se inicializó al prinicipio de la función):

        return serie;
*/