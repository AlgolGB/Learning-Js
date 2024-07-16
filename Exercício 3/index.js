const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let animais = frm.inAnimais.value;
    const anos = frm.inAnos.value;

    let resposta = ""

    for(i = 1; i <= anos; i++){
        resposta = resposta + i + 'º Ano: ' + animais + ' Animais' + '\n';
        animais = (animais * 3)
    };

    resp.innerText = resposta

});