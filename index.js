const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)

    let divi = 0

    for(let index = 0; index <= num; index++) {
        if(num % index == 0){
            divi++
        }
    }

    if(divi == 2) {
        resp1.innerText = num + ' é um número primo'
    }else{
        resp1.innerText = num + ' não é um número primo'
    }
})