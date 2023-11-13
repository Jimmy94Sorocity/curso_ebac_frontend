"use strict";
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicacao(2, 3));
const nome = "Matheus";
function saudacao(nome1) {
    nome1 = nome;
    return "Olá " + nome1;
}
const exibeSaudacao = saudacao(nome);
console.log(exibeSaudacao);
