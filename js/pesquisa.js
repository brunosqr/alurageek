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

function buscaProdutos(input, urlBusca, urlExibicao) {
    input.addEventListener('keyup', (evento) => {
        if (evento.key === 'Enter') {
            const produtoBuscado = input.value.toLowerCase();

            fetch(urlBusca)
            .then(response => {
                return response.json();
            })
            .then(response => {
                let produtos = response.produtos; // extraindo "produtos" do arquivo JSON
                const produtosSelecionados = produtos.filter(produtos => produtos.nome.toLowerCase().includes(produtoBuscado));
                const chave = 'produtos';
                localStorage.setItem(chave, JSON.stringify(produtosSelecionados));
                window.location.href = urlExibicao;
            });
        };
    });
};

function exibeProdutosBuscados() {
    const produtosEncontrados = JSON.parse(localStorage.getItem('produtos'));

    let cardValores = {
        img: "",
        imgAlt: "",
        nome: "",
        preco: "",
        id: ""
    };

    produtosEncontrados.forEach(item => {
        cardValores = {
            img: item.img,
            imgAlt: item.alt,
            nome: item.nome,
            preco: item.preco,
            id: item.id
        }

        let novoConteudo = document.createElement('div');
        novoConteudo.classList.add('produtos-buscados__card');
        novoConteudo.innerHTML =
        `<img src="${item.img}" class="produtos-buscados__card--imagem" alt="
        ${item.alt}">
        <h3 class="produtos-buscados__card--titulo">${item.nome}</h3>
        <span class="produtos-buscados__card--preco">${item.preco}</span>
        <a class="produtos-buscados__card--ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
        document.querySelector('.produtos-buscados__conteudo').appendChild(novoConteudo);
    });
};

buscaProdutos(inputPesquisa, 'https://gist.githubusercontent.com/brunosqr/395bd2c73af2b21e4054fdd3fd925445/raw/2d5beea079bff9e56591d2aa6f108bcca58e2e3d/db.json', 'busca.html');

exibeProdutosBuscados();
