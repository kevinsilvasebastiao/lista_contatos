//criação da variavel form puchando o formulario do html
const form = document.getElementById('formulario_contatos');
//criação de variavel linhas 
let linhas = '';
//inicio da função que é iniciado toda vez que tem um evento do tipo submit
form.addEventListener('submit', function(e){
    e.preventDefault();

    //toda vez que o evento for chamando tambem ira chama o evento adiciona linha   
    adicionaLinha();

    //toda vez que o evento for chamando tambem ira chama o evento atualiza tabela   
    adicionaTabela();
});

function adicionaLinha(){
        //variaveis nome e numero vindo via id do html
        const inputNome = document.getElementById('nome-contato');
        const inputNumero = document.getElementById('numero-contato');
    
    
        //variavel linha que é incrementada por outras variaveis nome e numero 
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
        
        //zerando o campos após o uso 
        inputNome.value = '';
        inputNumero.value = '';
}

function adicionaTabela(){
        //variavel puchando o elemento tboddy do html
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
}