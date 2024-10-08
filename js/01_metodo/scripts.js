const cachorro = {
    raca: 'vira lata',
    uivar: function(){
        console.log("Uivando")
    },
    rosnar: function(){
        console.log("Rosnando");
    },
    novaRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é: " + this.raca;
    }
}

console.log(cachorro.raca);
cachorro.novaRaca('Doberman');
console.log(cachorro.raca);
console.log(cachorro.getRaca());

cachorro.uivar();
cachorro.rosnar();