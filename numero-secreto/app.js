//declarando variáveis globais

let tentativas = 0;
let listaDeNumerosSorteados = [];

//declarando funções

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
    //let titulo = document.querySelector('h1');                |
    //titulo.innerHTML = 'Jogo do número secreto';              |
    //                                                          | Jeito tradicional de se fazer a exibição de texto
    //let paragrafo = document.querySelector('p');              | e, acima, o jeito utilizando função.
    //paragrafo.innerHTML = 'Insira um número de 1 a 10.';      |

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    console.log(`O número secreto é ${numeroSecreto}`);
    console.log(`Lista de números sorteados: ${listaDeNumerosSorteados}`)
    let chute = document.querySelector('input').value;
    console.log(`o chute foi  ${chute}`);
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        tentativas++;
        exibirTexto('p', `Parabéns, você acertou com ${tentativas} tentativas!`);
        console.log(`tentativas: ${tentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é MENOR que o chute.');
            tentativas++;
            console.log(`tentativas: ${tentativas}`);
            limparCampo();
        } else {
            exibirTexto('p', 'O número secreto é MAIOR que o chute.');
            tentativas++;
            console.log(`tentativas: ${tentativas}`);
            limparCampo();
        }
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTexto('p', 'Selecione um número de 1 a 10!');
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//executando o programa

let numeroSecreto = gerarNumeroAleatorio();

exibirTexto('h1', 'Jogo do Número secreto');
exibirTexto('p', 'Selecione um número de 1 a 10!');

