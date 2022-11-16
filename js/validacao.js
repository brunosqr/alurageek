export function validaCampos(input) {

    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove('campo__invalido');
        input.parentElement.querySelector('.campo__erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('campo__invalido');
        input.parentElement.querySelector('.campo__erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    };   
};

export function validaSeletor(input) {

    if (input.validity.valid) {
        input.parentElement.parentElement.classList.remove('campo__invalido');
        input.parentElement.querySelector('.campo__erro').innerHTML = '';
    } else {
        input.parentElement.parentElement.classList.add('campo__invalido');
        input.parentElement.querySelector('.campo__erro').innerHTML = 'É preciso escolher uma categoria.';
    };  
};

export function verificaLimiteDeCaracteres(input) {

    if (input.value.length < input.maxLength) {
        input.parentElement.classList.remove('campo__invalido');
        input.parentElement.querySelector('.campo__erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('campo__invalido');
        input.parentElement.querySelector('.campo__erro').innerHTML = `Limite de ${input.maxLength} caracteres atingido.`;
    };
};

export function formataPreco() {

    let precoId = document.getElementById('produto__preco');
    let preco = precoId.value;

    preco = preco + '';
    preco = parseInt(preco.replace(/[\D]+/g, ''));
    preco = preco + '';
    preco = preco.replace(/([0-9]{2})$/g, ",$1");

    if (preco.length > 6) {
        preco = preco.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    };

    precoId.value = preco;
    if(preco == 'NaN') precoId.value = '';
};

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const campoVazio = 'O campo não pode estar vazio.';

const mensagensDeErro = {
    contatoNome: {
        valueMissing: campoVazio,
    },
    contatoMensagem: {
        valueMissing: campoVazio,
    },
    loginEmail: {
        valueMissing: campoVazio,
        typeMismatch: 'O email digitado não é válido.'
    },
    loginSenha: {
        valueMissing: campoVazio,
        patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, pelo menos uma letra maiúscula e uma minúscula, um número e não deve conter símbolos.'
    },
    produtoNome: {
        valueMissing: campoVazio,
    },
    produtoPreco: {
        valueMissing: campoVazio
    },
    produtoDescricao: {
        valueMissing: campoVazio,
    }
};

function mostraMensagemDeErro(tipoDeInput, input) {

    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        };
    });

    return mensagem;
};
