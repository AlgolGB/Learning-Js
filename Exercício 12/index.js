const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const cars = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const model = frm.inModel.value
    const price = Number(frm.inPrice.value)

    cars.push({model, price})

    frm.inModel.value = ""
    frm.inPrice.value = ""
    inModel.focus()

    frm.btListar.dispatchEvent(new Event("click")) //Cria um evento de clicar na página
})

frm.btListar.addEventListener("click", () => {
    if(cars.length == 0){
        alert("Não há carros incluídos na lista")
        return
    }
    const lista = cars.reduce((acumulador, car) => acumulador + car.model + " - R$: " + car.price.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados \n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

    if(maximo == 0 || isNaN(maximo)){
        return
    }
    const carsFilter = cars.filter(car => car.price <= maximo)
    if(carsFilter.length == 0){
        alert("Não há carros que possuam as condições desejadas")
        return
    }
    let lista = ""
    for(const car of carsFilter){
        lista = lista + `${car.model} - R$: ${car.price.toFixed(2)}\n`
    }
    resp.innerText = `Carros até R$ ${maximo.toFixed(2)}\n ${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", () => {
    const discount = Number(prompt("Percentual de desconto: "))
    if(discount == 0 || isNaN(discount)){
        return
    }

    const carsDiscount = cars.map(aux => ({model: aux.model, price: aux.price - (aux.price * discount/100)}))
    let lista = ""
    for(const car of carsDiscount){
        lista = lista + `${car.model} - R$ ${car.price.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto ${discount}%\n ${"-".repeat(40)}\n${lista}`
})
