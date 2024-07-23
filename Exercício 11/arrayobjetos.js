const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const pessoas = [{name: "Yago", age: 30}, {name: "José", age: 35}, {name: "Antônio", age: 67} ]

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //const name = frm.inNome.value
    //const age = Number(frm.inIdade.value)

    const pessoas2 = pessoas.map(aux => ({name: aux.name, nasc: 2024 - aux.age}))

    let  resposta = ""

    for(const pessoa of pessoas2){

        resposta = resposta + `${pessoa.name}, Nasceu em ${pessoa.nasc} \n`
        resp.innerText = resposta
    }
    
})