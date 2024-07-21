const frm = document.querySelector("form")
const resp1 = document.querySelector("#outSorteio")
const resp2 = document.querySelector("#outSorteados")

const hist = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let sorteado = 100
    
    while(sorteado > 20){
        sorteado = Math.floor(Math.random() * 100 + 1)
    }
    hist.push(sorteado)

resp1.innerText = sorteado
resp2.innerText = `Números já sorteados: ${hist.join(", ")}`
})