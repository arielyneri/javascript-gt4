// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado. 

let num = Number(prompt('Digite um número: '));

if (num >= 0) {
    let dobro = num*2;
    document.write(`O dobro de ${num} é ${dobro}`);
} else {
    let triplo = num*3;
    document.write(`O triplo de ${num} é ${triplo}`);
}