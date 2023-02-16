// Transformando pseudocódigo em JavaScript

// Pedir um número inteiro ao usuário;

// Ler (a);

// Pedir um número inteiro ao usuário;

// Ler (b);
// Se (a > = b)

//     Imprimir a;

// Senão

//     Imprimir b.

// Em vez de botar >= na primeira validação, decidi fazer uma terceira situação de mostrar uma mensagem caso os números sejam iguais, se não quiser, basta remorver o else if

const pedirNumero = (numero1, numero2) => {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero1 === numero2) {
        return `o primeiro número é ${numero1} e é idêntico ao segundo número que também é ${numero2}`;
    } else {
        return numero2;
    }
}

console.log(pedirNumero(44, 44));