const botaoInicio = document.getElementById('inicio');
const botaoSobreMim = document.getElementById('sobre-mim');
const botaoRuby = document.getElementById('ruby');

const mainIframe = document.getElementById('main_iframe');

botaoInicio.addEventListener('click', () => {
	mainIframe.src = "paginas/inicio.html";
})

botaoSobreMim.addEventListener('click', () => {
	mainIframe.src = "paginas/sobre-mim.html";
})

botaoRuby.addEventListener('click', () => {
	mainIframe.src = "paginas/ruby.html";
})
