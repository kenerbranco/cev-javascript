function contar() {

    function resultadoC() {
        res.innerHTML = `Contando:<br>`
        for (valorini; valorini <= valorfim; valorini += valorpas) {
            res.innerHTML += ` ${valorini} &#x1F449;`
        }
        res.innerHTML += ` &#x1F3C1;`
    }

    function resultadoD() {
        res.innerHTML = `Contando:<br>`
        for (valorini; valorini >= valorfim; valorini -= valorpas) {
            res.innerHTML += ` ${valorini} &#x1F449;`
        }
        res.innerHTML += ` &#x1F3C1;`
    }

    var txti = window.document.getElementById('txti')
    var txtf = window.document.getElementById('txtf')
    var txtp = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerText = 'Impossível contar! Preencha todos os campos'
    } else {
        var valorini = Number(txti.value)
        var valorfim = Number(txtf.value)
        var valorpas = Number(txtp.value)
        
        if (valorpas == 0) {
            valorpas = 1
            window.alert('Impossível passo ser 0, logo passo será considerado 1')
            if (valorini < valorfim) {
                resultadoC()
            } else if (valorini > valorfim) {
                resultadoD()
            }
        } else if (valorini > valorfim && valorpas > 0) {
            resultadoD()
        } else if (valorini < valorfim && valorpas > 0) {
            resultadoC()
        } else if (valorini > valorfim && valorpas < 0) {
            valorpas *= (-1)
            resultadoD()
        } else if (valorini < valorfim && valorpas < 0) {
            valorpas *= (-1)
            resultadoC()
        }
    }
}