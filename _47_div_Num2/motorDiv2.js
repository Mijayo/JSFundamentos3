// let num = 2;
// let div = document.getElementById('resultado').addEventListener('click', porDos());

// function porDos() {
//     return document.getElementById('porDos').innerHTML += (num * 2);
// }

let res = document.getElementById("resultado");
window.onload = function() {
    localStorage.setItem("Numero", 2);
    res.innerHTML = localStorage.getItem("Numero");
};

res.addEventListener('dblclick', function() {
    numRecogido = localStorage.getItem("Numero");
    let op = numRecogido * 2;
    localStorage.setItem("Numero", op);
    res.innerHTML = localStorage.getItem("Numero");
});