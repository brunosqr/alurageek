function exibeProdutosAdmin() {

    fetch('http://localhost:3000/produtos')
    .then(response => {
        return response.json();
    })
    .then(response => {

        let cardValores = {
            img: "",
            imgAlt: "",
            nome: "",
            preco: "",
            id: "",
        }

        response.forEach(item => {
            cardValores = {
                img: item.img,
                imgAlt: item.imgAlt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.classList.add('todos-produtos__card');
            cardNovo.innerHTML =
            `<div class="todos-produtos__card--icones">
                <a class="icone__botao" href="#">
                    <img class="icone__botao--deletar" src="./assets/img/icones/icone-lixeira.svg" alt="Deletar item">
                </a>
                <a class="icone__botao" href="#">
                    <img class="icone__botao--editar" src="./assets/img/icones/icone-lapis.svg" alt="Editar item">
                </a>
            </div>
            <img class="todos-produtos__card--imagem" src="${item.img}" alt="${item.alt}">
            <h3 class="todos-produtos__card--titulo">${item.nome}</h3>
            <span class="todos-produtos__card--preco">${item.preco}</span>
            <p class="todos-produtos__card--id">#${item.id}</p>`
            document.querySelector('.todos-produtos__conteudo').appendChild(cardNovo);
        });
    });
};

exibeProdutosAdmin();
