class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
    console.log("Au Au");
    }
}

cachorro.prototype.raca = 'SRD';

let patas = Symbol(); // --> Symbol é quase como um const só que para propriedades de objetos

cachorro.prototype[patas] = 4;

let pug = new cachorro("Pug", "Bege");


console.log(pug.raca);
console.log(cachorro.prototype[patas]); // acessando as patas padrão
console.log(pug[patas]); // acessando as patas do pug