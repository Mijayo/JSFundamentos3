function mouseDown() {
    document.getElementById("txt").style.backgroundColor = "yellow";
    document.getElementsById("txtD").style.color = "black";
}

function mouseUP() {
    document.getElementById("txt").style.backgroundColor = "red";
}

// let res = document.getElementById("resultado");
// // Cuando cargamos el HTML llamamos a la funcion
// window.onload = function() {
//     // Guardo en localStorage el valor inicial 2
//     localStorage.setItem("Numero", 2);
//     // Asigno el valor 2 a la variable re definada anteriormente
//     res.innerHTML = localStorage.getItem("Numero");
// };

// // Añado el evento dbclick para que ejecute la funcion
// res.addEventListener('dblclick', function() {
//     // Def la variable numRecogido para coger el numero del localStorage
//     numRecogido = localStorage.getItem("Numero");
//     // Realizo la operacion * 2
//     let op = numRecogido * 2;
//     // Guardo el nuevo numero en el localStorage
//     localStorage.setItem("Numero", op);
//     // Pinto el numero en el HTML
//     res.innerHTML = localStorage.getItem("Numero");
// });