

const product = 'iphone 32';
const price = 58000;
const discount = 10;

const message = 
`Produto: ${product}
preço: ${price}
desconto: ${discount}%
preço de desconto: R$${(price - (price * (discount / 100))).toFixed(2)}`;

console.log(message);