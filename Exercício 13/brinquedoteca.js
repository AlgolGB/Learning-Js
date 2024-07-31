const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const alunos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    alunos.push({nome, idade})

    frm.inNome.value = ""
    frm.inIdade.value = ""
    inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})
frm.btListar.addEventListener("click", () => {
    if(alunos.length == 0){
        alert("Não Há crianças na lista")
        return
    }
    let lista = ""
    for(aluno of alunos){
        lista = alunos.reduce((acumulador, aluno) => acumulador + aluno.nome + " - " + aluno.idade + " anos \n", "")
        resp.innerText = lista
    }
})
frm.btResumir.addEventListener("click", () => {
    if(alunos.length == 0){
        alert("Não há crianças na lista")
        return
    }
    const copia = [...alunos]
    copia.sort((a, b) => a.idade - b.idade) //a.idade - b.idade calcula a diferença entre as idades dos dois elementos; se o resultado for negativo, a vem antes de b; se for positivo, b vem antes de a; se for zero, os elementos permanecem na mesma ordem.
    let resumo = ""
    let aux = copia[0].idade
    let nomes = []
    for(const aluno of copia){
        const {nome, idade} = aluno
        if(idade == aux){
            nomes.push(nome)
        }else{
            resumo = resumo + aux + " ano(s): " + nomes.length + " criança(s) - " + ((nomes.length/copia.length)*100).toFixed(2) + "%\n" + "(" + nomes.join(", " ) + " )\n\n"
            aux = idade
            nomes = []
            nomes.push(nome)
        }
    }
    resumo = resumo + aux + " ano(s): " + nomes.length + " criança(s) - " + ((nomes.length/copia.length)*100).toFixed(2) + "%\n" + "(" + nomes.join(", " ) + " )\n\n"
    resp.innerText = resumo
})