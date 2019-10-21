function llamaFuncion() {
    // Numero 1
    let num1 = prompt('Indique un numero');

    // Controlamos si el campo esta vacio
    while (num1 === "") {
        // Campo vacio
        alert('Campo vacio. Introduzca un valor');
        // Num1
        num1 = prompt('Indique un numero');
    }

    // Pintamos en el HTML el numero introducido
    document.getElementById('resultado').innerHTML = 'El numero introducido es: ' + num1;

    // Llamamos a la funcion primo() para hacer los calculos de numero primo
    primo(parseInt(num1));
}


function primo(num) {
    let res = 1;
    for (let n = num - 1; n > 1; n--) {
        if (num % n == 0) {
            res = 0;
        }
    }
    // Llamamos a la funcion que nos pinta en el HTLM pasando el numero por parametros
    return numeroPrimoHTML(res);
}


function numeroPrimoHTML(numPrimo) {
    // Definimos variable
    let resultado = document.getElementById('resultado');

    // Controlamos para saber si el resto es igual a 1 o a 0
    if (numPrimo == 1) {
        // Si el resto es igual a 1 pintamos en el HTML que si es primo
        resultado.innerHTML += `<div><p>El numero introducido es primo con resto: ${numPrimo}</p></div>`;
    } else {
        // Pintamos en el HTML si no es primo
        resultado.innerHTML += `<div><p>El numero introducido no es primo y nos da de resto: ${numPrimo}</p></div>`;
    }
}