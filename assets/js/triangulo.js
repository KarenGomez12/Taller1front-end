
//FUNCION FLECHA
let calculo=document.getElementById('calcular')
let operacion =()=>{
    
    //Variables
    let ld1=document.getElementById('lado1')
    let ld2=document.getElementById('lado2')
    let ld3=document.getElementById('lado3')

    //condicionales
    
    if(ld1==ld2 && ld1==ld3){
        alert("El triangulo es Isósceles,dos lados iguales")
    }
    else if(ld1==ld2 && ld1==ld3 && ld2==ld3){
        alert("El triangulo es Equilátero, sus tres lados son iguales ")   
    }

    else{
        alert("El triangulo es Escaleno,ningún lado es igual")
    }
}

let triangulo=document.getElementById('operacion')
calculo.addEventListener('click',operacion)