// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.

let a = parseInt(prompt('Digite o primeiro valor inteiro: '));
let b = parseInt(prompt('Digite o segundo valor inteiro: '));
let c = parseInt(prompt('Digite o terceiro valor inteiro: '));

if (a > b && a > c) {
    if (b > c) {
        alert(a + ', ' + b + ', ' + c);
    } else {
        alert(a + ', ' + c + ', ' + b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        alert(b + ', ' + a + ', ' + c);
    } else {
        alert(b + ', ' + c + ', ' + a);
    }
} else {
    if (a > b) {
        alert(c + ', ' + a + ', ' + b);
    } else {
        alert(c + ', ' + b + ', ' + a);
    }
}