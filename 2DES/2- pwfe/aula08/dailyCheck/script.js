// Espera que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário de contato
    const formContato = document.getElementById("form-contato");

    // Adiciona um listener para o evento de submit do formulário
    formContato.addEventListener("submit", function(event) {
        // Impede o comportamento padrão de submit do formulário
        event.preventDefault();

        // Obtém os valores inseridos pelo usuário nos campos do formulário
        const nome = document.getElementById("input-nome").value;
        const email = document.getElementById("input-email").value;
        const telefone = document.getElementById("input-telefone").value;
        const mensagem = document.getElementById("input-mensagem").value;

        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou outro destino
        // Exemplo de exibição dos dados no console
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Telefone:", telefone);
        console.log("Mensagem:", mensagem);

        // Exibe uma mensagem de sucesso após enviar o formulário
        alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");

        // Fecha o modal após enviar a mensagem
        $('#modalContato').modal('hide');

        // Limpa os campos do formulário após o envio
        formContato.reset();
    });
});
