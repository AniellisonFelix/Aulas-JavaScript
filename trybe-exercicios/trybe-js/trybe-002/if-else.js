const beenPrice = 10;
const totalMoney = 15;
let message = '';

if (totalMoney < beenPrice) {
    message = 'Voce nao possui saldo suficiente :';
} else if (totalMoney === beenPrice) {
    message = 'voce vai gastar todo seu dinheiro';
} else {
    message = 'pode comprar!'
};

console.log(message);