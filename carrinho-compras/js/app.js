// to do:
    //recuperar valores: nome, quantidade, valor
    // calcular o preço
    //adicionar ao carrinho
    //atualizar o valor total

let totalGeral = 0;
limpar();

function adicionar(){
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split(" - ")[0];
    let valorUnitario = produto.split(" R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    // calcular o preço
    let preco = parseFloat(valorUnitario * quantidade);

    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    if (quantidade > 0) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;
        totalGeral += preco;
    }
    document.getElementById('quantidade').value = 0;
    //atualizar valor total
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    //console.log(totalGeral);
    //console.log(quantidade);
    //console.log(valorUnitario);
    //console.log(preco);


}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 0;

}