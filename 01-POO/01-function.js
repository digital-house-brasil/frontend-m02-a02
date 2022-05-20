function Pessoa() {

    let nome = '';
    let idade = '';


    this.falar = function () {
        console.log(`Meu nome é ${nome}`);
    }

    this.andar = function () {
        console.log(`${this.nome} está andando`);
    }

    this.correr = function () {
        console.log(`${this.nome} está correndo`);
    }

    this.pular = function () {
        console.log(`${this.nome} está pulando`);
    }

    this.comer = function () {
        console.log(`${this.nome} está comendo`);
    }

    this.beber = function () {
        console.log(`${this.nome} está bebendo`);
    }

    this.dormir = function () {
        console.log(`${this.nome} está dormindo`);
    }
}

const pessoa = new Pessoa('José', 29);

pessoa.falar();