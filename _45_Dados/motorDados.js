function llamaFuncion() {
    // Def el numero de tiradas en 30
    const numTiradas = 30;
    // Variables
    let num1, num2, resultado;
    // Contador para controlar hasta que lleguemos al numero de tiradas
    let cont = 0;
    // Array
    let arrN = [];

    // Uso un do while
    do {
        // Creo los dos numero aleatorios
        num1 = Math.floor(Math.random() * (5 + 1) + 1);
        num2 = Math.floor(Math.random() * (5 + 1) + 1);
        // Los sumo
        resultado = (num1 + num2);
        // Los meto en el array
        arrN.push(resultado);
        // Imprimo la tirada, los numeros aleatorios creados y la suma
        document.getElementById('resultado').innerHTML += `Tirada numero ${cont} con los numeros ${num1} y ${num2}. El resultado es ${resultado} <br>`;
        // Aumento el contador
        cont++;
    }
    // Condicion
    while (cont <= numTiradas);
    // Imprimo el array
    document.getElementById('resultado').innerHTML += `El array de las sumas de todas las tiradas es: [${arrN}]`;

    // Si el array contiene el resultado de la suma imprimo
    if (arrN.indexOf(resultado) != -1) {
        document.getElementById('resultado').innerHTML +=
            `<br>El resultado de la suma de ${numTiradas} tiradas se repite ${resultado} veces.`;
    }
}