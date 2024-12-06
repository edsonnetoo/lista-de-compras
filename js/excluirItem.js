import { verificarListaVazia, verificarListaVaziaComprados } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("tem ceretza que deseja excluir este item?");

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaVaziaComprados(listaComprados);
    }
}

export { excluirItem };