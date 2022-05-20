class Imc {
    constructor (altura, peso) {
        this.altura = altura;
        this.peso = peso;
    }

    calcular() {
        return this.peso / (this.altura * this.altura);
    }
}

const imc = new Imc(1.75, 80);

console.log(imc.calcular());