function tenisV(tamanho, marca, cor){
    let tenis = Object.create({});
    tenis.tamanho = tamanho;
    tenis.marca = marca;
    tenis.cor = cor;
    tenis.usado = function(){
        console.log("O tenis é usado.");
    }
    return tenis;
}

let creature = tenisV(41, 'creature', 'preto');

console.log(creature);
creature.usado();

