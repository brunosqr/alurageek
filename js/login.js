import { validaCampos } from './validacao.js';

const loginForm = document.getElementById('login__formulario');
const loginEmail = document.getElementById('login__email');
const loginSenha = document.getElementById('login__senha');

loginEmail.addEventListener('blur', evento => {
    validaCampos(evento.target);
});

loginSenha.addEventListener('blur', evento => {
    validaCampos(evento.target);
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
