// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS


let a = Boolean(Number(prompt('Digite "1" para True ou "0" para False')));
let b = Boolean(Number(prompt('Digite "1" para True ou "0" para False')));


if (a === false && b === false) {
    alert('Ambos são falso!');
} else {
    alert('Ambos são verdadeiros');
}