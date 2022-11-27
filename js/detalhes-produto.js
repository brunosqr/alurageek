const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const mostraDetalhesDoProduto = () => {

    fetch('https://gist.githubusercontent.com/brunosqr/395bd2c73af2b21e4054fdd3fd925445/raw/2d5beea079bff9e56591d2aa6f108bcca58e2e3d/db.json')
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

        let produtos = response.produtos; // extraindo "produtos" do arquivo JSON

        const produtoDetalhado = produtos.find(produtos => produtos.id == id);
        cardValores = {
            categoria: produtoDetalhado.categoria,
            img: produtoDetalhado.img,
            imgAlt: produtoDetalhado.alt,
            nome: produtoDetalhado.nome,
            preco: produtoDetalhado.preco,
            descricao: produtoDetalhado.descricao,
            id: produtoDetalhado.id
        };

        let novoConteudo = document.createElement('div');
        novoConteudo.classList.add('detalhes__container');
        novoConteudo.innerHTML =
        `<img src="${produtoDetalhado.img}" alt="${produtoDetalhado.alt}" class="detalhes__imagem">
        <div class="detalhes__textos">
            <h2 class="detalhes__textos--titulo">${produtoDetalhado.nome}</h2>
            <span class="detalhes__textos--preco">${produtoDetalhado.preco}</span>
            <p class="detalhes__textos--descricao">${produtoDetalhado.descricao}</p>
        </div>`
        document.querySelector('.detalhes').appendChild(novoConteudo);

        produtos.filter(produtos => produtos.categoria == produtoDetalhado.categoria).forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                descricao: item.descricao,
                id: item.id
            };

            let novoConteudo = document.createElement('div');
            novoConteudo.classList.add('produtos-similares__card');
            novoConteudo.innerHTML =
            `<img src="${item.img}" alt="${item.alt}" class="produtos-similares__card--imagem">
            <h4 class="produtos-similares__card--titulo">${item.nome}</h4>
            <span class="produtos-similares__card--preco">${item.preco}</span>
            <a href="./detalhes-produto.html?id=${item.id}" class="produtos-similares__card--ver-produto">Ver Produto</a>`
            document.querySelector('.produtos-similares__conteudo').appendChild(novoConteudo);
        });
    });
};

mostraDetalhesDoProduto();
