//kelvin
//si valor ingresado = k --> c1+k
function operacionesBasicas(c1, c2) {
    if (c2 == "k") {
        const kelvin = 273.15
        let convert1 = (c1 + kelvin)
        alert("El valor ingresado " + c1 + " son " + convert1 + " Grados Kelvin")
    }
    // fahrenheit
    //conversión ecuación 1.8 F
    else if (c2 == "f") {
        const fahrenheit = 32
        let p1 = 1.8
        let convert1 = (c1 * p1)
        let total = (fahrenheit + convert1)
        alert("El valor ingresado " + c1 + " son " + total + " Grados Fahrenheit")
    }
    //si no ingresa la inicial indicada, valor incorrecto
    else {
        alert("El valor ingresado es incorrecto")
    }
}

function solicitarTemp() {
    let celsius = +prompt('Ingresa Grados Celsius a convertir')
    let transf = prompt('A continuación, ingresa la inicial correspondiente: K (Kelvin) F (Fahrenheit)')
    operacionesBasicas(celsius, transf)
}