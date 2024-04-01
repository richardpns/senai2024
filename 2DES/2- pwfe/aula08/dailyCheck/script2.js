// Array para armazenar as tarefas
let tarefas = [];

// Espera que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Carrega as tarefas salvas, se houver, do armazenamento local
    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
        exibirTarefas();
    }

    // Adiciona um listener para o evento de submit do formulário de criação de tarefa
    const btnCriarTarefa = document.getElementById("btnCriarTarefa");
    btnCriarTarefa.addEventListener("click", function() {
        // Obtém os valores inseridos pelo usuário nos campos do formulário
        const nome = document.getElementById("inputNomeTarefa").value;
        const dataInicio = document.getElementById("inputDataInicio").value;
        const dataFim = document.getElementById("inputDataFim").value;
        const descricao = document.getElementById("inputDescricao").value;

        // Cria um objeto com os dados da nova tarefa
        const novaTarefa = {
            nome: nome,
            dataInicio: dataInicio,
            dataFim: dataFim,
            descricao: descricao
        };

        // Adiciona a nova tarefa ao array de tarefas
        tarefas.push(novaTarefa);

        // Salva as tarefas no armazenamento local
        localStorage.setItem('tarefas', JSON.stringify(tarefas));

        // Exibe as tarefas atualizadas na página
        exibirTarefas();

        // Fecha o modal de criação de tarefa
        $('#modalCriarTarefa').modal('hide');

        // Limpa os campos do formulário após o envio
        formCriarTarefa.reset();
    });
});

// Função para exibir as tarefas na página
function exibirTarefas() {
    const containerTarefas = document.querySelector(".container-tarefas");
    containerTarefas.innerHTML = ""; // Limpa o conteúdo atual

    // Itera sobre as tarefas e cria os cards correspondentes
    tarefas.forEach(function(tarefa, index) {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${tarefa.nome}</h5>
                        <p class="card-text"><strong>Data de Início:</strong> ${tarefa.dataInicio}</p>
                        <p class="card-text"><strong>Data de Término:</strong> ${tarefa.dataFim}</p>
                        <p class="card-text"><strong>Descrição:</strong> ${tarefa.descricao}</p>
                    </div>
                </div>
            </div>
        `;
        containerTarefas.innerHTML += cardHTML;
    });
}
