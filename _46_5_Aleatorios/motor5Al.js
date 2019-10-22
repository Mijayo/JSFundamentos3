function llamaFuncion() {
    // Def el numero de tiradas en 30
    const numTiradas = 5;
    // Variables
    let num1, num2, resultado;
    // Contador para controlar hasta que lleguemos al numero de tiradas
    let cont = 1;
    // Array
    let arrN = [];

    // Uso un do while
    do {
        // Creo los dos numero aleatorios
        num1 = Math.floor(Math.random() * (999 + 1) + 1);
        // Los meto en el array
        arrN.push(num1);

        // resultado += (arrN[3] + arrN[4]);
        // Imprimo la tirada, los numeros aleatorios creados y la suma
        document.getElementById('resultado').innerHTML += `Posicion ${cont} del vector con el numero ${num1}<br>`;
        // Aumento el contador
        cont++;
    }
    // Condicion
    while (cont <= numTiradas);
    // Imprimo el array
    document.getElementById('resultado').innerHTML += `El array es: [${arrN}]<br>`;
    // Obtengo el valor numerico de la posicion 4 y 5
    let num3 = arrN[3];
    let num4 = arrN[4];
    // Los sumo
    resultado = num3 + num4;
    // Imprimo los numeros y la suma de los mismos
    document.getElementById('resultado').innerHTML += `Los numeros son el: ${num3} y el ${num4}. La suma es ${resultado}`;

    // Pinto el tamaño final del vector
    let longVector = arrN.length;
    document.getElementById('resultado').innerHTML += `<br>El tamaño final del vector es: ${longVector}`;
}