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
cachorro.prototype.raca = 'SRD';


let pug = new cachorro("Pug", "Bege");


console.log(pug.raca);
console.log(cachorro.prototype.raca);