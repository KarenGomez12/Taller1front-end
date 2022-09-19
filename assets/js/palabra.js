
/*------------------------------------------------------------- LONGITUD -------------------------------------------------------------*/
// Variables para mostrar la longitud
let Dato =document.getElementById("dato")
let button=document.getElementById("longitud")
console.log(Dato)//Que me muestre por consola

    // funcion sin parámetros
    function Longitudd(){
        let palabra = Dato.value.length
        alert(palabra)
    }


button.addEventListener('click', Longitudd)//Para cuando de click, me ejecute la funcion


/*------------------------------------------------------------- MAYÚSCULA -------------------------------------------------------------*/
// Variables para mostrar en mayúscula
let Dato2 =document.getElementById("dato")
let button2 =document.getElementById("mayuscula")
console.log(Dato2)//Que me muestre por consola

    // funcion sin parámetros
    function Mayuscula(){
        let palabra2 = Dato2.value.toUpperCase()
        alert(palabra2)
    }


button2.addEventListener('click', Mayuscula)//Para cuando de click, me ejecute la funcion

/*------------------------------------------------------------- MINÚSCULA -------------------------------------------------------------*/
// Variables para mostrar en minuscula
let Dato3 =document.getElementById("dato")
let button3=document.getElementById("minuscula")
console.log(Dato3)//Que me muestre por consola
    
    // funcion sin parámetros
    function Minuscula(){
        let palabra3 = Dato3.value.toLowerCase()
        alert(palabra3)
    }


    button3.addEventListener('click', Minuscula)//Para cuando de click, me ejecute la funcion


/*------------------------------------------------------------- PRIMERA CARÁCTER ------------------------------------------------------*/
// Variables para mostrar el primer carácter
let Dato4 =document.getElementById("dato")
let button4 =document.getElementById("caracter")
console.log(Dato4)//Que me muestre por consola

    // funcion sin parámetros
    function Caracter(){
        let palabra4 = Dato4.value.charAt(0)
        alert(palabra4)
    }

button4.addEventListener('click', Caracter)//Para cuando de click, me ejecute la funcion