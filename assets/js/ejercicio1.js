function operacionesBasicas() {

    /* solicita al usuario las variables del numero 1 y numero 2 */
  
     num1 = parseInt(prompt("Ingrese el primer valor"))
     while (num1 <= 0) {
         num1 = parseInt(prompt("Ingrese primer valor nuevamente, debe ser mayor a 0"))
     }
 
     num2 = parseInt(prompt("Ingrese el segundo valor, este debe ser mayor que 0 y diferente que " + num1))
 
 /* Variables para las operaciones matematicas */
     let suma = num1 + num2
     let resta = num1 - num2
     let division = num1 / num2
     let multiplicacion = num1 * num2
     let modulo = num1 % num2
 
 
     /* Escribe en el HTMl todas las operaciones */
         document.getElementById('Primerapregunta').innerHTML="Suma= "+suma + ", Resta= " + resta + " Division= " + division + " Multiplicación= " + multiplicacion + " Módulo= " + modulo
     }