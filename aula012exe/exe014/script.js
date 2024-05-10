function carregar () {
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	//var hora = 9
	msg.innerHTML = `Agora são ${hora} horas.`
	if (hora >= 0 && hora < 12) {
		//Bom dia! 
		img.src = 'fotomanha.jpg'
		document.body.style.background = '#e2cd9f'
	} else if (hora >= 12 && hora < 18) {
		//Boa tarde!
		img.src = 'fototarde.jpg'
		document.body.style.background = '#ec7404'
	} else {
		// Boa noite!
		img.src = 'fotonoite.jpg'
		document.body.style.background = '#515154'

	}
}
