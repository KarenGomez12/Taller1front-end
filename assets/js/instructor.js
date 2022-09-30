// Variables para mostrar el nombre, apellido , y la actividad 
let Nombres=document.getElementById("nombres")
let Apellidos=document.getElementById("apellidos")
let Actividades=document.getElementById("actividad")
let button=document.getElementById("mostrar")

console.log(Nombres)//Que me muestre por consola
console.log(Apellidos)
console.log(Actividades)

// funcion sin parámetros
function mostarelección(){
    if(Nombres==Apellidos && Nombres==Actividades && Apellidos==Actividades){
        alert("La respuesta es correcta")
    }
    else{
        alert("La respuesta es incorrecta")
    }
}


button.addEventListener('click', mostarelección)//Para cuando de click, me ejecute la funcion