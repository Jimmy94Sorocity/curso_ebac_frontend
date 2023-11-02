function Humano(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz Olá");
    }
}

function Estudante(nome, idade, conhecimentos, idiomas) {
    this.idade = idade;
    this.conhecimentos = conhecimentos;
    this.idiomas = idiomas;

    Humano.call(this, nome);
}

function Professor(nome, idade, conhecimentos, idiomas) {
    this.idade = idade;
    this.conhecimentos = conhecimentos;
    this.idiomas = idiomas;

    Humano.call(this, nome);
}

const estudante1 = new Estudante("João", 25, ["História, Geografia, Matemática"], ["Inglês, Alemão"]);
const professor1 = new Professor("Paulo", 58, ["Português, Redação, Interpretação de texto"], ["Japonês", "Inglês"]);

console.log(estudante1);
console.log(professor1);