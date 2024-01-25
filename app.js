
// Primer ejercicio 
//Variables
let numeroPosible = 100;
let numeroS= Math.floor(Math.random()*numeroPosible)+1; // funcion aleatoria de numeros math floor para convertir a enteros y math random es numero decialm de 0 a 1 , es por eso que se multiplica por 10
let numeroU= 0;
let intentos = 1;
//let palabraIntentos ="intento";

while (numeroU != numeroS){          
       numeroU = parseInt(prompt("Ingresa un numero entre 1 a 100 ¡Por favor!"));
       console.log(numeroU);

    if (numeroU == numeroS){
        alert(`Felicidades el numero secreto es ${numeroU} acertaste en ${intentos} ${intentos == 1 ? 'intento': "intentos"}`);//  para optimizar el codigo
    }else {
         if(numeroU > numeroS){
        alert(`El numero secreto es menor que ${numeroU}`);
        
         } else {
         alert(`El numero secreto es mayor que ${numeroU}`);
         }
        //intentos = intentos + 1;
        intentos ++; // forma actual de realizar un contador con c++ de forma abreviada S
        //palabraIntentos ="intentos";
        if(intentos > 4){
            alert("Has excedido el numero de intentos")
            break;
        }
    
        
    
    }

}
