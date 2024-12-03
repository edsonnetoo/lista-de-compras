import { criarItemDaLIsta } from "./criarItemDaLista.js";
import { adicionarData } from "./adicionarData.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = criarItemDaLIsta(item.value, listaDeCompras);
    listaDeCompras.appendChild(itemDaLista);
    adicionarData(itemDaLista);
    verificarListaVazia(listaDeCompras);
}