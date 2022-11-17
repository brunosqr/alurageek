function exibeProdutos() {
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
            id: ""
        }

        response.filter(response => response.categoria == 'star wars').forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produto');
            cardNovo.innerHTML =
            `<img src="${item.img}" class="produto__imagem" alt="
            ${item.alt}">
            <h3 class="produto__titulo">${item.nome}</h3>
            <span class="produto__preco">${item.preco}</span>
            <a class="produto__ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
            document.querySelector('[data-tipo="star-wars"]').appendChild(cardNovo);
        });

        response.filter(response => response.categoria == 'consoles').forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produto');
            cardNovo.innerHTML =
            `<img src="${item.img}" class="produto__imagem" alt="
            ${item.alt}">
            <h3 class="produto__titulo">${item.nome}</h3>
            <span class="produto__preco">${item.preco}</span>
            <a class="produto__ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
            document.querySelector('[data-tipo="consoles"]').appendChild(cardNovo);
        });

        response.filter(response => response.categoria == 'diversos').forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('produto');
            cardNovo.innerHTML =
            `<img src="${item.img}" class="produto__imagem" alt="
            ${item.alt}">
            <h3 class="produto__titulo">${item.nome}</h3>
            <span class="produto__preco">${item.preco}</span>
            <a class="produto__ver-produto" href="./detalhes-produto.html?id=${item.id}">Ver produto</a>`
            document.querySelector('[data-tipo="diversos"]').appendChild(cardNovo);
        });
    })
};

exibeProdutos();