// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.

let a = Number(prompt('Digite o primeiro valor inteiro: '));
let b = Number(prompt('Digite o segundo valor inteiro: '));
let c = Number(prompt('Digite o terceiro valor inteiro: '));

let numeros = [a, b, c];

numeros.sort((x, y) => y - x);

document.write(`Ordem decrescente: ${numeros[0]} > ${numeros[1]} > ${numeros[2]}`);
