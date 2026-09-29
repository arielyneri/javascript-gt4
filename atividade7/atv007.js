// 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação. 

let num = Number(prompt('Digite um número: '));
let resto = num%2;

if (resto == 0) {
    let soma5 = num + 5;
    document.write(soma5);
} else {
    let soma8 = num + 8;
    document.write(soma8);
}