//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        nomeInput.value = ''; // Limpa o campo de input
        atualizarListaAmigos();
    } else {
        alert('Por favor, digite um nome valido!');
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa de pelo menos 2 amigos para fazer o sorteio!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Sorteia um nome aleatório da lista
    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];

    // Exibe o resultado do sorteio
    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultado.appendChild(li);

   
}
function reiniciar() {
    
    
const confirmarReinicio = confirm('Tem certeza de que deseja reiniciar? \n  Isso apagará a sua lista!');
    if (confirmarReinicio) {
        window.location.reload(true); // Recarrega a página completamente, ignorando cache
    }
}


