function operacion(){
    let tipo = document.getElementById("operacion").value;
    if(tipo == " "){
        document.getElementById("solucion").innerText = "Selecciona una operación";
    }else if(tipo == "suma"){
        suma();
    }else if(tipo == "resta"){
        resta();
    }else if(tipo == "multiplicacion"){
        multiplicacion();
    }else if(tipo == "division"){
        division();
    }
}

function suma(){
    let valor_1 = Number(document.getElementById("valor_1").value);
    let valor_2 = Number(document.getElementById("valor_2").value);
    let solucion = document.getElementById("solucion");

    if(Number.isInteger(valor_1, valor_2) || Number.isFinite(valor_1, valor_2)){
        let suma = valor_1 + valor_2;

        solucion.innerText = suma;
    }else{
        solucion.innerText = "Introduce valores correctos";
        return; 
    }
}

function arraySuma(){
    let texto = document.getElementById("valores").value;
    let solucion = document.getElementById("solucion_array");
    
    let separar = texto.split(" ");
    let suma = 0;

    for (let i = 0; i < separar.length; i++) {
        if (isNaN(separar[i])) {
            solucion.innerText = "Introduce valores correctos";
            return;
        }
    suma += separar[i];
    }

    solucion.innerText = suma;
}

function resta(){
    let valor_1 = Number(document.getElementById("valor_1").value);
    let valor_2 = Number(document.getElementById("valor_2").value);
    let solucion = document.getElementById("solucion");

    if(Number.isInteger(valor_1, valor_2) || Number.isFinite(valor_1, valor_2)){
        let resta = valor_1 - valor_2;

        solucion.innerText = resta;
    }else{
        solucion.innerText = "Introduce valores correctos";
        return; 
    }
}

function multiplicacion(){
    let valor_1 = Number(document.getElementById("valor_1").value);
    let valor_2 = Number(document.getElementById("valor_2").value);
    let solucion = document.getElementById("solucion");

    if(Number.isInteger(valor_1, valor_2) || Number.isFinite(valor_1, valor_2)){
        let multiplicacion = valor_1 * valor_2;

        solucion.innerText = multiplicacion;
    }else{
        solucion.innerText = "Introduce valores correctos";
        return; 
    }
}

function division(){
    let valor_1 = Number(document.getElementById("valor_1").value);
    let valor_2 = Number(document.getElementById("valor_2").value);
    let solucion = document.getElementById("solucion");

    if(Number.isInteger(valor_1, valor_2) || Number.isFinite(valor_1, valor_2)){
        let division = valor_1 / valor_2;

        solucion.innerText = division;
    }else{
        solucion.innerText = "Introduce valores correctos";
        return; 
    }
}