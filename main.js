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