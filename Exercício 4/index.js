const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDivisores");
const resp2 = document.querySelector("#outPerfeito");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let resposta = ""
    let acumula = 0

    for(i = 1; i < num; i++ ){
        if(num % i == 0){
            acumula = acumula + i 
            if(i >= 2){
                resposta = resposta + (num / i) + ", ";
            }
        }
    };

    resp1.innerText = 'Divisores de ' + num + ': ' + resposta + ' (soma: ' + acumula + ')'

    if(acumula == num){
       resp2.innerText = num + ' é um número perfeito'
    }else{
        resp2.innerText = num + ' não é um número perfeito'
    }
});