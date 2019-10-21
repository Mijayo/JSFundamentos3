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
    let num2 = prompt('¿Cual es el IVA del articulo?');
    // Controlamos si el campo esta vacio
    while (num2 === "") {
        // Campo vacio
        alert('Campo vacio. Introduzca un valor');
        // Num2
        num2 = prompt('Indique un numero entre 1 y 100');
    }
    // Llamamos a la funcion precioIVA() para hacer los calculos
    numeroAleatorio(parseInt(num1), parseInt(num2));
}


function numeroAleatorio(min, max) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML += `<div><p>Primer numero</p>${min} €</div>`;
    resultado.innerHTML += `<div><p>Segundo numero</p> ${max} €</div>`;
    resultado.innerHTML += `<div><p>Numero aleatorio generado</p> ${Math.round(Math.random() * (max - min) + min)} €</div>`;
    // return Math.round(Math.random() * (max - min) + min);
}