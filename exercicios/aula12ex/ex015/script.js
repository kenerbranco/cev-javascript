function clicar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var anonasc = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    if (anonasc.value.length == 0 || Number(anonasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')    
    } else {
        var sexo = window.document.getElementsByName('radiosex')
        var idade = ano - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-masc.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescente-masc.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-masc.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-masc.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-fem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescente-fem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-fem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-fem.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}