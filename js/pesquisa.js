const botaoPesquisa = document.querySelector('.cabecalho__icone-pesquisa');
const inputPesquisa = document.querySelector('.cabecalho__barra-pesquisa');
const botaoCabecalho = document.querySelector('[data-botao-cabecalho]');
const logoCabecalho = document.querySelector('.cabecalho__logo');

// Esconde o ícone e mostra a barra de pesquisa no mobile
botaoPesquisa.addEventListener('click', () => {
    botaoCabecalho.classList.toggle('esconder');
    logoCabecalho.classList.toggle('esconder');
    botaoPesquisa.dataset.pesquisa == 'fechar' ? botaoPesquisa.dataset.pesquisa = '' : botaoPesquisa.dataset.pesquisa = 'fechar';
    inputPesquisa.classList.toggle('mostrar');
});
