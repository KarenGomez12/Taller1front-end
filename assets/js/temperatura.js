// let dato=prompt("Ingresa el valor en grados");
// alert ("El valor en grados es:"+dato);


let conversion=document.getElementById('conversion')

function convertirr(){
    let Dato=document.getElementById('dato').value
    Dato=parseInt(Dato)

    let opcion1=document.getElementById('tener').value
    opcion1=parseInt(opcion1)

    let opcion2=document.getElementById('convertir').value
    opcion2=parseInt(opcion2)

    let valortotal

    if (opcion1==3 && opcion2==2){
        valortotal=(Dato - 273).toFixed(2);
        alert (valortotal) 
    }

    else if(opcion1==3 && opcion2==1){
        valortotal=((Dato - 273) * 1.8 + 32).toFixed(2);
        alert (valortotal)
    }

    else if(opcion1==2 && opcion2==3){
        valortotal=(Dato + 273).toFixed(2);
        alert (valortotal)
    }

    else if(opcion1==2 && opcion2==1){
        valortotal=((Dato * 1.8)+ 32).toFixed(2);
        alert (valortotal)
    }

    else if (opcion1==1 && opcion2==2) {
        valortotal=((Dato-32)/1.8).toFixed(2);
        alert(valortotal)
    }

    else if(opcion1==1 && opcion2==3){
        valortotal=((Dato-32)* 5/9 + 273).toFixed(2);
        alert (valortotal)
    }

    
}
conversion.addEventListener('click',convertirr)
