function carregar() {
    var agora = new Date()
    var horario = agora.getHours()
    
    txtHora = window.document.getElementById('hora')
    imagem = window.document.getElementById('img')
    corpo = window.document.getElementById('corpo')
    
    txtHora.innerHTML = `Agora são ${horario} horas`
    
    if (horario >= 18 && horario < 24) {
        imagem.innerHTML = `<img src="imagens/noite.jpg" alt="foto noite">`
        document.body.style.background = 'rgb(66, 66, 87)'
    } else if (horario >= 0 && horario < 12) {
        imagem.innerHTML = `<img src="imagens/manha.jpg" alt="foto manha">`
        document.body.style.background = 'rgb(230, 231, 126)'
    } else {
        imagem.innerHTML = `<img src="imagens/tarde.jpg" alt="foto tarde">`
        document.body.style.background = 'rgb(241, 147, 85)'
    }
}