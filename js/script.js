const botaoInicio = document.getElementById('inicio');
const botaoSobreMim = document.getElementById('sobre-mim');
const botaoRuby = document.getElementById('ruby');
const botaoRubyPOO = document.getElementById('ruby-poo');

const mainIframe = document.getElementById('main_iframe');

botaoInicio.addEventListener('click', () => {
	mainIframe.src = "inicio.html";
})

botaoSobreMim.addEventListener('click', () => {
	mainIframe.src = "sobre-mim.html";
})

botaoRuby.addEventListener('click', () => {
	mainIframe.src = "ruby.html";
})

botaoRubyPOO.addEventListener('click', () => {
	mainIframe.src = "ruby-poo.html";
})
