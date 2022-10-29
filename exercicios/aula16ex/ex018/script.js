function arrayCad(num) {
    array.push(num)
}

function soma() {
    let s = 0
    for (let pos in array) {
        s += array[pos]
    }
    return s
}

function media(val) {
    let m = val / (array.length)
    return m
}

function adicionar() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('txtcad')
    let res = window.document.getElementById('res')
    let n = Number(num.value)

    res.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('Digite um número para ser adicionado na lista.')
    } else if (n < 1 || n > 100) {
        window.alert('Digite um número entre 0 à 100.')
    } else {
        ver_num = array.indexOf(n) /* Verificação se num já existe na array */
        if (ver_num != (-1)) {
            window.alert('Este número já foi adicionado, tente outro valor.')
        } else {
            arrayCad(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            item.value = `tab${n}` /* Linha para PHP */
            tab.appendChild(item)
        }
    }
}

function finalizar() {
    if (array.length == 0) {
        window.alert('Cadastro vazio, adicione os valores.')
    } else {
        let res = window.document.getElementById('res')
        let s = soma()
        let m = media(s).toFixed(2).replace('.', ',')

        res.innerHTML = 'Resultado da análise:<br>'
        res.innerHTML += `<p>-> [ ${array.length} ] <strong>Total</strong> números digitados</p>`
        res.innerHTML += `<p>-> [ ${Math.min(...array)} ] <strong>Menor</strong> número digitado</p>`
        res.innerHTML += `<p>-> [ ${Math.max(...array)} ] <strong>Maior</strong> número digitado</p>`
        res.innerHTML += `<p>-> [ ${s} ] <strong>Soma</strong> números digitados</p>`
        res.innerHTML += `<p>-> [ ${m} ] <strong>Média</strong> números digitados</p>`
    }
}

let array = []