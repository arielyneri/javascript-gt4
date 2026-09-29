// 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.



function somaMaior() {
    let a = prompt('Digite o primeior valor: ');
    let b = prompt('Digite o segundo valor valor: ');
    let c = prompt('Digite o terceiro valor: ');


    let soma = (a + b) < c;

    if (soma == true) {
        alert(`A soma de ${a} + ${b} é menor do que ${c} `)
    }
    else {
        alert(`A soma de ${a} + ${b} é maior que ${c}`)
    }

}

function tempoCasamento() {
    // 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja "F" e estado civil seja "CASADA", solicitar o tempo de casada.


    const nome = prompt('Digite seu nome: ');
    const sexo = prompt('Digite seu sexo: [F/M] ');
    const estadoCivil = prompt('Qual é o seu Estado Civil?');

    if (sexo == 'F' && estadoCivil == 'Casada') {
        const tempoCasada = prompt('A quanto tempo você está casada?');
        window.prompt(`Muito obrigada, Sra ${nome}, você está casada há ${tempoCasada} anos.`);
    } else {
        window.prompt(`OK! Obrigado pelas informações ${nome}!`);
    }
}