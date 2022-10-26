import { valida, verificaLimiteDeCaracteres } from './validacao.js';

// entradas.forEach(input => {
    
//     input.addEventListener('blur', evento => {
//         evento.preventDefault();
//         valida(evento.target);
//     });

//     input.addEventListener('input', evento => {
//         evento.preventDefault();
//         verificaLimiteDeCaracteres(evento.target);
//     });
// });

const loginForm = document.getElementById('login__formulario');
const loginEmail = document.getElementById('login__email');
const loginSenha = document.getElementById('login__senha');

loginEmail.addEventListener('blur', evento => {
    valida(evento.target);
});

loginSenha.addEventListener('blur', evento => {
    valida(evento.target);
});

loginForm.addEventListener('submit', evento => {
    evento.preventDefault();

    const login = efetuaLogin();
    if (login) {
        window.location = 'menu-admin.html';
    };
});

function efetuaLogin() {
    if (loginEmail.validity.valid && loginSenha.validity.valid) {
        return true;
    } else {
        return false;
    };
};
