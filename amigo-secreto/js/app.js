let amigos = [];

function adicionar() {

    let amigoInput = document.getElementById('nome-amigo').value.trim();
    let amigo = amigoInput.charAt(0).toUpperCase() + amigoInput.slice(1).toLowerCase();
    
    let lista = document.getElementById('lista-amigos');
    
    if (amigo == ''){
        alert('Por favor, informe o nome do amigo!');
        document.getElementById('nome-amigo').focus();
        return false;
    } else {
        if (amigos.includes(amigo)) {
            alert('Amigo já cadastrado!');
            document.getElementById('nome-amigo').focus();
            return false;
        } else {
            amigos.push(amigo);
            if (lista.textContent == '') {
                lista.textContent += `${amigo}`;
            } else {
                lista.textContent += `, ${amigo}`;
            }
        }
    }

    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus();
    
    return false;
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus();
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
    return false;
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear(){
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    if (amigos.length == 0) {
        alert('Nenhum amigo cadastrado!');
        return;
    } else if (amigos.length < 3) {
        alert('É necessário pelo menos 3 amigos para realizar o sorteio!');
        return;
    } else {
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
    }
}