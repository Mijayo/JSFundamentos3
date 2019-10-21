function llamaFuncion() {
    // Numero 1
    let num1 = prompt('Indique un numero entre 1 y 100');

    // Controlamos si el campo esta vacio
    while (num1 === "") {
        // Campo vacio
        alert('Campo vacio. Introduzca un valor');
        // Num1
        num1 = prompt('Indique un numero entre 1 y 100');
    }

    // Numero 2
    let num2 = prompt('Indique un numero entre 1 y 100');
    // Controlamos si el campo esta vacio
    while (num2 === "") {
        // Campo vacio
        alert('Campo vacio. Introduzca un valor');
        // Num2
        num2 = prompt('Indique un numero entre 1 y 100');
    }
    // Llamamos a la funcion numeroAleatorio() para hacer los calculos del numero random
    numeroAleatorio(parseInt(num1), parseInt(num2));
}


function numeroAleatorio(min, max) {
    // Definimos variable
    let resultado = document.getElementById('resultado');

    // Pintamos en el HTML ambos numeros introducidos
    resultado.innerHTML += `<div><p>Primer numero</p>${min}</div>`;
    resultado.innerHTML += `<div><p>Segundo numero</p> ${max}</div>`;

    // Resultado final
    resultado.innerHTML += `<div><p>Numero aleatorio generado con el primer numero y el segundo introducidos</p> ${Math.round(Math.random() * (max - min) + min)}</div>`;
}