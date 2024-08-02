const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const alunos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const nota = Number(frm.inNota.value)

    alunos.push({nome, nota})
    frm.reset()
    frm.inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})
frm.btListar.addEventListener("click", () => {
    let lista = ""

    if(alunos.length == 0){
        alert("Não há cadastros")
        return
    }else{
        for(aluno of alunos){
            const {nome, nota} = aluno
            lista = lista + nome + " - Nota: " + nota + "\n"
        }
        resp1.innerText = `Aluno cadastrado com sucesso\n${"-".repeat(40)}\n${lista}` 
    }
})
frm.btFiltro.addEventListener("click", () =>{
    const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
    resp1.innerText = `A maior nota é ${maior}`
    let nomesDestaques = ""
    if(maior >= 7){
        const destaques = alunos.filter(aluno => aluno.nota == maior)
        for(const aluno of destaques){
            nomesDestaques = nomesDestaques + aluno.nome + ", "
            resp2.innerText = `Alunos que tiraram esta nota ${nomesDestaques}`
        }
    }else{
        resp2.innerText = `Não há destaques na turma`
    }
})