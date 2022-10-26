import { valida, verificaLimiteDeCaracteres } from './validacao.js';

// const entradas = document.querySelectorAll('input, textarea');

// entradas.forEach(input => {
    
//     input.addEventListener('blur', evento => {
//         valida(evento.target);
//     });

//     input.addEventListener('input', evento => {
//         verificaLimiteDeCaracteres(evento.target);
//     });

//     input.addEventListener('keyup', evento => {
//         formataPreco(evento.target);
//     });
// });

const contatoForm = document.getElementById('contato__formulario')
const contatoNome = document.getElementById('contato__nome');
const contatoMensagem = document.getElementById('contato__mensagem');

contatoNome.addEventListener('blur', evento => {
    valida(evento.target);
});

contatoNome.addEventListener('input', evento => {
    verificaLimiteDeCaracteres(evento.target);
});

contatoMensagem.addEventListener('blur', evento => {
    valida(evento.target);
});

contatoMensagem.addEventListener('input', evento => {
    verificaLimiteDeCaracteres(evento.target);
});

contatoForm.addEventListener('submit', evento => {
    evento.preventDefault();

    const aviso = evento.target.querySelector('.campo__aviso');

    const enviar = enviaFormularioContato();

    if (enviar) {
        aviso.innerText = 'Mensagem enviada com sucesso';
        aviso.classList.add('campo__aviso--sucesso');

        setTimeout(() => {
            aviso.classList.remove('campo__aviso--sucesso');
            aviso.innerText = '';
        }, 3000);
    };

    contatoForm.reset();
});

function enviaFormularioContato() {
    if (contatoNome.validity.valid && contatoMensagem.validity.valid) {
        return true;
    } else {
        return false;
    };
};
