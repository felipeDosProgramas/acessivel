let imgs = document.getElementsByTagName('img')
let meio = document.getElementById('meio')
let str = [];
str[0] = '<h2>O que é Acessibilidade Digital?</h2><p>Acessibilidade digital é a prática de garantir que pessoas com deficiência possam utilizar e interagir com tecnologias digitais, como sites, aplicativos e dispositivos eletrônicos.</p><img src="aceesivel.jpeg" alt="Pessoas com deficiência usando tecnologia" >'
str[1] = '<section><h2>Por que é Importante?</h2><p>A acessibilidade digital é importante para promover a inclusão e igualdade de oportunidades para todas as pessoas, independentemente de suas limitações físicas.</p><img src="acesove.jpeg" alt="Tecnologias acessíveis" ></section>'
str[2] = '<section><h2>Como Podemos Ajudar?</h2><p>Existem várias formas de tornar a tecnologia mais acessível, como a utilização de padrões de codificação acessíveis, fornecer descrições alternativas para imagens e disponibilizar recursos para leitores de tela. Como essa página onde o mouse é inútil!</p><img src="deficenca.jpg" alt="Ajudando pessoas com deficiência" ></section>'

meio.innerHTML = str[2]
let x = 0;
setInterval(() => {	
	if(str[++x]){
		meio.innerHTML = str[x]
		return;
	}
	x = -1
}, 7000)