import { adicionarData } from "./adicionarData.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        if (elemento.querySelector(".texto-data") === null) {
            adicionarData(elemento);
        } else {
            elemento.querySelector(".texto-data").remove();
            adicionarData(elemento);
        }
        
        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
    }
    
}