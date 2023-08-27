const form = document.getElementById('form-agenda');
const nome = [];
const contato = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaContato();
})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputContato = document.getElementById('numero-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`);
    } else {

    nome.push(inputNomeContato.value);
    contato.push(parseInt(inputContato.value));

    let linha = '<tr>';
    linhas += `<td>${inputNomeContato.value}</td>`;
    linhas += `<td>${inputContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputContato.value = '';
}

function atualizaContato() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}