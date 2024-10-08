function criarCachorro(raca, cor, idade){
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
}

criarCachorro.prototype.latir = function(){
    console.log("Au Au")
}

let pug = new criarCachorro('pug', 'marrom', '2 meses');
pug.latir();

console.log(pug);