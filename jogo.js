var altura = 0
var largura = 0

function ajustaTamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoJogo()

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

console.log(posicaoX, posicaoY)

//Criando elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = 'mosquito1'
document.body.appendChild(mosquito)