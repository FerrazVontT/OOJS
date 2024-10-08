let carro = {
    marca: 'sem marca definida',
    ano: null,
    cor: null,
    acelereando: function(){
        console.log("O " + this.marca + " está acelerando");
    }

}

let bmw = Object.create(carro);
bmw.marca = 'BMW';
bmw.ano = 2020;
bmw.cor = 'Azul';

console.log("A cor da bmw é: " + bmw.cor);

let ferrari = Object.create(carro);
ferrari.marca = 'Ferrari';

console.log("A marca do carro é: " + ferrari.marca);

console.log(carro.marca);

bmw.acelereando();
ferrari.acelereando();