const frm = document.querySelector("form")
const resp = document.querySelector("#outAno")
const resp1 = document.querySelector("#outC")

const pessoas = [{name: "Yago", age: 30}, {name: "José", age: 35}, {name: "Antônio", age: 67}, {name: "Lucas", age: 9}, {name: "Jéssica", age: 17}, {name: "Rodrigo", age: 12}, {name: "Marcelo", age: 12}]

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //const name = frm.inNome.value
    //const age = Number(frm.inIdade.value)

    const pessoas2 = pessoas.map(aux => ({name: aux.name, nasc: 2024 - aux.age}))
    //const pessoas3 = pessoas.filter(aux => aux.age <= 18 && aux.name.includes("z"))
    const pessoas4 = pessoas.reduce((a, pessoa) => Math.max(a,pessoa.age),0)

    let  resposta = ""
    let filtro = ""

    for(const pessoa of pessoas2){
        resposta = resposta + `${pessoa.name}, Nasceu em ${pessoa.nasc} \n`
        resp.innerText = resposta
    }
    //for(const pessoa of pessoas3){
    //        filtro += pessoa.name + "\n"
    //        resp1.innerText = filtro
    //}
    //if(pessoas3.length == 0){
    //    resp1.innerText = `Não há pessoas com condições desejadas`
    //}

    resp1.innerText = `A maior idade é ${pessoas4}`
    
})