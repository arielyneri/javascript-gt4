// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: ● para homens: (72.7 * h) – 58; ● para mulheres: (62.1 * h) – 44.7. 

let altura = Number(prompt('Qual é sua altura?'));
let sexo = prompt('Qual é o seu sexo: Feminino ou masculino?').toUpperCase();


if (sexo == 'FEMININO') {
    let pesoIdeal = (62.1 * altura) - 44.7;
    alert(`Seu peso ideal é ${pesoIdeal}`);
} else {
    let pesoIdeal = (72.7 * altura) - 58;
    alert(`Seu peso ideal é ${pesoIdeal}`);
}