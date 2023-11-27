let seRealizoTransaccion = true

if (seRealizoTransaccion) {  // es igual a if ( seRelizoTransacciom == True) si es verdadero ejecuta el console log
    console.log("tu compra se hizo de manera exitosa");
}
 console.log("otra operación");

 // Estructura básica if - else

 if (seRealizoTransaccion) {
    console.log("tu compra se hizo de manera exitosa");
 } else{
    console.log("fondos insufucientes, ingrese otra forma de pago");
 }

 console.log("otra opereación extra");

 let ereMayorDeEdad = true

 if (ereMayorDeEdad) {
    console.log("tienes acceso a la página");
 }else{
    console.log("no tienes la edad suficiente para consultar la página");
 }

 // estructura if else if

 let semaforo = "rojo"

 if (semaforo == "verde") {
    console.log("avanza");
 }else if( semaforo =="amarillo"){
    console.log("comienza a frenar");
 }else if( semaforo == "rojo"){
    console.log("stop");
 }

 // Estructurura if - else - if, la variable se define una sola vez
  semaforo = "morado"

 if (semaforo == "verde") {
    console.log("avanza");
 }else if( semaforo =="amarillo"){
    console.log("comienza a frenar");
 }else if( semaforo == "rojo"){
    console.log("stop");
 }else{
    console.log("el semaforo parpadea");
 }

 //IF's anidados
let edad = 25;
let tieneIdentificacion = true

if(edad >= 18) {
    if(tieneIdentificacion){
        console.log("Puedes pasar al lugar");
    }
}else{
    console.log("Eres menor de edad, no puedes pasar");
}

let persona = {
    nombre: "Florencio",  // dentro del objeto literal que va encerrado entre corchete al final del dato se pone ,
    edad : 17,
    localidad : "Sur",
}
if (persona.edad >= 18 && persona.localidad) {
    console.log("te puedes vacunar");
}else{
    console.log("no te puedes vacunar");
}

// if ' anidados

