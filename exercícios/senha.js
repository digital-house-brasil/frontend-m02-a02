class SenhaSegura {
    constructor (senha) {
        this.senha = senha;
    }

    getSenha() {
        return this.senha;
    }

    setSenha(senha) {
        this.senha = senha;
    }

    isSenhaSegura() {
        /*
        /^
        (?=.*\d)                      // deve conter ao menos um dígito
        (?=.* [a - z])                // deve conter ao menos uma letra minúscula
        (?=.* [A - Z])                // deve conter ao menos uma letra maiúscula
        (?=.* [$ *&@#])               // deve conter ao menos um caractere especial
        [0 - 9a - zA - Z$ *&@#]{ 8,}  // deve conter ao menos 8 dos caracteres mencionados
        $/
        */
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}/;
        return regex.test(this.senha);
    }
}

const senha = new SenhaSegura('1mD@diego');

console.log(senha.isSenhaSegura());