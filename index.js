document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let mensagemSucesso = document.getElementById('mensagemSucesso');

    if (nome && email && mensagem) {
        mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.';
        document.getElementById('contactForm').reset();  // Reseta o formulário após o envio
    } else {
        mensagemSucesso.textContent = 'Por favor, preencha todos os campos.';
    }
});