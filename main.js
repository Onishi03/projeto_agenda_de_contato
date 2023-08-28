const form = document.getElementById('form-agenda');
const nome = [];
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicinaContato();
    atualizaContato();
})

function adicinaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        contatos.push(parseInt(inputTelefoneContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}
    function atualizaContato() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
