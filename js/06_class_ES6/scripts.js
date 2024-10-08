class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
    console.log("Au Au");
    }
}

cachorro.prototype.patas = 4;

let pug = new cachorro("Pug", "Bege");

console.log(pug);
console.log(pug.patas);
pug.latir();