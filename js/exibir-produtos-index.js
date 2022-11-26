function exibeProdutosIndex() {
    
    fetch('https://gist.githubusercontent.com/brunosqr/395bd2c73af2b21e4054fdd3fd925445/raw/24fa0b8a71dcf866aa0e3d68d8391161e4130168/db.json')
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
            id: ""
        }

        let produtos = response.produtos; // extraindo "produtos" do arquivo JSON

        produtos.filter(produtos => produtos.categoria == 'star wars').forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produtos__card');
            cardNovo.innerHTML =
            `<img src="${item.img}" class="produtos__card--imagem" alt="
            ${item.alt}">
            <h3 class="produtos__card--titulo">${item.nome}</h3>
            <span class="produtos__card--preco">${item.preco}</span>
            <a class="produtos__card--ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
            document.querySelector('[data-tipo="star-wars"]').appendChild(cardNovo);
        });

        produtos.filter(produtos => produtos.categoria == 'consoles').forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produtos__card');
            cardNovo.innerHTML =
            `<img src="${item.img}" class="produtos__card--imagem" alt="
            ${item.alt}">
            <h3 class="produtos__card--titulo">${item.nome}</h3>
            <span class="produtos__card--preco">${item.preco}</span>
            <a class="produtos__card--ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
            document.querySelector('[data-tipo="consoles"]').appendChild(cardNovo);
        });

        produtos.filter(produtos => produtos.categoria == 'diversos').forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produtos__card');
            cardNovo.innerHTML =
            `<img src="${item.img}" class="produtos__card--imagem" alt="
            ${item.alt}">
            <h3 class="produtos__card--titulo">${item.nome}</h3>
            <span class="produtos__card--preco">${item.preco}</span>
            <a class="produtos__card--ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
            document.querySelector('[data-tipo="diversos"]').appendChild(cardNovo);
        });
    })
};

exibeProdutosIndex();
