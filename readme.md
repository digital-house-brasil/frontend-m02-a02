![](./hd-header.png)

## Front-End | Programação Orientada a Objetos

<details>
  <summary>1. POO</summary>
  
  ### O que é POO?
   > O paradigma de programação orientada a objetos [POO](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos) é uma abordagem de programação que visa a construção de objetos que se relacionem entre si.

  - Classe:
    - Uma classe é um modelo de objeto que contém atributos e métodos.

  - Construtor:
    - O construtor é um método que é executado quando um objeto é criado.

  - Método:
    - Um método é uma função que pertence a uma classe.

  - Atributo:
    - Um atributo é um valor que pertence a um objeto.

  - Objeto:
    - Um objeto é uma instância de uma classe.

  - Instância:
    - Uma instância é uma cópia de um objeto.

  . This:
    - O this é uma referência para o objeto que está sendo manipulado.

  - Herança:
    - Uma classe pode herdar de outra classe.
  
</details>

<details>
  <summary>2. Criando uma classe</summary>

  EX: 
  ```js 
  class Pessoa { // Classe
    constructor(nome, idade) { //Construtor
      this.nome = nome; //Atributos
      this.idade = idade;
    }

    falar() { //Métodos
      console.log(`${this.nome} está falando...`);
    }
  }
  ```
</details>

<details>
  <summary>3. Instância</summary>

  EX: `Ìnstância`
  ```js
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
  ```
</details>

<details>
  <summary>4. This</summary>

  EX: `this`
  ```js 
  class Pessoa { // Classe
    constructor(nome, idade) { //Construtor
      this.nome = nome; //Atributos
      this.idade = idade;
    }

    falar() { //Métodos
      console.log(`${this.nome} está falando...`); // this faz referência ao atributo da classe
    }
  }

  const nome = 'Pedro';

  const pessoa1 = new Pessoa('João', 20);
  pessoa1.falar(); // João está falando...
  ```

</details>

<details>
  <summary>5. Herança</summary>

  EX: `Herança`
  ```js  
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

  aluno.minhaMatricula(); 
  ```
</details>

###### tags: `Frontend` `nodeJS` `JavaScript` `POO`
