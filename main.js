const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizaTabela();
});

function addLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado.`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
            
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}