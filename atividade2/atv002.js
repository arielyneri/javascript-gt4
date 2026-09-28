// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja "F" e estado civil seja "CASADA", solicitar o tempo de casada.


// let nome = 'Anna';
// let sexo = 'Feminino';
// let estadoCivil = 'Casada';

// if (sexo == 'Feminino' && estadoCivil == 'Casada') {
//     console.log('Você está a quanto tempo casada?')
// } else {
//     console.log('OK!')
// }

const nome = prompt('Digite seu nome: ');
const sexo = prompt('Digite seu sexo: [F/M] ');
const estadoCivil = prompt('Qual é o seu Estado Civil?');

if (sexo === 'F' && estadoCivil === 'Casada') {
    const tempoCasada = prompt('A quanto tempo você está casada?');
    window.prompt(`Muito obrigada, Sra ${nome}, você está casada há ${tempoCasada} anos.`);
} else {
    window.prompt(`OK! Obrigado pelas informações ${nome}!`);
}