let num = 2;
let div = document.getElementById('resultado').addEventListener('click', porDos());

function porDos() {
    return document.getElementById('porDos').innerHTML += (num * 2);
}