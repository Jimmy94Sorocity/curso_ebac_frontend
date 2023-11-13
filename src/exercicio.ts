function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

console.log(multiplicacao(2, 3));

const nome: string = "Matheus";

function saudacao(nome1: string): string {
    nome1 = nome;
    return "Olá " + nome1;
}

const exibeSaudacao = saudacao(nome);
console.log(exibeSaudacao);