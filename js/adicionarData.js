export function adicionarData(item) {
    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric", second: "numeric"})}`;
    if (document.getElementById("data") === null) {
        itemData.setAttribute("id", "data");
        itemData.classList.add("texto-data");
    
        return item.appendChild(itemData);
    } else {
        const paragrafo = document.getElementById("data");
        const novaData = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric", second: "numeric"})}`;
        paragrafo.innerHTML = novaData;

    }

    
    
    
}
