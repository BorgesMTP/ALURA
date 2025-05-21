function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (quantidade > (ate - de)){
        alert('A quantidade de números a sortear é maior do que o intervalo selecionado. Tente novamente.');
        reiniciar();
    } else {

        let sorteados = [];
        let numero;

        for (let i = 0; i < quantidade; i++) {
        
            do {
                numero = obterNumeroAleatorio(de, ate);
            } while (sorteados.includes(numero))

            sorteados.push(numero);
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        alterarStatusBotao();
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    
}

function alterarStatusBotao(){
    let reset = document.getElementById('btn-reiniciar');
    if (reset.classList.contains('container__botao-desabilitado')) {
        reset.classList.remove('container__botao-desabilitado');
        reset.classList.add('container__botao');
    } else {
        reset.classList.remove('container__botao');
        reset.classList.add('container__botao-desabilitado');
    }
}