// 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2  Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo. 

// IMC em adultos Condição 
// Abaixo de 18,5 Abaixo do peso 
// Entre 18,5 e 25 Peso normal 
// Entre 25 e 30 Acima do peso 
// Acima de 30 obeso 

let peso = parseFloat(prompt('Qual é o seu peso?'));
let altura = parseFloat(prompt('Qual é a sua altura?'));
let IMC = peso/(altura**2);

// if (IMC < 18.5) {
//     alert('Abaixo do peso');

// } else if (IMC < 25) {
//     alert('Peso normal');

// } else if (IMC < 30) {
//     alert('Acima do peso');

// } else {
//     alert('Obeso');
// }

switch (true) {
    case IMC < 18.5:
        alert('Abaixo do peso');
        break;

    case IMC >= 18.5 && IMC <= 25:
        alert('Peso normal');
        break;

    case IMC > 25 && IMC <= 30:
        alert('Acima do peso');
        break;

    case IMC > 30:
        alert('Obeso');
        break;

    default:
        alert('Inválido');
}
