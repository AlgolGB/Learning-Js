const frm = document.querySelector("form");
const resp1 = document.querySelector("#lista");
const resp2 = document.querySelector("#outLista");

const compras = [" tomate", " pepino", " frango", " pasta dental", " café", " arroz", " feijão", " alface", " sabão em pó", " massa de tomate"];

resp1.innerText = compras;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNum.value);

    //const num = -1;
    //const itens = compras.slice(num);

    const itens = compras.splice(0, num);
    
    resp2.innerText = compras;
    
    document.getElementById("inNum").value = "";
});
