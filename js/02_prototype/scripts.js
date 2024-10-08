const pessoa = {
    nome: "joao",
    maos: 2,
}

console.log(pessoa.hasOwnProperty('maos'));

const pessoaN = Object.create(pessoa);

console.log(pessoaN.maos);

console.log(pessoaN.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaN) === pessoa);