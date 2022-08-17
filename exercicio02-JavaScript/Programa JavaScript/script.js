let numeros = [];

// indice 0 numero 1, indice 1 é o número 2
numeros[0] = primeiroNumero();
numeros[1] = segundoNumero();

let divisao = dividir(numeros);

// Exibindo o resultado
alert(`O resultado da divisão é igual a ${divisao}`);

function primeiroNumero() {
    let numero1 = prompt('Insira o primeiro valor');

    // da um alerta caso o não seja um número, acontece um alerta, e você é retornado para digitar o primeiro número novamente
    if (numero1 <= 0 || numero1 === '') {
        alert('Por favor insira um número e que seja maior que 0');

        return primeiroNumero();
        // Se não, se você digitou um número e ele é maior que 0, não é vazio e não é negativo, ele retorna a variavel numero1 que é aonde está armazenado o resultado do primeiro prompt
    } else {
        return numero1;
    }
}

function segundoNumero() {
    let numero2 = prompt('Insira o segundo valor');

    if (numero2 <= 0 || numero2 === '') {
        alert('Por favor insira um número e que seja maior que 0');

        return segundoNumero();
    } else {
        return numero2;
    }
}

// Passa o array como parâmetro
function dividir(numeros) {
    let resultado = 0;

    resultado = numeros[0] / numeros[1];
    return resultado;
}