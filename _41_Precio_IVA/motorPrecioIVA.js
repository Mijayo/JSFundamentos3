function llamaFuncion() {
    // Pedimos el precio
    let precio = prompt('Indique el precio del articulo');

    // Controlamos si el campo esta vacio
    while (precio === "") {
        // Campo vacio
        alert('Campo vacio. Introduzca un valor');
        // Precio
        precio = prompt('Indique el precio del articulo');
    }

    // IVA del prodcuto
    let iva = prompt('¿Cual es el IVA del articulo?');
    // Controlamos si el campo esta vacio
    while (iva === "") {

        // Si el campo esta vacio asignamos el IVA al 21%
        if (iva === "") {
            confirm('El campo esta vacio, ¿Desea que el IVA sea el 21%?');
            let iva21 = 21;
            iva = iva21;
        } else {
            iva = prompt('Indique el IVA del articulo');
        }
    }

    // Llamamos a la funcion precioIVA() para hacer los calculos
    precioIVA(parseInt(precio), parseInt(iva));
}


function precioIVA(precio, IVA) {
    this.precio = precio;
    this.iva = IVA;
    let precioSinIVA = precio;
    let precioConIVA = precio + ((iva / 100) * precio);
    let resultadoSinIVA = document.getElementById('resultado');
    resultadoSinIVA.innerHTML += `<div><p>Precio sin IVA</p>${precioSinIVA}</div>`;
    resultadoSinIVA.innerHTML += `<div><p>Precio con IVA</p> ${precioConIVA}</div>`;
}