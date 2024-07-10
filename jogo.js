var altura = 0
var largura = 0

function ajustaTamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoJogo()

//Gerando posições aleatorias
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY


//Criando elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio()
mosquito.style.position = 'absolute'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
document.body.appendChild(mosquito)

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

	var classe = Math.floor(Math.random * 2)

	if(classe == 0){
		return 'ladoA'
	}else{
		return 'ladoB'
	}


}