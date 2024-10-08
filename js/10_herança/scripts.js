class mamifero {
    constructor(patas){
        this.patas = patas;
    }
}
let gato = new mamifero(4);

class cachorro extends mamifero{
    constructor(patas, raca, cor){
        super(patas);
        this.raca = raca;
        this.cor = cor;
    }
}

let Pug = new cachorro(4, "Pug", "marrom");

console.log(Pug);

console.log(new cachorro instanceof mamifero);
console.log(gato instanceof mamifero);
console.log(Pug instanceof mamifero);