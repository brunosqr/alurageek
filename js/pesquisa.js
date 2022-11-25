const iconePesquisa = document.querySelector('.cabecalho__icone-pesquisa');
const inputPesquisa = document.querySelector('.cabecalho__barra-pesquisa');
const botaoCabecalho = document.querySelector('[data-botao-cabecalho]');
const logoCabecalho = document.querySelector('.cabecalho__logo');

// Esconde o ícone e mostra a barra de pesquisa no mobile
iconePesquisa.addEventListener('click', () => {
    botaoCabecalho.classList.toggle('esconder');
    logoCabecalho.classList.toggle('esconder');
    iconePesquisa.dataset.pesquisa == 'fechar' ? iconePesquisa.dataset.pesquisa = '' : iconePesquisa.dataset.pesquisa = 'fechar';
    inputPesquisa.classList.toggle('mostrar');
});
