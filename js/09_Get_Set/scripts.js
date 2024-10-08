class cachorro{
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au Au");
    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let labrador = new cachorro("labrador", "sem cor");

console.log(labrador.cor);

labrador.setCor = "cinza";

console.log(labrador.getCor);

