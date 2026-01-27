const pantalla  = document.querySelector('.pantalla');
const botones   = document.querySelectorAll('.btn');

botones.forEach( boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;
        
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;

        }

        if(boton.id === "igual"){
            if (pantalla.textContent === "Error") {
                pantalla.textContent = "0";
                return;
            }
            try {
                let expr = pantalla.textContent;
                expr = expr.replace(/\^/g, '**');
                expr = expr.replace(/√\(/g, 'Math.sqrt(');
                expr = expr.replace(/√([0-9]+(?:\.[0-9]+)?)/g, 'Math.sqrt($1)');

                const resultado = eval(expr);
                if (Number.isNaN(resultado)) {
                    pantalla.textContent = "Error";
                } else {
                    pantalla.textContent = resultado;
                }
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }
        
        const operadores = ['+','-','*','/','^','√'];

        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            if(operadores.includes(botonApretado)){
                pantalla.textContent = "0" + botonApretado;
            } else {
                pantalla.textContent = botonApretado;
            }
        } else {
            pantalla.textContent += botonApretado;
        }
    })
});