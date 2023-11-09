"use strict";

var aluno = ["Paula"];
var notasDosAlunos = aluno.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: 5
  };
});
notasDosAlunos.push({
  nome: "Lucio",
  nota: 8
});
notasDosAlunos.push({
  nome: "Roberta",
  nota: 2
});
notasDosAlunos.push({
  nome: "Bob",
  nota: 10
});
notasDosAlunos.push({
  nome: "Fátima",
  nota: 6
});
var aprovacao = notasDosAlunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(aprovacao);