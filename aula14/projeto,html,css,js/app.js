async function sortear() {
	//total de resultados
	const totalDeResultados = Number(document.querySelector('#totalResultados').value)

	//menor valor]
	const totalMenorValor = Number(document.querySelector('#menorValor').value)

	//maior 
	const totalMaiorValor = Number(document.querySelector('#maiorValor').value)

	for(let j = 0; j < 20; j++) {

	//limpar resultados antigos no html existente
	const elementoHtmlResultado = document.querySelector('.resultados-valores')
	elementoHtmlResultado.innerHTML = ''

	for(let i = 0; i < totalDeResultados; i++) {

	//gerar numero aleatorio entre o menor e maior valor
	const resultado = Math.floor(Math.random() * (totalMaiorValor - totalMenorValor + 1)) + totalMenorValor

	//gerar um elemento html para o resultado
	const HtmlResultado = document.createElement('div')
	HtmlResultado.classList.add('resultado-valor')
	HtmlResultado.innerText = resultado

	// adicionar o elemento criado dentro do html existente
	
	elementoHtmlResultado.append(HtmlResultado)
	}
	await wait(20)
}
}

function wait(tempo) {
  return new Promise((resolve) => {
	setTimeout(() => resolve(), tempo)
  })
}