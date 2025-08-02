let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    if (!nombreAmigo) {
        alert('Por favor, escribe un nombre para añadir a la lista.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido añadido.');
        amigoInput.value = '';
        return;
    }

    amigos.push(nombreAmigo);

    const listItem = document.createElement('li');
    listItem.textContent = nombreAmigo;
    listaAmigos.appendChild(listItem);

    amigoInput.value = '';
}

function sortearAmigo() {
    const resultadoDiv = document.getElementById('resultado');
    const listaAmigosUI = document.getElementById('listaAmigos');

    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    let amigosMezclados = [...amigos];

    for (let i = amigosMezclados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosMezclados[i], amigosMezclados[j]] = [amigosMezclados[j], amigosMezclados[i]];
    }

    resultadoDiv.innerHTML = '';
    listaAmigosUI.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * amigosMezclados.length);
    const personaQueSortea = amigosMezclados[randomIndex];
    const amigoSecreto = amigosMezclados[(randomIndex + 1) % amigosMezclados.length];

    const p = document.createElement('p');
    p.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    resultadoDiv.appendChild(p);

    amigos = [];
}