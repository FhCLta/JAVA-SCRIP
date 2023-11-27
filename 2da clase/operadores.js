// ejemplos de operadores relacinales y diferencia entre ==, ===, ! =, ! 

let a = 5; 
let b = "5";
let c = 5;

// operadores relacionales( < , > <= , >= )
console.log(a < 10); // true
console.log(b > 10); // false
console.log(a <= 5); // true
console.log(b >= 5); // true

// operadores relacionales ( ==, ===, !=,)
console.log(a == b); // true,  evalua los datos de la variable
console.log(a === b); // false, evalua los datos de la variable y el tipo de dato
console.log(a === c); //true
console.log(a != b); // false evalua sin son diferentes los datos de la variable
console.log(a !==b); // evalua sin son diferntes los datos y los tipos de datos de la variable

// operadores lógicos && , || y !

let f = true; 
let g = false;
let h = 5 < 10; // true

console.log(f && g); // false
console.log(f && h); // true
console.log( f || g); // true
 // cuando usamos el mismo operador para verificar varias condiciones
 // La evaluación se hace de izquierda a derecha

  let ejemplo1 = ( 5 > 3 ) && ( 8 > 10); 
  let ejemplo2 =  (5 > 3) && (8 == 8) && (10 <= 1) //false
  let ejemplo3 =  (10 <= 1) && (8 == 8) && (5 > 3) //false

  //-------JERARQUÍA DE OPERADORES------

/*
    1.- () 
    2.- NOT   da cómo resultado una contradicción !
    3.- AND   los dos tienen que ser verdadedo &&
    4.- OR    si uno de los dos es verdadero    ||
*/
let ejemplo4 = !true && false || true;
//NOT se evalúa primero -> (false && false) || true
//AND tiene mayor jerarquía que OR -> false || true
//Al final evalúa los operadore OR -> true
console.log(ejemplo4); //true

let ejemplo5 = !true && (false || true);
//Verfica los parértesis -> !true && true
//Evalúa NOT -> false && true
//Evalúa AND -> false
console.log(ejemplo5); 