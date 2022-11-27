function exibeProdutosAdmin() {

    fetch('https://gist.githubusercontent.com/brunosqr/395bd2c73af2b21e4054fdd3fd925445/raw/2d5beea079bff9e56591d2aa6f108bcca58e2e3d/db.json')
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

        let produtos = response.produtos; // extraindo "produtos" do arquivo JSON

        produtos.forEach(item => {
            cardValores = {
                img: item.img,
                imgAlt: item.imgAlt,
                nome: item.nome,
                preco: item.preco,
                id: item.id
            }

            let novoConteudo = document.createElement('div');
            novoConteudo.classList.add('todos-produtos__card');
            novoConteudo.innerHTML =
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
            document.querySelector('.todos-produtos__conteudo').appendChild(novoConteudo);
        });
    });
};

exibeProdutosAdmin();
