function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}

function calcular(operacion) {
    const numero1 = parseFloat(document.getElementById('number1').value);
    const numero2 = parseFloat(document.getElementById('number2').value);
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(numero1, numero2);
            break;
        case 'restar':
            resultado = restar(numero1, numero2);
            break;
        case 'dividir':
            resultado = dividir(numero1, numero2);
            break;
        case 'multiplicar':
            resultado = multiplicar(numero1, numero2);
            break;
        default:
            resultado = 'Operación desconocida';
            break;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
