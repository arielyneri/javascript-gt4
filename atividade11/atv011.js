// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// 1 - À vista em dinheiro ou cheque: 10% de desconto
// 2 - À vista no cartão de crédito: 15% de desconto
// 3 - Em duas vezes: preço normal, sem juros
// 4 - Em três vezes: preço normal acrescido de 10%

const preco = Number(prompt('Digite o preço normal do produto:'));
const condicao = Number(prompt(
    'Escolha a condição de pagamento:\n' +
    '1 - À vista em dinheiro ou cheque (10% de desconto)\n' +
    '2 - À vista no cartão de crédito (15% de desconto)\n' +
    '3 - Em duas vezes, sem juros\n' +
    '4 - Em três vezes, com 10% de juros'
));

if (!Number.isFinite(preco) || preco <= 0) {
    alert('Digite um preço válido, maior que zero.');
} else {
    let total;
    let mensagem;

    switch (condicao) {
        case 1:
            total = preco * 0.90;
            mensagem = `Total à vista: R$ ${total.toFixed(2)}`;
            break;
        case 2:
            total = preco * 0.85;
            mensagem = `Total à vista no cartão: R$ ${total.toFixed(2)}`;
            break;
        case 3:
            total = preco;
            mensagem = `Total: R$ ${total.toFixed(2)} em 2 parcelas de R$ ${(total / 2).toFixed(2)}`;
            break;
        case 4:
            total = preco * 1.10;
            mensagem = `Total: R$ ${total.toFixed(2)} em 3 parcelas de R$ ${(total / 3).toFixed(2)}`;
            break;
        default:
            mensagem = 'Condição de pagamento inválida. Escolha um código de 1 a 4.';
    }

    alert(mensagem);
}