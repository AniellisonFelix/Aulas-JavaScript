// a sintaxe basica do operador ternario é :

'condição' ? 'retorno se verdadeiro' : 'retorno se falsa';

let temperature = 35;
let weather = temperature > 30 ? 'ta quente' : 'ta de boa';
// && caso queira saber apenas o true usar && e retirar o 'ta de boa' 
console.log(`A temperatura é ${temperature}, portanto, ${weather}.`);