const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const tituloListaComprados = document.getElementById("titulo-lista-comprados");

export function verificarListaVazia(lista) {
    if (lista.childElementCount === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export function verificarListaVaziaComprados(lista) {
    if (lista.childElementCount === 0) {
        tituloListaComprados.style.display = "none";
    } else {
        tituloListaComprados.style.display = "block";
    }
}