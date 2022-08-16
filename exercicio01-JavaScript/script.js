// Pedindo para o usuário inserir os números e os guardar em 2 variáveis

let numero1 = prompt('insira o primeiro número');
let numero2 = prompt('insira o segundo número');

let resultadoDivisao = `O resultado da divisão é igual a: ${alert(dividir(numero1, numero2))}`

function dividir(numero1, numero2) {
    var resultado = 0;
    resultado = numero1 / numero2;

    return resultado;
}