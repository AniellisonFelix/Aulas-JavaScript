let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O valor tem ${num.length} posiçoes`)
console.log(`O primrieo valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
	console.log('O valor nao foi encontrado!')
} else {
	console.log(`O valor esta na posiçao ${pos}`)
}
