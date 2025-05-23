function alterarStatus(cod){

    let jogo = document.getElementById(`game-${cod}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');

    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
    }

}