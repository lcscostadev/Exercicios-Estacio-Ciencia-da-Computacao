// Pedindo para o usuário inserir os números e os guardar em 2 variáveis

function calculadora() {
    let numero1 = prompt('insira o primeiro número');
    let numero2 = prompt('insira o segundo número');
    let result;
    let operator = prompt('insira o operador');

    if (operator === "+") {
        result = Number(numero1) + Number(numero2);
    }

    if (operator === "/") {
        result = Number(numero1) / Number(numero2);
    }

    if (operator === "*") {
        result = Number(numero1) * Number(numero2);
    }

    if (operator === "-") {
        result = Number(numero1) - Number(numero2);
    }

    return result;
}

document.getElementById("demo").innerHTML = `O resultado da divisão é igual a:${calculadora()}.`;