// FUNCION POR FLECHA

window.addEventListener('load',()=> {/*LISTENER que escucha cuando se craga un documento HTML */
    
    /*Se crea constantes y se guarda los elementos que necesitamos */
    const display = document.querySelector('.pantalla-display');
    const botonbutton = document.getElementsByClassName('boton-button');

    /*Se crea otra constante para convertir el htmlcollection a ARRAY O ARREGLO */
    const botonbuttonArray = Array.from(botonbutton);

    /*Se itera por el nuevo arraya de botones */
    botonbuttonArray.forEach ((button) => {
        /*A cada boton le agrgamos un LISTENER""imprime el innerhtml de cada boton " */
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
        break;
    }
}

function calcular(display){
    display.innerHTML= eval(display.innerHTML)/*Toma el string, lo resuelve  y lo guarda en el innerHTML del display */
}

function actualizar(display, button){
    if(display.innerHTML ==0){
        display.innerHTML = ''; 
    }
    display.innerHTML += button.innerHTML
}

function borrar(display){
    display.innerHTML = 0;
}
