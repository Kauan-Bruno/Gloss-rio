// === SEU GLOSSÁRIO - EDITE AQUI! ===
// Adicione ou remova objetos conforme necessário
const glossario = [
    {
        palavra: "Social",
        descricao: "Relativo à sociedade ou à interação entre pessoas. Ex: redes sociais, comportamento social."
    },
    {
        palavra: "Implementação",
        descricao: "Ato de colocar em prática um plano, ideia ou sistema. Em programação, é escrever o código que faz algo funcionar."
    },
    {
        palavra: "HTML",
        descricao: "HyperText Markup Language - linguagem de marcação usada para estruturar conteúdo na web (como este site!)."
    },
    {
        palavra: "Two Trucks",
        descricao: "Música meme viral do Lemon Demon. 'Two trucks having sex...' – famosa por ser absurda e engraçada."
    },
    {
        palavra: "ID",
        descricao: "Identificador único. Em HTML, usado com # para selecionar um elemento específico (ex: #header)."
    },
    {   palavra: "Java",
        descricao: "JavaScript é a linguagem de programação da web.Ela faz seu site interativo: botões que funcionam, animações, formulários, jogos... tudo isso é JavaScript!"

    }
    
    
    // ADICIONE MAIS AQUI! Exemplo:
    // { palavra: "API", descricao: "Interface que permite comunicação entre sistemas." },
];

// === Função para criar os cards ===
function criarGlossario() {
    const container = document.getElementById('glossario-container');

    glossario.forEach(item => {
        // Criar o card
        const card = document.createElement('div');
        card.className = 'termo';

        // Título
        const titulo = document.createElement('h2');
        titulo.textContent = item.palavra;

        // Descrição
        const desc = document.createElement('p');
        desc.textContent = item.descricao;

        // Adicionar ao card
        card.appendChild(titulo);
        card.appendChild(desc);

        // Adicionar evento de clique (expandir)
        card.addEventListener('click', () => {
            card.classList.toggle('aberto');
        });

        // Adicionar ao container
        container.appendChild(card);
    });
}

// Executar quando a página carregar
window.onload = criarGlossario;