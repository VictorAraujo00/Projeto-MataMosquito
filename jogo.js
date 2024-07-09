var altura = 0
var largura = 0

function ajustaTamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

//Gerando posições aleatorias
ajustaTamanhoJogo()

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY


console.log(posicaoX, posicaoY)

//Criando elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = 'mosquito1'
mosquito.style.position = 'absolute'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
document.body.appendChild(mosquito)