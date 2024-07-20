const frm  = document.querySelector("form");
const resp1 = document.querySelector("span");
const resp2 = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    pacientes.push(nome);
    let lista = "";
    
    for(let i = 0; i < pacientes.length; i++){
        lista += i + 1 + '. ' + pacientes[i] + "\n";
    };

    resp2.innerText = lista;
    frm.inNome.value = "";
    frm.inNome.focus();
});

frm.btUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inNome.focus();
        return;
    };
    const nomeUr = frm.inNome.value;
    pacientes.unshift(nomeUr);
    let lista = "";
    pacientes.forEach((paciente, i ) => (lista += (i+1) + '. ' + paciente + '\n'));
    resp2.innerText = lista;
    frm.inNome.value = "";
    frm.inNome.focus();
});

frm.btAtender.addEventListener("click", () => {
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focues();
        return;
    }
    const atender = pacientes.shift();
    resp1.innerText = atender;
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += (i + 1) + '. ' + paciente + '\n'));
    resp2.innerText = lista;
});

