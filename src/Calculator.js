// Prueba para calculadora, implementacion pendiente en formato REACT
function resta(numero1, numero2) {
    return numero1 - numero2;
}

function suma(numero1, numero2) {
    return numero1 + numero2;
}

function alCuadrado(numero1) {
    return numero1 + numero1;
}

function multiplicacion(numero1, numero2) {
    return (numero2 == 0) ? 0 :
        (numero2 < 0) ? -(resta(numero1, multiplicacion(numero1, suma(numero2, 1)))) :
        suma(numero1, multiplicacion(numero1, resta(numero2, 1)))
}

function divisionRecursiva(numero1, numero2, counter) {
    return (numero2 == 0) ? 0 :
        (numero2 < numero1) ? divisionRecursiva(resta(numero1, numero2), numero2, suma(counter, 1)) : counter
}

function division(numero1, numero2) {
    return (numero2 == 0) ? 0 :
        divisionRecursiva(numero1, numero2, 0)
}


console.log("aaaa" + division(2334454, 528));