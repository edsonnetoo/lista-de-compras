import { criarItemDaLIsta } from "./criarItemDaLista.js";
import { adicionarData } from "./adicionarData.js";
import { verificarListaVazia, verificarListaVaziaComprados } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

verificarListaVaziaComprados(listaComprados);

export function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = criarItemDaLIsta(item.value, listaDeCompras);
    listaDeCompras.appendChild(itemDaLista);
    adicionarData(itemDaLista);
    verificarListaVazia(listaDeCompras);
}