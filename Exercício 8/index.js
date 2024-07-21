const frm = document.querySelector("form");
const respE = document.querySelector("#outErros");
const respC = document.querySelector("#outChances");
const respD = document.querySelector("#outDicas");

const erros = [];
const sorteio = Math.floor(Math.random() * 100 + 1);
const chances = 6;
//console.log(sorteio) Teste pra ver como funciona

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = frm.inNum.value;
    if(num == sorteio){
        respD.innerText = "Parabéns! O número sorteado é: " + sorteio
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(num)){
            alert("Você já tentou o número " + num + ". Tente outro.")
        }else{
            erros.push(num)
            const numErros = erros.length
            const numChances = chances - numErros

            respE.innerText = `[${numErros}] ${erros.join(", ")}` 
            respC.innerText = numChances

            if(numChances == 0){
                alert("Suas Chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respD.innerText =  `Suas chances acabaram. O número sorteado é ${sorteio}`
            }else{
                const dica = num < sorteio ? "maior" : "menor"
                respD.innerText = `O número sorteado é ${dica} que ${num}.`
            }
        }
    }
    frm.inNum.value = ""
    frm.inNum.focus()
})

frm.btNovo.addEventListener("click", () => {
    location.reload()
})