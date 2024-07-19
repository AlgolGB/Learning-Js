const frm  = document.querySelector("#incrementar");
const resp = document.querySelector("#outIncremento");
const dec = document.querySelector('#decremento')

const idade = [18, 15, 21];

//idade[1] = 15;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNum.value);

    idade.push(num);

    resp.innerText = idade;

    document.getElementById("inNum").value = "";
});

dec.addEventListener("submit", (e) => {
    e.preventDefault()

    const ultima = idade.pop();
    resp.innerText = idade;
});

