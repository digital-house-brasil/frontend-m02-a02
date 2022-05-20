class Pessoa {

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }

    andar() {
        console.log(`${this.nome} está andando`);
    }

    correr() {
        console.log(`${this.nome} está correndo`);
    }

    pular() {
        console.log(`${this.nome} está pulando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }

    dormir() {
        console.log(`${this.nome} está dormindo`);
    }
}

const pessoa = new Pessoa('José', 29);

pessoa.falar();
pessoa.andar();
pessoa.correr();

console.log(pessoa);