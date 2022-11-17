const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const mostraDetalhesDoProduto = () => {

    fetch('http://localhost:3000/produtos')
    .then(response => {
        return response.json();
    })
    .then(response => {
        let cardValores = {
            categoria: "",
            img: "",
            imgAlt: "",
            nome: "",
            preco: "",
            descricao: "",
            id: ""
        }

        const produtoDetalhado = response.find(response => response.id == id);
        cardValores = {
            categoria: produtoDetalhado.categoria,
            img: produtoDetalhado.img,
            imgAlt: produtoDetalhado.alt,
            nome: produtoDetalhado.nome,
            preco: produtoDetalhado.preco,
            descricao: produtoDetalhado.descricao,
            id: produtoDetalhado.id
        };

        let cardNovo = document.createElement('div');
        cardNovo.classList.add('detalhes__container');
        cardNovo.innerHTML =
        `<img src="${produtoDetalhado.img}" alt="${produtoDetalhado.alt}" class="detalhes__imagem">
        <div class="detalhes__textos">
            <h2 class="detalhes__textos--titulo">${produtoDetalhado.nome}</h2>
            <span class="detalhes__textos--preco">${produtoDetalhado.preco}</span>
            <p class="detalhes__textos--descricao">${produtoDetalhado.descricao}</p>
        </div>`
        document.querySelector('.detalhes').appendChild(cardNovo);

        response.filter(response => response.categoria == produtoDetalhado.categoria).forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                descricao: item.descricao,
                id: item.id
            };

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produtos-similares__card');
            cardNovo.innerHTML =
            `<img src="${item.img}" alt="${item.alt}" class="produtos-similares__card--imagem">
            <h4 class="produtos-similares__card--titulo">${item.nome}</h4>
            <span class="produtos-similares__card--preco">${item.preco}</span>
            <a href="./detalhes-produto.html?id=${item.id}" class="produtos-similares__card--ver-produto">Ver Produto</a>`
            document.querySelector('.produtos-similares__conteudo').appendChild(cardNovo);
        });
    });
};

mostraDetalhesDoProduto();