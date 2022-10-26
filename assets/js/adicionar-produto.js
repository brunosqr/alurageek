import { formataPreco, valida, validaSeletor, verificaLimiteDeCaracteres } from './validacao.js';

const addProdutoForm = document.querySelector('.adicionar-produto__formulario');
const addImagemArea = document.querySelector('.adicionar-imagem__drag-and-drop');
// const addImagemDrop = document.querySelector('.adicionar-imagem__drag-and-drop--input');
const addImagemTexto = document.querySelector('.adicionar-imagem__drag-and-drop--texto');
const addImagemBotao = document.querySelector('.adicionar-imagem__dispositivo--input');
const seletorCategoria = document.getElementById('produto__categoria');
const produtoNome = document.getElementById('produto__nome');
const produtoPreco = document.getElementById('produto__preco');
const produtoDescricao = document.getElementById('produto__descricao');
let imagem;

// Adicionar imagem
function mostraImagem() {
    let tipoDeImagem = imagem.type;
    let extensoesAceitas = ['image/jpg', 'image/jpeg', 'image/png'];
    if (extensoesAceitas.includes(tipoDeImagem)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let imagemURL = fileReader.result;
            let imgTag = `<img src="${imagemURL}" id="imagem-carregada">`;
            addImagemArea.style.padding = 0;
            addImagemArea.innerHTML = imgTag;
            document.querySelector('.adicionar-imagem__drag-and-drop--input').value = imagemURL;
        };
        fileReader.readAsDataURL(imagem);
    } else {
        alert('Formato de imagem inválido. Formatos aceitos: jpeg/jpg e png.');
        addImagemArea.classList.remove('active');
        addImagemTexto.textContent = 'Arraste para adicionar uma imagem para o produto';
    };
};

// Ao segurar a imagem sobre a área
addImagemArea.addEventListener('dragover', evento => {
    evento.preventDefault();
    addImagemArea.classList.add('active');
    addImagemTexto.textContent = 'Solte para carregar o arquivo';
});

// Ao tirar a imagem segurada da área
addImagemArea.addEventListener('dragleave', () => {
    addImagemArea.classList.remove('active');
    addImagemTexto.textContent = 'Arraste para adicionar uma imagem para o produto';
});

// Ao soltar a imagem sobre a área
addImagemArea.addEventListener('drop', evento => {
    evento.preventDefault();
    imagem = evento.dataTransfer.files[0];
    mostraImagem();
});

// Carregando imagem do dispositivo
addImagemBotao.addEventListener('change', () => {
    imagem = addImagemBotao.files[0];
    addImagemArea.classList.add('active');
    mostraImagem();
});
// Fim adicionar imagem

// campos.forEach(campo => {
//     campo.addEventListener('blur', evento =>
//     valida(evento.target));

//     if (campo.getAttribute('maxLength')) {
//         campo.addEventListener('campo', evento =>
//         verificaLimiteDeCaracteres(evento.target));
//     };
// })

addProdutoForm.addEventListener('submit', evento => {
    evento.preventDefault();
    
    // validaAddImagem(evento.target);

    const aviso = evento.target.querySelector('.campo__aviso');

    const adicionar = adicionaNovoProduto();

    if (adicionar) {
        aviso.innerText = 'Produto adicionado com sucesso';
        aviso.classList.add('campo__aviso--sucesso');

        setTimeout(() => {
            aviso.classList.remove('campo__aviso--sucesso');
            aviso.innerText = '';
        }, 3000);
    };

    addProdutoForm.reset();
});

function adicionaNovoProduto() {

    let campos = document.querySelectorAll('.adicionar-produto__formulario input, .adicionar-produto__formulario select, .adicionar-produto__formulario textarea');

    let campoInvalido = 0;

    campos.forEach(campo => {
        if (!campo.validity.valid) {
            campoInvalido++;
        };
    });

    if (campoInvalido > 0) {
        return false;
    } else {
        return true;
    };

    // if (addImagemArea.children[0].id === 'texto') {
    //     return false;
    // } else {
    //     return true;
    // };
};

seletorCategoria.addEventListener('blur', evento => {
    validaSeletor(evento.target);
});

produtoNome.addEventListener('blur', evento => {
    valida(evento.target);
});

produtoNome.addEventListener('input', evento => {
    verificaLimiteDeCaracteres(evento.target);
});

produtoPreco.addEventListener('blur', evento => {
    valida(evento.target);
});

produtoPreco.addEventListener('input', evento => {
    formataPreco(evento.target);
});

produtoDescricao.addEventListener('blur', evento => {
    valida(evento.target);
});

produtoDescricao.addEventListener('input', evento => {
    verificaLimiteDeCaracteres(evento.target);
});
