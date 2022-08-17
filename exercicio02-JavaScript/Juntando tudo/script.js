let frutas = ['laranja', 'uva', 'Limão'];

let alunos = [];
alunos = ['Alex', 'Ana', 'João'];

let notas = [10.0, 9.5, 9.6];
let mistura = ['Um', 2, 3, 'Quatro'];

// Ver certo aluno usando o índice
console.log(alunos[0]) // Alex


// Adicionando vitor no final do array
alunos.push('Vitor');
console.log(alunos);

// Removendo ultima pessoa do array "Vitor"
alunos.pop();
console.log(alunos);

// Adicionando uma pessoa no inicio do array
alunos.unshift("Bernardo");
console.log(alunos);

// Removendo uma pessoa no inicio do array
alunos.shift("Bernardo");
console.log(alunos);

// Primeiro remove a pessoa do Indice 1 "Ana" depois ele deleta até o ídice 2 "João" e adiciona um novo "Lucas".
alunos.splice(1, 2, "Lucas");
console.log(alunos);

// Mostra a quantidade de índices de um array
console.log(mistura.length);

// Faz com que o primeiro item do array frutas fique undefined
delete frutas[0];
console.log(frutas);