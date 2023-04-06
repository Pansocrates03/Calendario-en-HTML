// Variables
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
const dias_del_mes = {
    Enero: 31,
    Febrero: 28,
    Marzo: 31,
    Abril: 30,
    Mayo: 31,
    Junio: 30,
    Julio: 31,
    Agosto: 31,
    Septiembre: 30,
    Octubre: 31,
    Noviembre: 30,
    Diciembre: 31
}


const t = new Date()

let titulo = document.getElementsByClassName("mes")[0]
let btn = Array.from(document.getElementsByTagName("button"))
let dias = Array.from(document.getElementsByTagName("td"))

let a_mes = t.getMonth()
let a_año = t.getFullYear()

function orderDays() {

    titulo.innerText = meses[a_mes] + " " + a_año

    let p_dia = new Date(a_año, a_mes, 1).getDay()
    let u_dia = dias_del_mes[meses[a_mes]]

    if (a_mes == 1 && a_año % 4 == 0) {
        u_dia = 29
    }



    let i = 0
    let a = 1
    var lol = "false";
    dias.forEach(element => {
        if (p_dia == i) {
            lol = "true"
        }
        if (lol == "true" && a <= u_dia) {
            element.innerText = a
            a++
            element.style.backgroundColor="#f5ebe0"
            element.style.borderColor="#d6ccc2"
        } else {
            element.innerText = " "
            element.style.backgroundColor="#edede9"
            element.style.borderColor="#edede9"
        }

        i++
    });
}

orderDays()



btn.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "<":
                a_mes = a_mes - 1
                if (a_mes < 0) {
                    a_mes = 11
                    a_año = a_año - 1
                }

                orderDays()
                break;
            case ">":
                a_mes = a_mes + 1
                if (a_mes > 11) {
                    a_mes = 0
                    a_año = a_año + 1
                }

                orderDays()
                break;
            case "<<":
                a_año = a_año - 1
                orderDays()
                break;
            case ">>":
                a_año++
                orderDays()

        }


    })
})