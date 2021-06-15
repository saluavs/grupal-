function calcularDias() { //Funcion para llamarlo desde el HTML con "onclick"
    let dias = parseInt(prompt("ingrese un numero para calcular años, meses y dias"));
    if (dias > 0) { //Validacion de un numero mayor a 0
        let years = Math.floor(dias / 365); //Con esta variable calculo el numero de años
        let diasRestantes = dias % 365; //Con esta variable saco los dias restantes a un año
        let weeks = Math.floor(diasRestantes / 7); //Aqui se calcula las semanas


        diasRestantes = diasRestantes % 7; //Se calculan los dias sobrantes
        alert(years + " años, " + weeks + " semanas y " + diasRestantes + " días.");
    }
}

calcularDias();