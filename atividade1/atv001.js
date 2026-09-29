// 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.




let a = prompt('Digite o primeior valor: ');
let b = prompt('Digite o segundo valor valor: ');
let c = prompt('Digite o terceiro valor: ');


let soma = (a+b) < c;

if (soma == true) {
    alert(`A soma de ${a} + ${b} é menor do que ${c} `);
}
else {
    alert(`A soma de ${a} + ${b} é maior que ${c}`);
}