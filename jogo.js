var altura = 0
var largura = 0
var vidas = 3
var tempo = 10

var mosquitoTempo = 0

var nivel = window.location.search
nivel = nivel.replace('?','')


if(nivel == 'normal'){

	mosquitoTempo = 1500

}else if(nivel == 'dificil'){
	mosquitoTempo = 1000
}else{
	mosquitoTempo = 750
}


function ajustaTamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoJogo()

//Cronometro
document.getElementById('cronometro').innerHTML = tempo
var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(gerarMosquito)
		clearInterval(cronometro)
		window.location.href = 'vitoria.html'

	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)

//Gerando posições aleatorias
function posicaoRandomica(){

	//Remover mosquito anterior (caso exista)

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		
		if(vidas >= 1){
			document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
			vidas--
		}else{
			window.location.href = 'fim_de_jogo.html'
		}

	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	//Criando elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.position = 'absolute'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
}

var gerarMosquito = setInterval(function(){
	posicaoRandomica()
}, mosquitoTempo)

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	if(classe == 0){
		return 'mosquito1'

	}else if(classe == 1){
		return 'mosquito2'
	}
	else{
		return 'mosquito3'
	}
}

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)

	if(classe == 0){
		return 'ladoA'
	}else{
		return 'ladoB'
	}


}