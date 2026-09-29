// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja "F" e estado civil seja "CASADA", solicitar o tempo de casada.


const nome = prompt('Digite seu nome: ');
const sexo = prompt('Digite seu sexo: [F/M] ');
const estadoCivil = prompt('Qual é o seu Estado Civil?');

if (sexo == 'F' && estadoCivil == 'Casada') {
    const tempoCasada = Number(prompt('A quanto tempo você está casada?'));
    document.write(`Muito obrigada, Sra ${nome}, você está casada há ${tempoCasada} anos.`);
} else {
    document.write(`OK! Obrigado pelas informações ${nome}!`);
}