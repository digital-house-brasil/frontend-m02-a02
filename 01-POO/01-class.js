class Pessoa { // Classe
    constructor (nome, idade) { //Construtor
        this.nome = nome; //Atributos
        this.idade = idade;
    }

    falar() { //Métodos
        console.log(`${this.nome} está falando...`); // this faz referência ao atributo da classe
    }
}

const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);

// Acessando métodos
pessoa1.falar();
pessoa2.falar();

// Acessando atributos
console.log(pessoa1.nome);

// Alterando atributos
pessoa1.nome = 'José';
pessoa1.falar();

//Herança
class Aluno extends Pessoa {
    constructor (nome, idade, matricula) {
        super(nome, idade); // Chamando o construtor da classe pai
        this.matricula = matricula;
    }

    minhaMatricula() {
        console.log(`A matrícula de ${this.nome} é ${this.matricula} está falando...`);
    }
}

const aluno = new Aluno('José', 29, 102030);

aluno.matriculaAluno(); 