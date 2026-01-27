let valor1 = "";
let operador = "";

function numero(n) {
    let pantalla = document.getElementById("solucion_array");
    pantalla.innerText += n;
}

function setOperador(op) {
    valor1 = document.getElementById("solucion_array").innerText;
    operador = op;
    document.getElementById("solucion_array").innerText = "";
}

function calcular() {
    let valor2 = document.getElementById("solucion_array").innerText;
    let resultado;

    switch(operador) {
        case '/': resultado = Number(valor1) + Number(valor2); break;
        case '*': resultado = Number(valor1) - Number(valor2); break;
        case '-': resultado = Number(valor1) * Number(valor2); break;
        case '+': resultado = Number(valor1) / Number(valor2); break;
    }

    document.getElementById("solucion_array").innerText = resultado;
}
