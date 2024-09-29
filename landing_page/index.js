const btEnviar   = document.querySelector('.btEnviar');
const nome       = document.querySelector('#nome');
const email      = document.querySelector('#email');
const assunto    = document.querySelector('#assunto');
const mensagem   = document.querySelector('#Mensagem');

btEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    const msg = `Nome: ${nome.value}\nEmail: ${email.value}\nAssunto: ${assunto.value}\nMensagem: ${Mensagem.value}`;
    alert(msg);
})
