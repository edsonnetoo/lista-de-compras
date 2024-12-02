import { criarItemDaLIsta } from "./criarItemDaLista.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = criarItemDaLIsta(item.value);
    listaDeCompras.appendChild(itemDaLista);
}