function llamaFuncion() {
    // Cadena de caracteres
    let strPrompt = prompt('Introduzca una cadena de caracteres');

    // Controlamos si el campo esta vacio
    while (strPrompt === "") {
        // Campo vacio
        alert('Campo vacio. Introduzca una cadena de caracteres');
        // Num1
        strPrompt = prompt('Introduzca una cadena de caracteres');
    }

    // Pintamos en el HTML la cadena de caracteres
    document.getElementById('resultado').innerHTML = 'La cadena de caracteres es: ' + strPrompt;

    // Controlamos
    if (strPrompt === strPrompt.toLowerCase()) {
        // Igualamos a toLowerCase() para saber si son todo minusculas
        document.getElementById('resultado').innerHTML += `<div><p>Está formada sólo por minusculas.</p></div>`;
    } else if (strPrompt === strPrompt.toUpperCase()) {
        // Igualamos a toUpperCase() para saber si son todo mayusculas
        document.getElementById('resultado').innerHTML += `<div><p>Está formada sólo por mayúsculas.</p></div>`;
    } else {
        // Si estan mezcladas las mayusculas y las minusculas
        document.getElementById('resultado').innerHTML += `<div><p>Está formada tanto por mayúsculas como minusculas.</p></div>`;
    }
}