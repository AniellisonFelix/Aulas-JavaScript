const generateRandomNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
	const randomNumber = generateRandomNumber();
	resolve(randomNumber);
}, 1000);
});

const rejectedPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
	const randomNumber = generateRandomNumber();
	reject(new Error(`o numero ${randomNumber} nao e valido`));
}, 1000);
});

const randomPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomNumber = generateRandomNumber();
			if (randomNumber % 2 === 0) {
				resolve(randomNumber);
			} else {
				reject(
					new Error(
						`o numero ${randomNumber} nao e valido. somente numeros pares sao validos.`
					)
				);
			}
		}, 1000);
	});

// resolvedPromise().then((response) => {
// 	console.log(`resolvedPromise: o numero gerado é ${response}`);
// })

// rejectedPromise()
// .then((response) => {
// 	console.log(`rejectedPromise: o numero gerado é ${response}`);
// })
// .catch((error) => {
// 	console.log(`RejectedPromise: ${error.message}`);
// });

randomPromise()
.then((response) => {
	console.log(`Promise resolvida. O número gerado é ${response}`);
})
.catch((error) => {
	console.log(`promise rejeitada: ${error.message}`);
})