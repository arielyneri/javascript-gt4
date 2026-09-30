// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
// Média de aproveitamento Conceito >= 90 A >= 75 e < 90 B >= 60 e < 75 C >= 40 e < 60 D < 40 E 

let identificador = parseInt(prompt('Digite o identificador do aluno: '));
let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));
let mediaEx = parseFloat(prompt('Digite a média das notas '));
let mediaMA = ((nota1 + (nota2 * 2) + (nota3 * 3) + mediaEx) / 7 ) * 10;
let conceito;

switch (true) {
    case mediaMA >= 90:
        conceito = 'A'
        break;
    case mediaMA >= 75 && mediaMA < 90:
        conceito = 'B'
        break;
    case mediaMA >= 60 && mediaMA < 75:
        conceito = 'C'
        break;
    case mediaMA >= 40 && mediaMA < 60:
        conceito = 'D'
        break;
    case mediaMA < 40:
        conceito = 'E'
        break
    default:
        alert('Não foi possível calcular a média do aluno!');
}

let resultado = ['A', 'B', 'C'].includes(conceito) ? 'Aprovado!' : 'Reprovado!';
alert(`
        Identificador do Aluno: ${identificador}
        Notas: 
                Primeira Nota: ${nota1};
                Segunda Nota: ${nota2};
                Terceira Nota: ${nota3};

        Média dos exercícios: ${mediaEx}
        Média de aproveitamento: ${mediaMA.toFixed(2)}
        Conceito: ${conceito} => ${resultado}
    `)