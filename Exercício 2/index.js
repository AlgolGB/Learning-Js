const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""
let numContas = 0
let valTotal = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const desc = frm.inDesc.value
    const preco = Number(frm.inPreco.value)

    numContas++

    valTotal = valTotal + preco
    resposta = resposta + desc + ' - R$ ' + preco.toFixed(2) + '\n'

    resp1.innerText = resposta + '-------------------------------'
    resp2.innerText = numContas + ' Conta(s) totalizando R$ ' + valTotal
    
    frm.inDesc.value = ""
    frm.inPreco.value = ""
    frm.inDesc.focus()

})