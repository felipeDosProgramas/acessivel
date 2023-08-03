let imgs = document.getElementsByTagName('img');
let meio = document.getElementById('meio');
let botao = document.getElementById('botao');
let str = [];
let x = 0;
let intervalo;

function voltar(){	
	interval = setInterval(() => {	
		if(str[++x]){
			meio.innerHTML = str[x]
			return;
		}
		x = -1
	}, 8000)		
	botao.removeEventListener('click', voltar)
	botao.addEventListener('click',parar)
	console.log(botao.ev)
}

function parar(){
	clearInterval(interval)	
	botao.removeEventListener('click',parar )
	botao.addEventListener('click',voltar)
	console.log(botao.onclick)
}

str[0] = '<h2>O que é Acessibilidade Digital?</h2><p>Acessibilidade digital é a prática de garantir que pessoas com deficiência possam utilizar e interagir com tecnologias digitais, como sites, aplicativos e dispositivos eletrônicos.</p><img src="aceesivel.jpeg" alt="Pessoas com deficiência usando tecnologia" >';
str[1] = '<section><h2>Por que é Importante?</h2><p>A acessibilidade digital é importante para promover a inclusão e igualdade de oportunidades para todas as pessoas, independentemente de suas limitações físicas.</p><img src="acesove.jpeg" alt="Tecnologias acessíveis" ></section>';
str[2] = '<section><h2>Como Podemos Ajudar?</h2><p>Existem várias formas de tornar a tecnologia mais acessível, como a utilização de padrões de codificação acessíveis, fornecer descrições alternativas para imagens e disponibilizar recursos para leitores de tela. Como essa página onde o mouse é inútil!</p><img src="deficenca.jpg" alt="Ajudando pessoas com deficiência" ></section>';
str[3] = '<section><h2>Como apliquei isso aqui?</h2><p>Para deficientes físicos, sites como excesso de interatividade podem ser um problema, por isso, desenvolvi utilizando um modelo de <i>apresentação de slides</i>, onde sequer é necessário clicar em algum link para acessar as informações!</p><img src="slides.jpg" alt="Apresentação de slides" ></section>';
str[4] = '<section><h2>Apenas os manetas/pernetas são deficientes?</h2><p>Por exemplo, quando você esta com as mão ocupadas, mas prescisa acessar algum tipo de dado/informação, naquele momento você se torna elegível a utilizar os recursos que a acessibilidade para <i>manetas</i> pode oferecer!</p><img src="semao.jpg" alt="Apresentação de slides" ></section>';


meio.innerHTML = str[0]
interval = setInterval(() => {	
	if(str[++x]){
		meio.innerHTML = str[x]
		return;
	}
	x = -1
}, 8000)

botao.addEventListener('click', voltar)