const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const model = frm.inModel.value
    const price = Number(frm.inPrice.value)

    carros.push({modelo: model, preco: price})

    for(const carro of carros){
        resp.innerText = `${carro.modelo} - ${carro.preco}`
    }
})